#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SafeFeed Action - Global Infant Formula Recall Verification Tool
CSV Deduplication Utility

Author: TechDadShanghai
License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
Copyright (c) 2026 TechDadShanghai
"""

import csv
import os
import sys
from collections import OrderedDict

DB_FILE = 'recall_database.csv'

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
            if not row.get('code'):
                continue
            code = row['code'].strip()
            sub_brand = row['subBrand'].strip()
            product = row['product'].strip()
            key = (code, sub_brand, product)
            
            if key in batches:
                existing = batches[key]
                # Merge region
                if row['country'] != existing['country']:
                    if row['country'] not in existing['country']:
                        existing['country'] = f"{existing['country']}/{row['country']}"
                
                # Update link if new is deeper
                if len(row['docUrl']) > len(existing['docUrl']) and 'http' in row['docUrl']:
                    existing['docUrl'] = row['docUrl']
                
                # Update source if new is more specific
                if len(row['sourceDisplay']) > len(existing['sourceDisplay']):
                    existing['sourceDisplay'] = row['sourceDisplay']
                
                removed_count += 1
            else:
                batches[key] = row

    with open(DB_FILE, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in batches.values():
            writer.writerow(row)
    
    print(f"Deduplication complete. Removed {removed_count} duplicate entries.")

if __name__ == "__main__":
    deduplicate()
