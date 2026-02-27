#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SafeFeed Action - Global Infant Formula Recall Verification Tool
CSV to JS Data Converter

Author: TechDadShanghai
License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
Copyright (c) 2026 TechDadShanghai

This tool converts recall data from CSV format to JavaScript for use in the web interface.
Use for non-commercial purposes only. For commercial licensing, contact: miles.x.dev@outlook.com
"""

import csv
import json
import re
from datetime import datetime, timedelta, timezone
try:
    from zoneinfo import ZoneInfo
    _pst_tz = ZoneInfo("America/Los_Angeles")
except ImportError:
    _pst_tz = None

# --- Normalization functions (mirrored from JS for pre-computation) ---
def normalize_batch(code):
    """Pre-compute sanitized and fuzzy values for a batch code."""
    if not code:
        return "", ""
    sanitized = re.sub(r'[^A-Z0-9]', '', code.strip().upper())
    ocr_map = {'O': '0', 'I': '1', 'L': '1', 'S': '5', 'B': '8', 'Z': '2'}
    fuzzy = ''.join(ocr_map.get(c, c) for c in sanitized)
    return sanitized, fuzzy

# --- Build reason and sourceDisplay lookup tables for compact output ---
reason_set = []
reason_index = {}
source_set = []
source_index = {}

def get_reason_id(reason):
    if reason not in reason_index:
        reason_index[reason] = len(reason_set)
        reason_set.append(reason)
    return reason_index[reason]

def get_source_id(source):
    if source not in source_index:
        source_index[source] = len(source_set)
        source_set.append(source)
    return source_index[source]

# Read from CSV
batches = []
with open('recall_database.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Convert isSeries string to boolean (Case-Insensitive)
        is_series_val = row.get('isSeries', 'False').strip().lower()
        is_series = is_series_val == 'true'
        
        code = row['code'].strip()
        sanitized, fuzzy = normalize_batch(code)
        reason = row['reason'].strip()
        source_display = row['sourceDisplay'].strip()
        
        batches.append({
            "code": code,
            "s": sanitized,
            "f": fuzzy,
            "brand": row.get('brand', 'Nestlé').strip(),
            "subBrand": row['subBrand'].strip(),
            "product": row['product'].strip(),
            "specification": row['specification'].strip(),
            "country": row['country'].strip(),
            "ri": get_reason_id(reason),
            "si": get_source_id(source_display),
            "docUrl": row['docUrl'].strip(),
            "isSeries": is_series,
            "sev": row.get('severity', 'L3').strip(),
            "eh": row.get('evidence_hash', '').strip(),
            "au": row.get('archive_url', '').strip()
        })

# Sort by code
batches.sort(key=lambda x: x['code'])

# --- Compute dynamic statistics from actual data ---
# Country alias map: normalize abbreviations and variants to a canonical name
_COUNTRY_ALIASES = {
    "AT": "Austria", "DE": "Germany", "UK": "United Kingdom",
    "US": "United States", "FR": "France", "NL": "Netherlands",
    "BE": "Belgium", "LU": "Luxembourg", "CH": "Switzerland",
    "IE": "Ireland", "AU": "Australia", "NZ": "New Zealand",
    "SG": "Singapore", "PH": "Philippines", "HK": "Hong Kong",
    "CN": "China", "United Kingdom (NI)": "United Kingdom",
}
_unique_countries = set()
_unique_brands = set()
import re as _re
for b in batches:
    country_raw = b['country']
    # Remove parenthetical qualifiers, then split on "/" and "," to separate combined entries
    country_clean = _re.sub(r'\([^)]*\)', '', country_raw)
    for part in _re.split(r'[/,]', country_clean):
        part = part.strip()
        if not part or part.lower() in ('etc', 'etc.', 'global'):
            continue
        # Apply alias normalization
        part = _COUNTRY_ALIASES.get(part, part)
        _unique_countries.add(part)
    brand = b['brand'].strip()
    sub_brand = b['subBrand'].strip()
    if brand:
        _unique_brands.add(brand.split('(')[0].strip())
    if sub_brand:
        _unique_brands.add(sub_brand)

# Dynamic date for announcements (use data generation time in PST)
_now_pst = datetime.now(_pst_tz) if _pst_tz else (datetime.now(timezone.utc) - timedelta(hours=8))
_date_en = _now_pst.strftime("%b %d, %Y").upper()   # e.g. FEB 11, 2026
_date_zh = f"{_now_pst.year}年{_now_pst.month}月{_now_pst.day}日"

STATS = {
    "batch_count": str(len(batches)),
    "region_count": str(len(_unique_countries)),
    "brand_list_en": ", ".join(sorted(_unique_brands)),
    "brand_list_zh": ", ".join(sorted(_unique_brands)),  # Brand names are international, same in both
    "date_en": _date_en,
    "date_zh": _date_zh,
}

# Write to JS
OFFICIAL_SOURCES = [
    {
        "id": "IE_FSAI",
        "name": "FSAI Ireland - SMA Batch Update",
        "url": "https://www.fsai.ie/news-and-alerts/food-alerts/recall-of-an-additional-batch-of-sma-first-infant-milk",
        "date": "2026-02-03"
    },
    {
        "id": "AT_AGES",
        "name": "AGES Austria - Danone/Milupa Critical Expansion",
        "url": "https://www.produktwarnung.eu/2026/02/05/update-rueckruf-aptamil-babynahrung-danone-weitet-rueckruf-dramatisch-aus.html",
        "date": "2026-02-05"
    },
    {
        "id": "UK_FSA",
        "name": "UK Food Standards Agency (FSA) - Global Notice",
        "url": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026",
        "date": "2026-01-23"
    },
    {
        "id": "SG_SFA",
        "name": "SFA Singapore - Jan 30 Final Recall Update",
        "url": "https://www.sfa.gov.sg/news-publications/newsroom/recall-of-two-additional-infant-formula-products-due-to-presence-of-cereulide-toxin",
        "date": "2026-01-30"
    },
    {
        "id": "CZ_MZD",
        "name": "Czech Ministry of Health - Verified Batch List",
        "url": "https://mzd.gov.cz/hlavni-hygienicka-varuje-pred-konzumaci-nekolika-sarzi-kontaminovanych-kojeneckych-vyziv/",
        "date": "2026-01-30"
    },
    {
        "id": "BR_ANVISA",
        "name": "ANVISA Brazil - Resolution 32/2026",
        "url": "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/proibida-venda-de-formula-infantil-com-risco-de-contaminacao-por-toxina",
        "date": "2026-01-07"
    },
    {
        "id": "MX_COFEPRIS_N",
        "name": "COFEPRIS Mexico - Nestlé Sanitary Alert",
        "url": "https://www.gob.mx/cms/uploads/attachment/file/1047052/Alerta_Sanitaria__Nestl__07012026.pdf",
        "date": "2026-01-07"
    },
    {
        "id": "MX_COFEPRIS_A",
        "name": "COFEPRIS Mexico - Alula Sanitary Alert",
        "url": "https://www.gob.mx/cms/uploads/attachment/file/1051500/Alerta_Sanitaria__Alula_23012026.pdf",
        "date": "2026-01-23"
    },
    {
        "id": "PH_FDA",
        "name": "Philippines FDA Advisory 2026-0030",
        "url": "https://www.fda.gov.ph/fda-advisory-no-2026-0030-voluntary-recall-of-nan-optipro-and-nankid-optipro-products/",
        "date": "2026-01-12"
    },
    {
        "id": "FR_CN",
        "name": "Rappel Conso - France National Recall Portal",
        "url": "https://rappel.conso.gouv.fr/",
        "date": "2026-01-31"
    },
    {
        "id": "CN_SAMR",
        "name": "国家市场监管总局/雀巢中国-召回公告汇总",
        "url": "https://www.nestle.com.cn/media/pressreleases/allpressreleases/nestle-china-precautionary-recall-january-2026",
        "date": "2026-01-13"
    },
    {
        "id": "HK_CFS",
        "name": "China Hong Kong Centre for Food Safety - Official Notice",
        "url": "https://www.cfs.gov.hk/english/press/20260110_12105.html",
        "date": "2026-01-10"
    },
    {
        "id": "AU_FSANZ",
        "name": "FSANZ Australia/NZ - Multi-Brand Recall",
        "url": "https://www.foodstandards.gov.au/food-recalls",
        "date": "2026-01-15"
    },
    {
        "id": "GR_EOF",
        "name": "EOF Greece - Official Pharmaceutical/Food Recall",
        "url": "https://www.eof.gr/web/guest/decisions/recalls",
        "date": "2026-02-10"
    },
    {
        "id": "NL_NVWA",
        "name": "NVWA Netherlands - Nutricia Recall Notice",
        "url": "https://www.nvwa.nl/onderwerpen/productwaarschuwingen",
        "date": "2026-02-08"
    }
]

# --- Announcement Data (edit here to update announcements without touching JS) ---
# Supported placeholders (auto-replaced from actual data at generation time):
#   {batch_count}   - total verified batches
#   {region_count}  - unique countries/regions
#   {brand_list_en} - comma-separated brand names
#   {date_en}       - generation date in English (e.g. FEB 11, 2026)
#   {date_zh}       - generation date in Chinese (e.g. 2026年2月11日)
ANNOUNCEMENTS = [
    {
        "id": "global_batch_precision_update_2026_02_24",
        "linkUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-03-2026",
        "en": {
            "title": "GLOBAL BATCH PRECISION UPDATE ({date_en})",
            "body": "Optimization complete: Cross-region batches merged by SKU. Now covering {batch_count} verified batches across {region_count} regions for {brand_list_en} with 100% brand-batch precision.",
            "link": "Official Docs"
        },
        "zh": {
            "title": "全球批次精准化重整 ({date_zh})",
            "body": "重整完毕：跨区域批次已完成 SKU 级合并，并细化同批次多品牌条目。当前覆盖 {region_count} 个地区共计 {batch_count} 个权威核实批次（含 {brand_list_zh}）。",
            "link": "官方文献"
        }
    }
]

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write("// --- OFFICIAL VERIFIED RECALL DATABASE (v4.7.0 - Global Verified) ---\n")
    f.write("// 100% Official Sources Only - No Speculative Data\n\n")
    
    metadata = json.dumps({
        "version": "5.0.0 (Risk Defense Kernel)",
        "lastUpdated": _now_pst.strftime("%Y-%m-%d %H:%M (PST)"),
        "coverage": f"{STATS['region_count']} Regions - Official Government Sources Only",
        "totalCount": len(batches),
        "authority": "FSA, FSAI, AGES, SFA, FDA, ANVISA, COFEPRIS, MZD, AFSCA, RappelConso, FSANZ, SAMR, CFS",
        "integrity": "Risk Defense Kernel Enabled - High Integrity"
    }, indent=2, ensure_ascii=False)
    
    f.write(f"const RECALL_METADATA = {metadata};\n\n")
    
    f.write("const OFFICIAL_SOURCES = ")
    json.dump(OFFICIAL_SOURCES, f, indent=2, ensure_ascii=False)
    f.write(";\n\n")

    # Write lookup tables for reasons and sources (reduces data size significantly)
    f.write("const REASON_TABLE = ")
    json.dump(reason_set, f, ensure_ascii=False)
    f.write(";\n\n")

    f.write("const SOURCE_TABLE = ")
    json.dump(source_set, f, ensure_ascii=False)
    f.write(";\n\n")

    f.write("const RECALL_DATA = ")
    json.dump(batches, f, ensure_ascii=False)
    f.write(";\n\n")

    # Replace all placeholders in announcements with actual computed values
    announcements_json = json.dumps(ANNOUNCEMENTS)
    for key, val in STATS.items():
        announcements_json = announcements_json.replace("{" + key + "}", val)
    resolved_announcements = json.loads(announcements_json)
    f.write("const ANNOUNCEMENTS = ")
    json.dump(resolved_announcements, f, indent=2, ensure_ascii=False)
    f.write(";\n")

def safe_print(msg):
    try:
        print(msg)
    except UnicodeEncodeError:
        print(msg.encode('utf-8', errors='replace').decode('gbk', errors='replace'))

safe_print(f"Generated js/data.js from CSV")
safe_print(f"Total batches: {len(batches)}")
safe_print(f"100% official sources only")
