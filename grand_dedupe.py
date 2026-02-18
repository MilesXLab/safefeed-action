import csv
import os
import re
from collections import defaultdict

DB_FILE = '/Users/miles/Projects/personal/safefeed-action/recall_database.csv'
TEMP_FILE = '/Users/miles/Projects/personal/safefeed-action/recall_database_final.csv'

def get_link_priority(url):
    url = url.lower()
    if '.gov' in url or '.ie' in url or '.gouv' in url or 'ages.at' in url or 'sfa.gov.sg' in url:
        return 10
    if 'produktwarnung.eu' in url or 'foodwatch' in url:
        return 5
    return 1

def normalize_product_name(name):
    """Strip weights and common suffixes to identify identical products."""
    name = name.lower()
    # Remove things like "800g", "400g", "800 g", "(800g)"
    name = re.sub(r'\(?\d+\s*g\)?', '', name)
    # Remove extra spaces
    name = re.sub(r'\s+', ' ', name).strip()
    return name

def final_strict_dedupe():
    batches = defaultdict(list)
    
    with open(DB_FILE, 'r', encoding='utf-8-sig') as f:
        reader = list(csv.DictReader(f))
        fieldnames = reader[0].keys() if reader else []

    # Aggressive Grouping
    for row in reader:
        key = (
            row['code'].strip().upper(),
            row['brand'].strip(),
            row['subBrand'].strip(),
            normalize_product_name(row['product']),
            row['country'].strip()
        )
        batches[key].append(row)

    final_rows = []
    removed_count = 0
    
    for key in sorted(batches.keys()):
        instances = batches[key]
        if len(instances) == 1:
            final_rows.append(instances[0])
        else:
            # Sort: Priority 1: Gov Link, Priority 2: Longer Product Name (usually more descriptive)
            instances.sort(key=lambda x: (get_link_priority(x['docUrl']), len(x['product'])), reverse=True)
            
            best_row = instances[0]
            
            # Combine sources
            sources = set()
            for inst in instances:
                for s in inst['sourceDisplay'].split('/'):
                    s_clean = s.strip()
                    if s_clean:
                        sources.add(s_clean)
            
            best_row['sourceDisplay'] = " / ".join(sorted(list(sources)))
            
            final_rows.append(best_row)
            removed_count += (len(instances) - 1)

    with open(TEMP_FILE, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(final_rows)
    
    print(f"Aggressive Deduplication complete.")
    print(f"Removed {removed_count} redundant entries (including mirror links and product name variations).")
    
    os.replace(TEMP_FILE, DB_FILE)

if __name__ == "__main__":
    final_strict_dedupe()
