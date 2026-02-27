#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import csv
import os
import sys
from collections import OrderedDict
import re

DB_FILE = 'recall_database.csv'

PARENT_GROUPS = {
    # Nestlé Group
    'SMA': 'Nestlé', 'NAN': 'Nestlé', 'Nidina': 'Nestlé', 'Nativa': 'Nestlé', 
    'Alfamino': 'Nestlé', 'S-26': 'Nestlé', 'Beba': 'Nestlé', 'Guigoz': 'Nestlé', 
    'Nidal': 'Nestlé', 'Illuma': 'Nestlé', 'Lactogen': 'Nestlé', 'Nestogeno': 'Nestlé', 
    'Little Steps': 'Nestlé', 'Nestlé': 'Nestlé',
    
    # Danone Group
    'Aptamil': 'Danone', 'Cow & Gate': 'Danone', 'Nutrilon': 'Danone', 
    'Milumil': 'Danone', 'Milupa': 'Danone', 'Milura': 'Danone', 
    'Almiron': 'Danone', 'Dumex': 'Danone', 'Bebelac': 'Danone', 
    'Mellin': 'Danone', 'Gallia': 'Danone', 'Profutura': 'Danone', 
    'Danone': 'Danone',
    
    # Others
    'Alula': 'Sanulac', 'Sanulac': 'Sanulac', 'Lactalis': 'Lactalis',
    'Bimbosan': 'Hero', 'Bebelo': 'Hero', 'Hero': 'Hero',
    'Babybio': 'Vitagermine', 'Kendamil': 'Kendamil', 'ByHeart': 'ByHeart'
}

def get_canonical_brand(brand_raw, sub_brand_raw, product_raw):
    content = " ".join([brand_raw, sub_brand_raw, product_raw]).upper()
    for sub_b, parent in PARENT_GROUPS.items():
        if sub_b.upper() in content:
            return parent
    return brand_raw.strip() or sub_brand_raw.strip() or "Other"

def normalize_product(name):
    # Remove "Milk", "800g", "Stage X" variations to help matching
    name = name.upper()
    name = re.sub(r'\d+G', '', name)
    name = re.sub(r'MILK', '', name)
    name = re.sub(r'STAGE\s*\d+', '', name)
    name = re.sub(r'\s+', ' ', name).strip()
    return name

def clean_and_join(existing_val, new_val, separator='/'):
    if not existing_val: return new_val.strip()
    if not new_val: return existing_val.strip()
    items = []
    for s in [existing_val, new_val]:
        parts = re.split(r'[/,]', s)
        for p in parts:
            p = p.strip()
            if p and p not in items:
                items.append(p)
    items.sort()
    return separator.join(items)

def deduplicate():
    if not os.path.exists(DB_FILE):
        print(f"Error: {DB_FILE} not found!")
        sys.exit(1)

    batches = OrderedDict()
    removed_count = 0
    fieldnames = None
    
    with open(DB_FILE, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if not row.get('code'): continue
            
            code = row['code'].strip()
            brand = get_canonical_brand(row.get('brand',''), row.get('subBrand',''), row.get('product',''))
            product_norm = normalize_product(row.get('product',''))
            
            # Key: (Code, Brand Family, Normalized Product Name)
            key = (code, brand, product_norm)
            
            # Update the row with the canonical brand for consistency
            row['brand'] = brand
            
            if key in batches:
                existing = batches[key]
                # Merge region
                existing['country'] = clean_and_join(existing['country'], row['country'])
                
                # Keep the longer product name for display
                if len(row['product']) > len(existing['product']):
                    existing['product'] = row['product']
                
                # Documentation priority
                if 'resources/' in row['docUrl'] and 'resources/' not in existing['docUrl']:
                    existing['docUrl'] = row['docUrl']
                elif len(row['docUrl']) > len(existing['docUrl']):
                    existing['docUrl'] = row['docUrl']
                
                removed_count += 1
            else:
                batches[key] = row

    with open(DB_FILE, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in batches.values():
            writer.writerow(row)
    
    print(f"Deduplication complete. Combined {removed_count} redundant entries.")

if __name__ == "__main__":
    deduplicate()
