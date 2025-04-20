import json

# Input and output file paths
input_file = 'search_all.json'
output_file = 'output.json'

# Load the input JSON from a file
with open(input_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Extract and transform product data
products = []
for doc in data.get("response", {}).get("docs", []):
    title = doc.get("title")
    url = doc.get("url")
    description = doc.get("shortDescription")
    thumbnail = doc.get("thumbnail")

    # Only include if all fields are present
    if title and url and description and thumbnail:
        products.append({
            "title": title,
            "url": url,
            "description": description,
            "thumbnail": thumbnail
        })

# Create the final JSON structure
output = {
    "products": products
}

# Write the output JSON to a file
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2)

print(f"Converted {len(products)} products and saved to '{output_file}'.")
