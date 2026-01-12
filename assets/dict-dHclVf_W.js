const n=`# dict — Dictionary operations\r
\r
The \`dict\` module provides functions for dictionary manipulation. All dictionary functions are called on dictionary objects using the dot operator.\r
\r
## Functions\r
\r
| Function | Description |\r
|--------|-------------|\r
| [\`empty()\`](#empty) | Returns \`true\` if the dictionary is empty, \`false\` otherwise |\r
| [\`size()\`](#size) | Returns the number of key-value pairs in the dictionary |\r
| [\`contains(key)\`](#containskey) | Checks if the dictionary contains the specified key |\r
| [\`keys()\`](#keys) | Returns a list of all keys in the dictionary |\r
| [\`values()\`](#values) | Returns a list of all values in the dictionary |\r
| [\`items()\`](#items) | Returns a list of all key-value pairs as [key, value] lists |\r
| [\`pop(key)\`](#popkey) | Removes and returns the value associated with the specified key |\r
\r
### empty()\r
\r
Returns \`true\` if the dictionary is empty, \`false\` otherwise.\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the dictionary size is 0, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20};\r
println(d.empty());  // false\r
\r
e = {};\r
println(e.empty());  // true\r
\`\`\`\r
\r
### size()\r
\r
Returns the number of key-value pairs in the dictionary.\r
\r
**Returns:**\r
- \`int\`: The number of key-value pairs in the dictionary\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20, 'z': 30};\r
println(d.size());  // 3\r
\`\`\`\r
\r
### contains(key)\r
\r
Checks if the dictionary contains the specified key.\r
\r
**Parameters:**\r
- \`key\` (\`str\`): The key to search for\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the key exists, \`false\` otherwise\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20};\r
println(d.contains("x"));  // true\r
println(d.contains("z"));  // false\r
\`\`\`\r
\r
### keys()\r
\r
Returns a list of all keys in the dictionary.\r
\r
**Returns:**\r
- \`list\`: A list containing all keys in the dictionary\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20, 'z': 30};\r
println(d.keys());  // ["x", "y", "z"]\r
\`\`\`\r
\r
### values()\r
\r
Returns a list of all values in the dictionary.\r
\r
**Returns:**\r
- \`list\`: A list containing all values in the dictionary\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20, 'z': 30};\r
println(d.values());  // [10, 20, 30]\r
\`\`\`\r
\r
### items()\r
\r
Returns a list of all key-value pairs. Each pair is represented as a list \`[key, value]\`.\r
\r
**Returns:**\r
- \`list\`: A list of [key, value] pairs\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20};\r
items = d.items();\r
println(items);  // [["x", 10], ["y", 20]]\r
\`\`\`\r
\r
### pop(key)\r
\r
Removes and returns the value associated with the specified key. If the key does not exist, returns an empty value.\r
\r
**Parameters:**\r
- \`key\` (\`str\`): The key to remove\r
\r
**Returns:**\r
- The value associated with the key, or an empty value if the key does not exist\r
\r
**Example:**\r
\r
\`\`\`ylang\r
d = {'x': 10, 'y': 20, 'z': 30};\r
value = d.pop("y");\r
println(value);  // 20\r
println(d);      // {'x': 10, 'z': 30}\r
\`\`\`\r
`;export{n as default};
