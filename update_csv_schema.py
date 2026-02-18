
import csv
import os

input_file = 'recall_database.csv'
output_file = 'recall_database_updated.csv'

with open(input_file, mode='r', encoding='utf-8-sig') as infile:
    reader = csv.DictReader(infile)
    fieldnames = reader.fieldnames + ['severity', 'evidence_hash', 'archive_url']
    
    with open(output_file, mode='w', encoding='utf-8-sig', newline='') as outfile:
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for row in reader:
            reason = row['reason'].lower()
            # Default to L1 for Bacillus/Cereulide based on user instruction
            if 'cereus' in reason or 'cereulide' in reason or '芽孢' in reason or 'toxin' in reason:
                row['severity'] = 'L1'
            elif 'nutrition' in reason or 'labelling' in reason or '铁' in reason or '维生素' in reason:
                row['severity'] = 'L2'
            else:
                row['severity'] = 'L3'
            
            row['evidence_hash'] = '' # Placeholder
            row['archive_url'] = ''   # Placeholder
            writer.writerow(row)

os.replace(output_file, input_file)
print("CSV schema updated with severity and evidence fields.")
