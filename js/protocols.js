
const RISK_PROTOCOLS = {
    "BACILLUS_CEREUS": {
        "en": {
            "title": "Bacillus Cereus Precautionary Action Guide",
            "tech_defense": {
                "title": "Scientific Context: Why heat fails?",
                "content": "Bacillus cereus is a facultative anaerobe that forms <strong>spores (芽孢)</strong>. While 100°C boiling water kills live bacteria, it <strong>cannot</strong> deactivate the spores. As an illustrative analogy, these spores act like a 'Biological Restore Point'—they can reactivate as soon as environmental conditions become favorable. Standard home heating is NOT a sterilization method."
            },
            "monitoring": {
                "title": "48h Clinical Observation Log",
                "types": [
                    { "name": "Emetic (Vomiting Type)", "period": "1-5 hours", "desc": "Rapid onset symptoms. Record feeding-to-symptom timing." },
                    { "name": "Diarrheal Type", "period": "6-15 hours", "desc": "Delayed onset symptoms. Monitor long-term digestive stability." }
                ],
                "checkboxes": [
                    "Persistent vomiting or refusal to feed",
                    "Watery diarrhea or abdominal cramps",
                    "Low-grade fever or lethargy",
                    "Signs of dehydration (dry mouth, fewer wet diapers)"
                ]
            },
            "claim": {
                "title": "Inquiry & Documentation Guide",
                "rules": "Based on local consumer protection and food safety regulations regarding 'Biological Contamination'.",
                "log_items": [
                    "Timestamp of First Ingestion",
                    "Timestamp of First Symptom",
                    "Photos of Batch Code & Production Date"
                ],
                "script_template": "Subject: Formal Inquiry - Safety Standards & Documentation (Batch: [BATCH])\n\nI am contacting you regarding the official recall of [PRODUCT] (Batch: [BATCH]). My child has consumed this product. As specified under local food safety standards, I am requesting formal documentation of the safety screening and remediation plan for this specific lot. I have preserved the physical sample and logs of ingestion/symptoms for records."
            },
            "timer": {
                "duration": 48,
                "label": "48h Clinical Observation"
            }
        },
        "zh": {
            "title": "蜡样芽孢杆菌预防性处理指南",
            "tech_defense": {
                "title": "科学背景：为什么加热无法完全灭活？",
                "content": "蜡样芽孢杆菌是一种兼性厌氧菌，能形成<strong>芽孢 (Spores)</strong>。100°C 的沸水仅能杀死活菌，<strong>杀不死芽孢</strong>。形象地比喻，芽孢就像是一个“生物备份点”——一旦温度适宜，它会立即重新激活。任何家用加热手段都无法保证 100% 的灭菌效果，受影响批次建议采取预防性弃用。"
            },
            "monitoring": {
                "title": "48小时临床留观记录",
                "types": [
                    { "name": "呕吐型 (Emetic)", "period": "1-5 小时", "desc": "潜伏期短。请记录从喂食到出现症状的精确时间。" },
                    { "name": "腹泻型 (Diarrheal)", "period": "6-15 小时", "desc": "潜伏期长。请持续监测消化系统稳定性。" }
                ],
                "checkboxes": [
                    "是否存在持续呕吐或拒奶",
                    "是否存在水样腹泻或腹痛",
                    "是否出现低热或精神萎靡",
                    "脱水体征（口唇干燥、尿量明显减少）"
                ]
            },
            "claim": {
                "title": "咨询与证据存证建议",
                "rules": "依据当地食品安全法规（如中国《食品安全法》、香港《食物安全条例》等）中关于致病微生物污染的召回规定。",
                "log_items": [
                    "记录第一餐喂食时间 (精确到分钟)",
                    "记录首个症状出现时间",
                    "保存包装罐（批次码与生产日期清晰可见）"
                ],
                "script_template": "【申诉告知函】\n关于 [PRODUCT] (批次: [BATCH]) 的安全性核实咨询：\n本人孩子已食用上述召回批次。根据当地食品安全法规中关于微生物污染召回的相关准则，请贵司提供该特定批次的安全检测报告及后续补救方案，并依法履行消费者告知与保障义务。本人已完成样本留存及喂食日志记录，保留进一步向监管部门寻求协助的权利。"
            },
            "timer": {
                "duration": 48,
                "label": "48小时动态留观"
            }
        }
    },
    "CONSUMED_REMEDIATION": {
        "en": {
            "title": "Documentation Protocol",
            "action": "If your child has already consumed the product from a recalled batch, immediate observation is required. Record the exact feeding history and contact your pediatrician for biological toxin screening if symptoms occur."
        },
        "zh": {
            "title": "预防性存证协议",
            "action": "如果孩子已经食用了召回批次的产品，请立即开启 48 小时动态留观。记录每一餐的喂食时间与份量，若出现呕吐或腹泻，就医时建议告知医生参考“蜡样芽孢杆菌”相关官方召回通告。"
        }
    }
};
