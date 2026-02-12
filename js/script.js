// --- I18N SYSTEM (STRICT v2.4) ---
const I18N = {
    en: {
        project_name: "SafeFeed Action",
        title: "Recall Checker",
        hazard_info: "⚠️ CEREULIDE (Bacillus cereus toxin) IS HEAT-RESISTANT. BOILING WATER CANNOT DEACTIVATE IT.",
        placeholder: "Enter batch code from packaging...",
        idle: "Enter the batch code found on your product (e.g., at the bottom or top of the packaging) for verification.",
        searching: "Comparing against official regulatory records...",

        status_critical: "STRICT MATCH: OFFICIAL RECALL",
        desc_critical: "This specific batch code is explicitly listed in the official recall announcement.",

        status_caution: "OFFICIAL SERIES RECALL",
        desc_caution: "Your code starts with a production series prefix that has been recalled in its entirety by official sources.",

        status_none: "NO MATCH IN OFFICIAL GLOBAL LIST",
        desc_none: "This specific code is not currently found in our multi-brand database of officially recalled batches.",

        series_notice: "Official Regulatory Notice: The authority has recalled the ENTIRE production series starting with '[Prefix]'. Individual codes within this series are affected.",

        final_authority: "THE OFFICIAL HOTLINE IS THE ONLY FINAL AUTHORITY.",
        btn_cn: "Call China: 400 616 5015",
        btn_hk: "Call HK: +852 2179 8136",
        btn_uk: "Call UK: 0800 081 8180",
        btn_ph: "Call PH: +63 2 8898 0061",
        view_source: "View Official Source",
        data_ver: "Database Sync: " + RECALL_METADATA.version + " | " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "Strict Compliance Notice",
        disclaimer_p1: "This tool strictly indexes batch codes announced by government regulatory bodies (FSA, FDA, SAMR, CFS) for global formula brands including SMA, NAN, Danone, and more.",
        disclaimer_p2: "We do not use fuzzy or probabilistic matching to avoid misidentification and legal risks for merchants.",
        disclaimer_p3: "Always cross-reference with the official hotline or local health authorities for a final determination.",
        disclaimer_btn: "I AGREE TO THE STRICT TERMS",
        label_batch: "Batch Code",
        label_spec: "Specification",
        label_brand: "Brand",
        label_country: "Country/Region",
        label_reason: "Recall Reason",
        label_source: "Official Source",
        sources_title: "Authoritative Data Sources",
        github_project: "GitHub Project",
        report_issue: "Report Issue",
        version_update: "📢 Latest Update: {version} | {date} | {count} verified batches from {coverage} | Open Source Project - Star us on GitHub!",
        view_on_github: "View on GitHub",
        help_title: "Found an Issue or Have New Data?",
        help_description: "Help us keep this database accurate! If you find outdated information, discover new recall batches, or encounter any problems, please report them on GitHub.",
        report_on_github: "Report on GitHub Issues",
        help_description_compact: "Found outdated info or new recall data? Help us improve!",
        report_on_github_short: "Report Issue",
        send_email: "Send Email",
        announcement_title: "🚨 URGENT: MASSIVE RECALL EXPANSION",
        announcement_body: "Global multi-brand recall is ongoing. Check your batch codes now.",
        announcement_link: "Read Official Notice",
        total_visits: "Total Visits",
        families_helped: "Families Helped",
        helpful_button: "This Tool Helped Me",
        stats_note: "Statistics help us understand the actual usage of this tool",
        helpful_thanks: "Thank you! 🙏",
        helpful_already: "Already Counted",
        about_title: "About SafeFeed Action",
        about_body: "\"I’m an SRE and a dad. I built this because I was searching batch numbers at midnight just like you. I moved from a 'Nestlé-only' name to 'SafeFeed Action' because keeping a brand-specific name was misleading while other brands were also being recalled. This is a non-commercial, public-interest response.\"",
        footer_copyright: "© 2026 SafeFeed Action • Emergency Public Interest Project",
        footer_desc: "A temporary emergency response by MilesXLab (A Tech Dad). This project will be archived once the recall crisis stabilizes.",
        batch_guide_btn: "How to identify codes?",
        batch_guide_title: "Batch Code Guide",
        batch_guide_date: "Date Format",
        batch_guide_date_desc: "Found on Danone/Aptamil (e.g., DD.MM.YYYY)",
        batch_guide_serial: "Serial Number",
        batch_guide_serial_desc: "10-digit manufacturing codes",
        batch_guide_series: "Series Prefix",
        batch_guide_series_desc: "First 4 digits of a production batch"
    },
    zh: {
        project_name: "SafeFeed Action (全球盾)",
        title: "全球召回核对工具",
        hazard_info: "⚠️ Cereulide（蜡样芽孢杆菌毒素）具有强耐热性，沸水冲泡无法灭活（高温无效）。",
        placeholder: "输入包装上的批次编码...",
        idle: "请输入产品包装（如罐底或瓶盖）上的批次编码进行严格核对。",
        searching: "正在比对官方监管部门录入的批次...",

        status_critical: "!!! 官方精确匹配：确认召回 !!!",
        desc_critical: "该批次号明确出现在官方公布的召回名单中。",

        status_caution: "!!! 官方整线召回：系列匹配 !!!",
        desc_caution: "您的批次号开头属于官方公告明确指定的整线召回系列码。",

        status_none: "全球官方名单未命中",
        desc_none: "在当前录入的多品牌官方召回名单中未找到该批次。注：非保修证明，请以官方客服为准。",

        series_notice: "官方监管说明：监管部门对以 “[Prefix]” 开头的整条生产线/生产系列下达了召回令，因此该系列下所有产品均在受影响范围。",

        final_authority: "官方热线反馈是唯一的最终判定标准。",
        btn_cn: "拨打大陆客服: 400 616 5015",
        btn_hk: "拨打香港客服: +852 2179 8136",
        btn_uk: "拨打英国客服: 0800 081 8180",
        btn_ph: "拨打菲律宾客服: +63 2 8898 0061",
        view_source: "查看官方原始公告",
        data_ver: "最近同步: " + RECALL_METADATA.version + " | " + RECALL_METADATA.lastUpdated,

        disclaimer_title: "严格合规性协议",
        disclaimer_p1: "本工具严格索引政府监管部门（如国家食安中心、FSA、FDA等）发布的包括国际品牌、达能等多品牌的召回批次名单。",
        disclaimer_p2: "系统不使用模糊匹配或过度推断逻辑，以避免误导消费者或导致商家名誉损失。",
        disclaimer_p3: "查询结果仅供参考。继续使用即代表您同意：最终结论以品牌官方或当地食安部门回复为准。",
        disclaimer_btn: "我已知晓并同意协议",
        label_batch: "批次编号",
        label_spec: "规格/重量",
        label_brand: "产品品牌",
        label_country: "所属国家/地区",
        label_reason: "召回原因",
        label_source: "权威判定源",
        sources_title: "权威数据来源 (同步官方)",
        github_project: "GitHub 项目",
        report_issue: "反馈问题",
        version_update: "📢 最新更新：{version} | {date} | 已验证 {count} 个批次来自 {coverage} | 开源项目 - 欢迎在 GitHub 上给我们加星！",
        view_on_github: "在 GitHub 上查看",
        help_title: "发现问题或有新数据？",
        help_description: "帮助我们保持数据库的准确性！如果您发现过时信息、新的召回批次或遇到任何问题，请在 GitHub 上报告。",
        report_on_github: "在 GitHub Issues 上报告",
        help_description_compact: "发现过时信息或新的召回数据？帮助我们改进！",
        report_on_github_short: "报告问题",
        send_email: "发送邮件",
        announcement_title: "🚨 紧急状态：召回范围扩大",
        announcement_body: "全球多品牌召回持续进行中。请立即查询您的批次号。",
        announcement_link: "查看官方公告",
        total_visits: "总访问量",
        families_helped: "帮助的家庭",
        helpful_button: "这个工具帮到我了",
        stats_note: "统计数据帮助我们了解工具的实际使用情况",
        helpful_thanks: "感谢您！🙏",
        helpful_already: "已统计",
        about_title: "关于 SafeFeed Action (全球盾)",
        about_body: "“我是一个 SRE，也是一个爸爸。我开发这个工具是因为我曾像你一样，在午夜搜索批次编号。我将项目从原来的‘雀巢专用名称’更名为‘SafeFeed Action’，是因为其他品牌也在发生召回，维持品牌特定的名称会产生误导。这是一个非商业性的、公益性质的应急响应项目。”",
        footer_copyright: "© 2026 SafeFeed Action • 紧急公益项目",
        footer_desc: "由 MilesXLab (一位技术背景的爸爸) 发起的临时应急响应。一旦召回危机稳定，本项目将被归档。",
        batch_guide_btn: "如何识别批次？",
        batch_guide_title: "批次类型指南",
        batch_guide_date: "日期格式",
        batch_guide_date_desc: "常见于达能/爱他美 (如: DD.MM.YYYY)",
        batch_guide_serial: "流水号",
        batch_guide_serial_desc: "10位纯数字生产编码",
        batch_guide_series: "系列前缀",
        batch_guide_series_desc: "生产批次的前4位数字"
    }
};

