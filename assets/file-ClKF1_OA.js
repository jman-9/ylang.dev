const e=`# file — File operations\r
\r
The \`file\` module provides functions for file I/O operations.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`open(path, mode)\`](#openpath-mode) | Opens a file and returns a file object |\r
| [\`close()\`](#close) | Closes the file (called on file object) |\r
| [\`read(size)\`](#readsize) | Reads up to \`size\` bytes from the file (called on file object) |\r
| [\`read_all(path)\`](#read_allpath) | Reads the entire contents of a file |\r
| [\`write(data)\`](#writedata) | Writes data to the file (called on file object) |\r
| [\`write_all(path, data)\`](#write_allpath-data) | Writes data to a file, creating or overwriting it |\r
\r
### open(path, mode)\r
\r
Opens a file and returns a file object.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The path to the file\r
- \`mode\` (\`str\`): The file mode:\r
  - \`"r"\`: Read mode (default)\r
  - \`"w"\`: Write mode (creates or truncates)\r
  - \`"w+"\`: Read/write mode (creates or truncates)\r
  - \`"a"\`: Append mode\r
\r
**Returns:**\r
- File object: A file object that can be used with other file methods\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
f = file.open("data.txt", "r");\r
// Use file object...\r
f.close();\r
\`\`\`\r
\r
### close()\r
\r
Closes the file. Must be called on a file object returned by \`file.open()\`.\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
f = file.open("data.txt", "w+");\r
f.write("Hello, World!");\r
f.close();\r
\`\`\`\r
\r
### read(size)\r
\r
Reads up to \`size\` bytes from the file. Must be called on a file object.\r
\r
**Parameters:**\r
- \`size\` (\`int\`): The maximum number of bytes to read\r
\r
**Returns:**\r
- \`str\`: The data read from the file\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
f = file.open("data.txt", "r");\r
content = f.read(100);  // Read up to 100 bytes\r
f.close();\r
println(content);\r
\`\`\`\r
\r
### read_all(path)\r
\r
Reads the entire contents of a file into a string.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The path to the file\r
\r
**Returns:**\r
- \`str\`: The entire contents of the file\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
content = file.read_all("data.txt");\r
println(content);\r
\`\`\`\r
\r
### write_all(path, data)\r
\r
Writes data to a file, creating the file if it doesn't exist or overwriting it if it does. This is a convenience function that opens, writes, and closes the file in one operation.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The path to the file\r
- \`data\` (\`str\`): The data to write to the file\r
\r
**Returns:**\r
- \`int\`: Error code (0 on success, non-zero on error)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
file.write_all("output.txt", "Hello, World!");\r
\`\`\`\r
\r
### write(data)\r
\r
Writes data to the file. Must be called on a file object opened in write mode.\r
\r
**Parameters:**\r
- \`data\` (\`str\`): The data to write\r
\r
**Returns:**\r
- \`int\`: Error code (0 on success)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include file;\r
f = file.open("output.txt", "w+");\r
f.write("Hello, World!");\r
f.close();\r
\`\`\`\r
`;export{e as default};
