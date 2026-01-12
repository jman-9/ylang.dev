const n=`# json — JSON encoding and decoding\r
\r
The \`json\` module provides functions for parsing and serializing JSON data.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`parse(text)\`](#parsetext) | Parses a JSON string and returns a ylang object (dict or list) |\r
| [\`dump(obj [, indent])\`](#dumpobj-indent) | Converts a ylang object (dict or list) to a JSON string |\r
\r
### parse(text)\r
\r
Parses a JSON string and returns a ylang object. The JSON object is converted to a dictionary, and JSON arrays are converted to lists.\r
\r
**Parameters:**\r
- \`text\` (\`str\`): The JSON string to parse\r
\r
**Returns:**\r
- \`dict\` or \`list\`: The parsed JSON data\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include json;\r
json_text = '''\r
{\r
    "name": "Alice",\r
    "age": 30,\r
    "scores": [85, 92, 78]\r
}\r
''';\r
data = json.parse(json_text);\r
println(data["name"]);  // "Alice"\r
println(data["scores"]);  // [85, 92, 78]\r
\`\`\`\r
\r
### dump(obj [, indent])\r
\r
Converts a ylang object (dictionary or list) to a JSON string.\r
\r
**Parameters:**\r
- \`obj\` (\`dict\` or \`list\`): The object to serialize\r
- \`indent\` (\`int\`, optional): The indentation level for pretty-printing. If not specified or negative, the output is compact. If specified, the output is pretty-printed with the given indentation level.\r
\r
**Returns:**\r
- \`str\`: The JSON string representation\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include json;\r
data = {\r
    "name": "Alice",\r
    "age": 30,\r
    "scores": [85, 92, 78]\r
};\r
\r
// Compact output\r
json_text = json.dump(data);\r
println(json_text);\r
// Output: {"name":"Alice","age":30,"scores":[85,92,78]}\r
\r
// Pretty-printed output with indentation\r
json_text_pretty = json.dump(data, 2);\r
println(json_text_pretty);\r
// Output:\r
// {\r
//   "name": "Alice",\r
//   "age": 30,\r
//   "scores": [\r
//     85,\r
//     92,\r
//     78\r
//   ]\r
// }\r
\`\`\`\r
`;export{n as default};
