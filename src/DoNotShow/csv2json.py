# import pandas as pd
import csv
import json

exp = 'ExpJson'
awd  = 'AwdJson'

# # Read the CSV file
# csv_file_path = 'C:/Users/choos/Documents/GitHub/webProfile/src/DoNotShow/' + exp + '.csv'
# df = pd.read_csv(csv_file_path)

# # Convert DataFrame to JSON
# json_file_path = 'C:/Users/choos/Documents/GitHub/webProfile/src/DoNotShow/' + exp + '.json'
# df.to_json(json_file_path, orient='records', lines=True)

# print(f"CSV file has been converted to JSON and saved to {json_file_path}")


# Path to your CSV file
csv_file_path = 'C:/Users/choos/Documents/GitHub/webProfile/src/DoNotShow/' + exp + '.csv'
json_file_path = 'C:/Users/choos/Documents/GitHub/webProfile/src/DoNotShow/' + exp + '.json'

# Read the CSV file and convert to JSON
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    rows = list(csv_reader)

with open(json_file_path, mode='w', encoding='utf-8') as json_file:
    json.dump(rows, json_file, indent=4)

print(f"CSV file has been converted to JSON and saved to {json_file_path}")