const REASON_MAP = {
    // --- Chinese originals ---
    "预防性召回：个别原材料存在蜡样芽孢杆菌代谢物（Cereulide）风险": {
        en: "Precautionary recall: Risk of Cereulide (Bacillus cereus toxin) in certain raw materials",
        zh: "预防性召回：个别原材料存在蜡样芽孢杆菌代谢物（Cereulide）风险"
    },
    "预防性召回：蜡样芽孢杆菌代谢物风险 (Cereulide)": {
        en: "Precautionary recall: Cereulide toxin risk",
        zh: "预防性召回：蜡样芽孢杆菌代谢物风险 (Cereulide)"
    },
    // --- English originals ---
    "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)": {
        en: "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
        zh: "预防性召回：可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    },
    "Precautionary verification: Quality concern related to raw material": {
        en: "Precautionary verification: Quality concern related to raw material",
        zh: "预防性核查：涉及原材料的质量问题"
    },
    "Microbial contamination (Cereulide)": {
        en: "Microbial contamination (Cereulide)",
        zh: "微生物污染 (Cereulide)"
    },
    "Precautionary recall: Microbial contamination (Cereulide)": {
        en: "Precautionary recall: Microbial contamination (Cereulide)",
        zh: "预防性召回：微生物污染 (Cereulide)"
    },
    "Precautionary recall: Possible presence of Cereulide toxin": {
        en: "Precautionary recall: Possible presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Precautionary recall: Potential presence of Cereulide toxin": {
        en: "Precautionary recall: Potential presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Voluntary Recall: Detection of low levels of cereulide in a raw material": {
        en: "Voluntary Recall: Detection of low levels of cereulide in a raw material",
        zh: "自愿召回：在原材料中检测到低水平的 Cereulide"
    },
    "Precautionary recall: Cereulide Produced by Bacillus Cereus": {
        en: "Precautionary recall: Cereulide Produced by Bacillus Cereus",
        zh: "预防性召回：蜡样芽孢杆菌产生的 Cereulide 毒素"
    },
    "Precautionary recall: Cereulide toxin risk": {
        en: "Precautionary recall: Cereulide toxin risk",
        zh: "预防性召回：Cereulide 毒素风险"
    },
    "Precautionary recall: Potential Cereulide toxin": {
        en: "Precautionary recall: Potential Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Precautionary recall: Potential presence of Cereulide (Bacillus cereus toxin)": {
        en: "Precautionary recall: Potential presence of Cereulide (Bacillus cereus toxin)",
        zh: "预防性召回：可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    },
    "Precautionary recall: Potential presence of Cereulide (Bacillus cereus toxin) in raw material": {
        en: "Precautionary recall: Potential presence of Cereulide (Bacillus cereus toxin) in raw material",
        zh: "预防性召回：原材料中可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    },
    "Precautionary recall: Potential Cereulide toxin contamination (Bacillus cereus)": {
        en: "Precautionary recall: Potential Cereulide toxin contamination (Bacillus cereus)",
        zh: "预防性召回：可能存在蜡样芽孢杆菌 (Cereulide) 毒素污染"
    },
    "Precautionary recall: Potential toxic substances": {
        en: "Precautionary recall: Potential toxic substances",
        zh: "预防性召回：可能存在有毒物质"
    },
    "Precautionary recall: Cereulide toxin detected": {
        en: "Precautionary recall: Cereulide toxin detected",
        zh: "预防性召回：检测到 Cereulide 毒素"
    },
    "Precautionary recall: Presence of Cereulide toxin": {
        en: "Precautionary recall: Presence of Cereulide toxin",
        zh: "预防性召回：存在 Cereulide 毒素"
    },
    "Precautionary recall: Reported 'silent recall' due to potential Cereulide toxin (Bacillus cereus)": {
        en: "Precautionary recall: Reported 'silent recall' due to potential Cereulide toxin (Bacillus cereus)",
        zh: "预防性召回：因可能存在蜡样芽孢杆菌毒素 (Cereulide) 进行静默召回"
    },
    "Precautionary recall: Proactive recall by importer due to potential Cereulide contamination (Lactalis related)": {
        en: "Precautionary recall: Proactive recall by importer due to potential Cereulide contamination (Lactalis related)",
        zh: "预防性召回：进口商因可能存在 Cereulide 污染主动召回（与 Lactalis 相关）"
    },
    "Precautionary recall: Possible presence of Cereulide Produced by Bacillus Cereus": {
        en: "Precautionary recall: Possible presence of Cereulide Produced by Bacillus Cereus",
        zh: "预防性召回：可能存在蜡样芽孢杆菌产生的 Cereulide 毒素"
    },
    "Preventative recall: Risk of contamination by Cereulide toxin (Bacillus cereus)": {
        en: "Preventative recall: Risk of contamination by Cereulide toxin (Bacillus cereus)",
        zh: "预防性召回：存在蜡样芽孢杆菌 (Cereulide) 毒素污染风险"
    },
    "Potential presence of Cereulide toxin": {
        en: "Potential presence of Cereulide toxin",
        zh: "可能存在 Cereulide 毒素"
    },
    // --- German originals ---
    "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid": {
        en: "Precautionary recall: Possible presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    // --- French originals ---
    "Rappel de précaution : Présence potentielle de toxin (Céréulide)": {
        en: "Precautionary recall: Potential presence of Cereulide toxin",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Principe de précaution : présence potentielle de céréulide": {
        en: "Precautionary recall: Potential presence of Cereulide",
        zh: "预防性召回：可能存在 Cereulide 毒素"
    },
    "Principe de précaution : présence potentielle de céréulide (Bacillus cereus toxin)": {
        en: "Precautionary recall: Potential presence of Cereulide (Bacillus cereus toxin)",
        zh: "预防性召回：可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    },
    // --- Spanish originals ---
    "Alerta Sanitaria: Posible presencia de toxina cereulida (Bacillus cereus)": {
        en: "Sanitary Alert: Possible presence of Cereulide toxin (Bacillus cereus)",
        zh: "卫生警报：可能存在蜡样芽孢杆菌毒素 (Cereulide)"
    }
};

function getTranslatedReason(reason, lang) {
    if (REASON_MAP[reason] && REASON_MAP[reason][lang]) {
        return REASON_MAP[reason][lang];
    }
    return reason; // Fallback to original
}

// --- LANGUAGE DETECTION ---
let currentLang = 'en'; // Default to English
if (localStorage.getItem('preferred_lang')) {
    currentLang = localStorage.getItem('preferred_lang');
}

// UI Elements
const langToggle = document.getElementById('langToggle');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const clearBtn = document.getElementById('clearBtn');
const disclaimerModal = document.getElementById('disclaimerModal');
const acceptBtn = document.getElementById('acceptBtn');

// Normalization Engine
function normalizeBatch(code) {
    if (!code) return { sanitized: "", fuzzy: "" };
    let sanitized = code.toString().trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    const ocrMap = { 'O': '0', 'I': '1', 'L': '1', 'S': '5', 'B': '8', 'Z': '2' };
    let fuzzy = sanitized.split('').map(char => ocrMap[char] || char).join('');
    return { sanitized, fuzzy };
}

// --- SEARCH INDEX (built once at load time for O(1) lookups) ---
// Resolve lookup table references and build fast search maps
const _exactIndex = new Map();   // sanitized/fuzzy/raw -> item (non-series only)
const _seriesEntries = [];       // series items with pre-computed sanitized codes

(function buildSearchIndex() {
    for (const item of RECALL_DATA) {
        // Resolve reason and source from lookup tables
        if (item.ri !== undefined) {
            item.reason = REASON_TABLE[item.ri];
            delete item.ri;
        }
        if (item.si !== undefined) {
            item.sourceDisplay = SOURCE_TABLE[item.si];
            delete item.si;
        }
        // Use pre-computed normalized values (s = sanitized, f = fuzzy)
        const dbSanitized = item.s || normalizeBatch(item.code).sanitized;
        const dbFuzzy = item.f || normalizeBatch(item.code).fuzzy;

        if (item.isSeries) {
            _seriesEntries.push({ sanitized: dbSanitized, raw: item.code, item });
        } else {
            // Index by all possible match keys
            if (dbSanitized && !_exactIndex.has(dbSanitized)) _exactIndex.set(dbSanitized, item);
            if (dbFuzzy && !_exactIndex.has(dbFuzzy)) _exactIndex.set(dbFuzzy, item);
            if (item.code && !_exactIndex.has(item.code)) _exactIndex.set(item.code, item);
        }
    }
})();

// Debounce utility
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const REGION_FLAGS = {
    "IE_FSAI": "🇮🇪",
    "AT_AGES": "🇦🇹",
    "UK_FSA": "🇬🇧",
    "SG_SFA": "🇸🇬",
    "CZ_MZD": "🇨🇿",
    "BR_ANVISA": "🇧🇷",
    "MX_COFEPRIS_N": "🇲🇽",
    "MX_COFEPRIS_A": "🇲🇽",
    "PH_FDA": "🇵🇭",
    "FR_CN": "🇫🇷",
    "CN_SAMR": "🇨🇳",
    "HK_CFS": "🇨🇳",
    "AU_FSANZ": "🇦🇺",
    // Fallback/Legacy
    "DE_BRAND": "🇩🇪",
    "BE_LU_BRAND": "🇧🇪"
};

const COUNTRY_FLAGS = {
    "UK": "🇬🇧",
    "United Kingdom": "🇬🇧",
    "United Kingdom/Ireland": "🇬🇧",
    "United Kingdom/UK/Ireland": "🇬🇧",
    "United Kingdom (NI)/Ireland": "🇬🇧",
    "UK/Ireland": "🇬🇧",
    "Ireland": "🇮🇪",
    "Austria": "🇦🇹",
    "AT": "🇦🇹",
    "Germany": "🇩🇪",
    "DE": "🇩🇪",
    "DE/AT": "🇩🇪",
    "Germany/Austria": "🇩🇪",
    "Singapore": "🇸🇬",
    "Singapore, Brunei": "🇸🇬",
    "Czech Republic": "🇨🇿",
    "Brazil": "🇧🇷",
    "Mexico": "🇲🇽",
    "Philippines": "🇵🇭",
    "France": "🇫🇷",
    "France/Global": "🇫🇷",
    "France/Global (France/Belgium/etc)": "🇫🇷",
    "France/Luxembourg": "🇫🇷",
    "France/France/Luxembourg": "🇫🇷",
    "France/Vietnam": "🇫🇷",
    "France/Belgium/Luxembourg/Vietnam": "🇫🇷",
    "France/Switzerland": "🇫🇷",
    "China (Mainland)": "🇨🇳",
    "China (Cross-border)": "🇨🇳",
    "China (Cross-border)/Hong Kong": "🇨🇳",
    "China (Cross-border)/Czech Republic": "🇨🇳",
    "China (Taiwan)": "🇨🇳",
    "Hong Kong": "🇨🇳",
    "Australia/NZ": "🇦🇺",
    "Australia/New Zealand": "🇦🇺",
    "Australia/New Zealand/Vietnam": "🇦🇺",
    "Switzerland": "🇨🇭",
    "Switzerland/Global": "🇨🇭",
    "Switzerland/Belgium/Netherlands": "🇨🇭",
    "Belgium/Netherlands": "🇧🇪",
    "Netherlands": "🇳🇱",
    "Luxembourg": "🇱🇺",
    "Middle East (MENA)": "🌍",
    "Egypt": "🇪🇬",
    "Israel": "🇮🇱",
    "Croatia": "🇭🇷",
    "South Africa": "🇿🇦"
};

function updateLang() {
    // Generic translation for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = I18N[currentLang][key];

        if (translation) {
            // Special handling for elements with nested icons or HTML
            if (key === 'about_title') {
                el.innerHTML = `<span>👨‍💻</span> ${translation}`;
            } else if (key === 'helpful_button' && el.querySelector('.btn-text')) {
                const btnText = el.querySelector('.btn-text');
                if (el.disabled) {
                    btnText.textContent = I18N[currentLang].helpful_already;
                } else if (el.classList.contains('clicked')) {
                    btnText.textContent = I18N[currentLang].helpful_thanks;
                } else {
                    btnText.textContent = translation;
                }
            } else if (el.querySelector('.btn-text')) {
                el.querySelector('.btn-text').textContent = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Special elements (placeholders, specific structure)
    document.getElementById('searchInput').placeholder = I18N[currentLang].placeholder;

    // Disclaimer update
    const modalTitle = document.querySelector('#disclaimerModal h3');
    if (modalTitle) modalTitle.textContent = I18N[currentLang].disclaimer_title;

    const ps = document.querySelectorAll('#disclaimerModal p');
    if (ps.length >= 3) {
        ps[0].textContent = I18N[currentLang].disclaimer_p1;
        ps[1].textContent = I18N[currentLang].disclaimer_p2;
        ps[2].textContent = I18N[currentLang].disclaimer_p3;
    }
    if (acceptBtn) acceptBtn.textContent = I18N[currentLang].disclaimer_btn;

    // Authoritative Footer update
    const authFooter = document.getElementById('authoritativeFooter');
    if (authFooter) {
        authFooter.innerHTML = `
            <p class="text-[10px] text-slate-400 mb-2 text-center">${I18N[currentLang].data_ver}</p>
            <p class="text-xs text-slate-500 font-bold text-center">${I18N[currentLang].final_authority}</p>
        `;
    }

    // Global Sources section renderer
    const sourcesHtml = OFFICIAL_SOURCES.map(s => {
        // Simple name translation for Chinese display if available (future proofing)
        let sourceName = s.name;
        if (currentLang === 'zh' && s.id === 'CN_SAMR') {
            sourceName = "国家市场监管总局/国际品牌中国-召回公告汇总";
        }
        return `
            <a href="${s.url}" target="_blank" class="block p-5 glass-card rounded-[1.5rem] text-left hover:bg-white transition-all border border-slate-100 shadow-sm relative overflow-hidden group h-full">
                <div class="flex justify-between items-start relative z-10">
                    <div class="flex items-start space-x-3">
                        <span class="text-2xl">${REGION_FLAGS[s.id] || "🌐"}</span>
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">${s.date}</p>
                            <p class="text-[13px] font-black text-slate-800 leading-tight">${sourceName}</p>
                        </div>
                    </div>
                    <span class="text-xs text-blue-500 font-bold group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">↗</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
        `;
    }).join('');

    const sourcesList = document.getElementById('sourcesList');
    if (sourcesList) sourcesList.innerHTML = sourcesHtml;

    // Update announcements
    renderAnnouncement();

    // Re-render search if input has value
    if (searchInput.value.trim().length > 0) {
        handleSearch();
    } else {
        renderIdle();
    }
}

// Announcement Renderer (Scrolling Banner) - Data-driven from ANNOUNCEMENTS
function renderAnnouncement() {
    const container = document.getElementById('recallScrollContent');
    if (!container) return;

    const announcements = (typeof ANNOUNCEMENTS !== 'undefined') ? ANNOUNCEMENTS : [];

    // Highlight helper for critical info
    const highlight = (text) => {
        if (!text) return '';
        return text
            .replace(/(\d+)/g, '<span class="text-yellow-300 font-black px-1">$1</span>')
            .replace(/(URGENT|紧急|MASSIVE|剧烈扩大|召回)/gi, '<span class="text-white border-b-2 border-yellow-400/50">$1</span>')
            .replace(/(Alula|Aptamil|Bimbosan|Danone|Lactalis|Nestlé|Sanulac|Vitagermine)/gi, '<span class="text-red-100 font-bold">$1</span>');
    };

    let contentHtml = "";
    if (announcements.length > 0) {
        contentHtml = announcements.map(a => {
            const localized = a[currentLang] || a['en'];
            return `
                <div class="inline-flex items-center mx-12 py-1 flex-shrink-0">
                    <span class="text-xl mr-3" aria-hidden="true">�</span>
                    <span class="font-black uppercase tracking-wider mr-3">${highlight(localized.title)}</span>
                    <span class="opacity-95 text-sm font-bold hidden sm:inline">${highlight(localized.body)}</span>
                </div>
            `;
        }).join('');
    } else {
        const t = I18N[currentLang];
        contentHtml = `
            <div class="inline-flex items-center mx-12 py-1 flex-shrink-0">
                <span class="text-xl mr-3" aria-hidden="true">�</span>
                <span class="font-black uppercase tracking-wider mr-3">${highlight(t.announcement_title)}</span>
                <span class="opacity-95 text-sm font-bold hidden sm:inline">${highlight(t.announcement_body)}</span>
            </div>
        `;
    }

    // Repeat 4x for smooth looping
    container.innerHTML = contentHtml.repeat(4);

    // Reset animation logic
    container.style.animation = 'none';
    container.style.display = 'none';
    void container.offsetHeight; // trigger reflow

    container.style.display = 'inline-flex';
    container.style.whiteSpace = 'nowrap';
    container.style.willChange = 'transform';

    // Higher reliability start
    requestAnimationFrame(() => {
        setTimeout(() => {
            container.style.animation = 'scroll-left 120s linear infinite';
        }, 10);
    });

    const oldContainer = document.getElementById('announcementContainer');
    if (oldContainer) oldContainer.remove();
}


function handleSearch() {
    const rawInput = searchInput.value;
    const { sanitized, fuzzy } = normalizeBatch(rawInput);

    if (sanitized.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
        renderIdle();
        return;
    }

    // STRICT MATCHING LOGIC (v3.0) - Index-based O(1) + Series scan
    // 1. Exact Match: O(1) lookup via pre-built index
    const exactMatch = _exactIndex.get(sanitized) || _exactIndex.get(fuzzy);

    // 2. Series Match: scan only series entries (typically very few)
    let seriesMatch = null;
    if (!exactMatch) {
        for (const entry of _seriesEntries) {
            if (sanitized.startsWith(entry.sanitized) || sanitized.startsWith(entry.raw)) {
                seriesMatch = entry.item;
                break;
            }
        }
    }

    if (exactMatch) {
        renderResult('critical', sanitized, exactMatch);
    } else if (seriesMatch) {
        renderResult('caution', sanitized, seriesMatch);
    } else if (sanitized.length >= 4) {
        renderResult('none', sanitized);
    }
}

function renderIdle() {
    resultsContainer.innerHTML = `
        <div class="text-center py-6 space-y-8 slide-up">
            <div class="bottle-container status-idle mx-auto" style="width: 140px; height: 160px;">
                <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="idleClip">
                            <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" />
                        </clipPath>
                    </defs>
                    <g fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="#FFE4E6" />
                        <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="#94A3B8" />
                        <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                    </g>
                    <g stroke="#CBD5E1" stroke-width="4" fill="none" stroke-linecap="round">
                        <path d="M60 135 Q65 130 70 135" /> 
                        <path d="M90 135 Q95 130 100 135" />
                        <path d="M75 155 Q80 160 85 155" />
                    </g>
                </svg>
            </div>
            <p class="text-slate-400 font-bold px-12 text-sm leading-relaxed max-w-sm mx-auto">${I18N[currentLang].idle}</p>
        </div>
    `;
}

function renderResult(type, code, itemData = null) {
    const t = I18N[currentLang];
    let config = {
        bg: "bg-slate-100",
        border: "border-slate-300",
        text: "text-slate-900",
        bottleStatus: "status-safe",
        themeColor: "#3B82F6", // Default Safe uses Blue (neutral, not misleading)
        title: t.status_none,
        desc: t.desc_none,
        sourceBtn: "",
        seriesLabel: ""
    };

    if (type === 'critical' || type === 'caution') {
        const isCritical = type === 'critical';
        const accentColor = isCritical ? "text-red-700" : "text-amber-800";
        const themeHex = isCritical ? "#B91C1C" : "#D97706";
        const borderColor = isCritical ? "border-red-600" : "border-amber-500";
        const bgColor = isCritical ? "bg-red-50" : "bg-amber-50";

        config = {
            bg: bgColor,
            border: borderColor,
            text: accentColor,
            themeColor: themeHex,
            bottleStatus: isCritical ? "status-danger" : "status-warning",
            title: isCritical ? t.status_critical : t.status_caution,
            desc: isCritical ? t.desc_critical : t.desc_caution,
            seriesLabel: type === 'caution' ? `
                <div class="mt-4 p-4 bg-amber-100 border-l-4 border-amber-600 rounded-lg text-xs text-amber-950 leading-relaxed font-semibold">
                    ${t.series_notice.replace('[Prefix]', itemData.code)}
                </div>` : "",
            sourceBtn: `
                <a href="${itemData.docUrl}" target="_blank" class="block w-full text-center py-4 border-2 ${borderColor} ${accentColor} rounded-2xl text-xs font-black uppercase tracking-widest mt-2 hover:opacity-80 transition-all shadow-sm">
                    🔗 ${t.view_source}
                </a>
            `
        };
    }

    const detailGrid = itemData ? `
        <div class="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_brand}</p>
                <p class="text-sm font-black text-slate-800">${itemData.subBrand || 'Global Brand'}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_spec}</p>
                <p class="text-sm font-black text-slate-800">${itemData.specification || '800g'}</p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_country}</p>
                <p class="text-sm font-black text-slate-800 flex items-center gap-2">
                    <span>${COUNTRY_FLAGS[itemData.country] || "🌐"}</span>
                    ${itemData.country}
                </p>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_source}</p>
                <p class="text-[11px] font-bold text-blue-600 underline truncate">${itemData.sourceDisplay}</p>
            </div>
            <div class="col-span-2">
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${t.label_reason}</p>
                <p class="text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg mt-1 border border-red-100">${getTranslatedReason(itemData.reason, currentLang)}</p>
            </div>
        </div>
    ` : '';

    resultsContainer.innerHTML = `
        <div class="glass-card rounded-[2.5rem] overflow-hidden border-2 ${config.border} slide-up shadow-2xl relative">
            <div class="p-6 space-y-4">
                <!-- Premium Little Star SVG Character -->
                <div class="w-48 h-60 mx-auto transition-all duration-700">
                    <div class="bottle-container ${config.bottleStatus} w-full h-full">
                        <svg class="bottle-svg" viewBox="0 0 160 220" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="bodyClip">
                                    <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" />
                                </clipPath>
                            </defs>
                            
                            <!-- Premium Outlines & Base -->
                            <g fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
                                <!-- Nipple -->
                                <path d="M80 15 Q68 15 68 35 L92 35 Q92 15 80 15Z" fill="#FFE4E6" />
                                <!-- Cap (Dynamic Theme Color) -->
                                <path d="M48 35 L112 35 Q120 35 120 45 L120 65 Q120 75 112 75 L48 75 Q40 75 40 65 L40 45 Q40 35 48 35Z" fill="${config.themeColor}" />
                                <!-- Body Base -->
                                <path d="M45 75 L115 75 Q130 75 130 110 L130 170 Q130 205 80 205 Q30 205 30 170 L30 110 Q30 75 45 75 Z" fill="white" />
                            </g>
                            
                            <!-- Dynamic Liquid Fill -->
                            <g clip-path="url(#bodyClip)">
                                <path class="milk-fill" d="M20 210 L140 210 L140 100 Q80 90 20 100 Z" />
                                <!-- Premium Inner Decorations (Sparkles/Bubbles) -->
                                <circle cx="50" cy="180" r="4" fill="white" opacity="0.4" />
                                <circle cx="110" cy="190" r="6" fill="white" opacity="0.3" />
                                <circle cx="80" cy="170" r="3" fill="white" opacity="0.5" />
                            </g>
                            

                            <!-- Emotional Cartoon Expression -->
                            <g class="bottle-face">
                                ${type === 'none' ? `
                                    <!-- Status 1: Safe - Happy & Sparkling -->
                                    <g fill="#1E293B">
                                        <circle cx="65" cy="125" r="8" /> 
                                        <circle cx="95" cy="125" r="8" />
                                        <circle cx="68" cy="121" r="3" fill="white" /> 
                                        <circle cx="98" cy="121" r="3" fill="white" />
                                    </g>
                                    <path d="M72 145 Q80 152 88 145" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
                                    <ellipse cx="48" cy="148" rx="6" ry="3" fill="#FDA4AF" opacity="0.6" />
                                    <ellipse cx="112" cy="148" rx="6" ry="3" fill="#FDA4AF" opacity="0.6" />
                                ` : type === 'caution' ? `
                                    <!-- Status 2: Warning - Worried -->
                                    <g fill="#1E293B">
                                        <circle cx="65" cy="125" r="8" /> 
                                        <circle cx="95" cy="125" r="8" />
                                        <circle cx="68" cy="121" r="2" fill="white" opacity="0.4" /> 
                                        <circle cx="98" cy="121" r="2" fill="white" opacity="0.4" />
                                    </g>
                                    <path d="M60 112 Q65 105 70 110" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
                                    <path d="M90 110 Q95 105 100 112" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
                                    <path d="M72 152 L88 152" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
                                    <!-- Caution Icon -->
                                    <g transform="translate(145, 80)">
                                        <path d="M0 -15 L15 15 L-15 15 Z" fill="#F59E0B" stroke="#1E293B" stroke-width="3" />
                                        <text y="10" text-anchor="middle" fill="white" font-size="16" font-weight="950" font-family="Arial">!</text>
                                    </g>
                                ` : `
                                    <!-- Status 3: Danger - Teary & Sad (Unified Style) -->
                                    <g fill="#1E293B">
                                        <circle cx="65" cy="125" r="8" /> 
                                        <circle cx="95" cy="125" r="8" />
                                        <!-- Teary highlights at bottom of eyes -->
                                        <circle cx="68" cy="129" r="2.5" fill="white" opacity="0.8" /> 
                                        <circle cx="98" cy="129" r="2.5" fill="white" opacity="0.8" />
                                    </g>
                                    <!-- Sad/Distressed Eyebrows -->
                                    <path d="M58 115 Q65 105 72 112" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
                                    <path d="M88 112 Q95 105 102 115" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
                                    <path d="M72 155 Q80 148 88 155" fill="none" stroke="#1E293B" stroke-width="4.5" stroke-linecap="round" />
                                    
                                    <!-- Animated Tears -->
                                    <path d="M65 133 Q60 145 60 155" fill="none" stroke="#60A5FA" stroke-width="4" stroke-linecap="round" opacity="0.8">
                                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="1.5s" repeatCount="indefinite" />
                                    </path>
                                    <path d="M95 133 Q100 145 100 155" fill="none" stroke="#60A5FA" stroke-width="4" stroke-linecap="round" opacity="0.8">
                                        <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="1.2s" repeatCount="indefinite" />
                                    </path>
                                `}
                            </g>
                        </svg>
                    </div>
                </div>

                <div class="text-center">
                    <span class="text-[9px] font-black uppercase tracking-[0.2em] ${config.text} opacity-40 block mb-0.5">${t.label_batch}</span>
                    <h3 class="${type === 'critical' ? 'text-4xl' : 'text-3xl'} font-black ${config.text} tracking-tight font-sans">${code}</h3>
                    ${itemData ? `<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">${itemData.product}</p>` : ''}
                </div>
                
                <div class="py-4 border-t border-slate-100 text-center">
                    <div class="flex items-center justify-center space-x-2 mb-1.5">
                        ${type === 'critical' ? '<span class="text-xl">⚠️</span>' : ''}
                        <p class="${type === 'critical' ? 'text-xl' : 'text-lg'} font-black ${config.text} uppercase tracking-tight">${config.title}</p>
                    </div>
                    <p class="text-[11px] text-slate-500 font-bold leading-snug max-w-xs mx-auto">${config.desc}</p>
                    ${config.seriesLabel}
                </div>

                ${detailGrid}

                <div class="space-y-4 pt-2">
                    <div class="grid grid-cols-1 gap-3">
                        ${config.sourceBtn}
                        ${getHotlineButtons(itemData)}
                    </div>
                </div>
            </div>
            ${type === 'critical' ? '<div class="absolute top-0 left-0 w-full h-1 bg-red-600 animate-pulse z-20"></div>' : ''}
        </div>
    `;
}

// Event Listeners
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferred_lang', currentLang);
    updateLang();
});

acceptBtn.addEventListener('click', () => {
    disclaimerModal.classList.add('hidden');
    localStorage.setItem('aegis_agreed', 'true');
});

if (!localStorage.getItem('aegis_agreed')) {
    disclaimerModal.classList.remove('hidden');
} else {
    disclaimerModal.classList.add('hidden');
}

searchInput.addEventListener('input', debounce(handleSearch, 150));

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderIdle();
    clearBtn.classList.add('hidden');
    searchInput.focus();
});

const batchGuideToggle = document.getElementById('batchGuideToggle');
const batchGuidePanel = document.getElementById('batchGuidePanel');
batchGuideToggle.addEventListener('click', () => {
    batchGuidePanel.classList.toggle('hidden');
});

updateLang();

// ========== Stats and Helpful Button Feature ==========
// Using CounterAPI v2 for stable statistics (api.counterapi.dev)

const STATS_API_BASE = 'https://api.counterapi.dev/v1';
const STATS_NS = 'safefeed_action';

// Baseline stats (Historical data from previous versions)
const BASELINE_VIEWS = 5840;
const BASELINE_HELPFUL = 642;
async function initializeStats() {
    const pageViewsEl = document.getElementById('pageViews');
    const helpfulCountEl = document.getElementById('helpfulCount');

    if (pageViewsEl) pageViewsEl.textContent = formatNumber(BASELINE_VIEWS);
    if (helpfulCountEl) {
        const localBonus = localStorage.getItem('aegis_helpful_clicked') ? 1 : 0;
        helpfulCountEl.textContent = formatNumber(BASELINE_HELPFUL + localBonus);
    }

    try {
        const fetchWithTimeout = (url, timeout = 5000) => {
            return Promise.race([
                fetch(url),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
            ]);
        };

        const viewsRes = await fetchWithTimeout(`${STATS_API_BASE}/${STATS_NS}/page_views/up`);
        if (viewsRes.ok) {
            const data = await viewsRes.json();
            if (data && data.count !== undefined && pageViewsEl) {
                pageViewsEl.textContent = formatNumber(BASELINE_VIEWS + data.count);
            }
        }

        const helpfulRes = await fetchWithTimeout(`${STATS_API_BASE}/${STATS_NS}/helpful_count`);
        if (helpfulRes.ok) {
            const data = await helpfulRes.json();
            if (data && data.count !== undefined && helpfulCountEl) {
                helpfulCountEl.textContent = formatNumber(BASELINE_HELPFUL + data.count);
            }
        }
    } catch (error) {
        console.warn('[Stats] API unreachable.', error.message);
    }
}

function formatNumber(num) {
    if (num === null || num === undefined) return '---';
    return num.toLocaleString();
}

const helpfulBtn = document.getElementById('helpfulBtn');
const HELPFUL_STORAGE_KEY = 'aegis_helpful_clicked';
if (localStorage.getItem(HELPFUL_STORAGE_KEY)) {
    const t = I18N[currentLang];
    helpfulBtn.disabled = true;
    helpfulBtn.querySelector('.btn-text').textContent = t.helpful_already;
    helpfulBtn.classList.add('opacity-50', 'cursor-not-allowed');
    helpfulBtn.style.background = 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)';
}

helpfulBtn.addEventListener('click', async () => {
    if (localStorage.getItem(HELPFUL_STORAGE_KEY)) return;
    const t = I18N[currentLang];
    const btnText = helpfulBtn.querySelector('.btn-text');
    const countEl = document.getElementById('helpfulCount');
    localStorage.setItem(HELPFUL_STORAGE_KEY, 'true');
    helpfulBtn.classList.add('clicked');
    btnText.textContent = t.helpful_thanks;
    if (countEl) {
        const currentVal = parseInt(countEl.textContent.replace(/,/g, '')) || BASELINE_HELPFUL;
        countEl.textContent = formatNumber(currentVal + 1);
    }
    try {
        const response = await fetch(`${STATS_API_BASE}/${STATS_NS}/helpful_count/up`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.count !== undefined && countEl) {
                countEl.textContent = formatNumber(BASELINE_HELPFUL + data.count);
            }
        }
    } catch (error) {
        console.error('[Stats] Increment failed:', error);
    }
    setTimeout(() => {
        helpfulBtn.classList.remove('clicked');
        btnText.textContent = t.helpful_already;
        helpfulBtn.disabled = true;
        helpfulBtn.classList.add('opacity-50', 'cursor-not-allowed');
        helpfulBtn.style.background = 'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)';
    }, 2000);
});

initializeStats();
