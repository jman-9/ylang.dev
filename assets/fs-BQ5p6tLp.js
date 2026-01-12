const r=`# fs — File system operations\r
\r
The \`fs\` module provides functions for file system operations.\r
\r
## Submodules\r
\r
| Submodule | Description |\r
|-----------|-------------|\r
| [\`path\`](#path-submodule) | Path manipulation functions (see \`fs.path\`) |\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`exists(path)\`](#existspath) | Checks if a file or directory exists |\r
| [\`cwd([path])\`](#cwd-path) | Returns the current working directory, or changes it if \`path\` is provided |\r
| [\`abspath(path)\`](#abspathpath) | Returns the absolute path of a file or directory |\r
| [\`readdir(path)\`](#readdirpath) | Returns a list of entries in the specified directory |\r
\r
### exists(path)\r
\r
Checks if a file or directory exists at the specified path.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The path to check\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the path exists, \`false\` otherwise\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
if (fs.exists("data.txt")) {\r
    println("File exists");\r
} else {\r
    println("File does not exist");\r
}\r
\`\`\`\r
\r
### cwd([path])\r
\r
Returns the current working directory, or changes it if \`path\` is provided.\r
\r
**Parameters:**\r
- \`path\` (\`str\`, optional): The directory path to change to\r
\r
**Returns:**\r
- \`str\`: The current working directory path (if no \`path\` is provided)\r
- \`bool\`: \`true\` on success, \`false\` on failure (if \`path\` is provided)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
current_dir = fs.cwd();\r
println(current_dir);\r
\r
fs.cwd("/home/user");\r
println(fs.cwd());  // "/home/user"\r
\`\`\`\r
\r
### abspath(path)\r
\r
Returns the absolute path of a file or directory.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The relative or absolute path\r
\r
**Returns:**\r
- \`str\`: The absolute path\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
abs = fs.abspath("data.txt");\r
println(abs);  // e.g., "/home/user/data.txt"\r
\`\`\`\r
\r
### readdir(path)\r
\r
Returns a list of entries (files and directories) in the specified directory.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The directory path\r
\r
**Returns:**\r
- \`list\`: A list of entry names in the directory\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
entries = fs.readdir(".");\r
for (i = 0; i < entries.size(); i += 1) {\r
    println(entries[i]);\r
}\r
\`\`\`\r
\r
## path Submodule\r
\r
The \`fs.path\` submodule provides path manipulation functions.\r
\r
### Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`fs.path.join(...)\`](#fspathjoin) | Joins multiple path components into a single path |\r
| [\`fs.path.parent(path)\`](#fspathparentpath) | Returns the parent directory of the specified path |\r
| [\`fs.path.name(path)\`](#fspathnamepath) | Returns the filename (with extension) from the specified path |\r
| [\`fs.path.stem(path)\`](#fspathstempath) | Returns the filename without the extension |\r
| [\`fs.path.ext(path)\`](#fspathextpath) | Returns the file extension (including the dot) |\r
\r
### fs.path.join(...)\r
\r
Joins multiple path components into a single path.\r
\r
**Parameters:**\r
- Variable number of \`str\` arguments: Path components to join\r
\r
**Returns:**\r
- \`str\`: The joined path\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
p = fs.path.join("a", "b", "c");\r
println(p);  // "a/b/c" (or "a\\\\b\\\\c" on Windows)\r
\`\`\`\r
\r
### fs.path.parent(path)\r
\r
Returns the parent directory of the specified path.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The file or directory path\r
\r
**Returns:**\r
- \`str\`: The parent directory path\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
parent = fs.path.parent("/home/user/file.txt");\r
println(parent);  // "/home/user"\r
\`\`\`\r
\r
### fs.path.name(path)\r
\r
Returns the filename (with extension) from the specified path.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The file path\r
\r
**Returns:**\r
- \`str\`: The filename\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
name = fs.path.name("/home/user/file.txt");\r
println(name);  // "file.txt"\r
\`\`\`\r
\r
### fs.path.stem(path)\r
\r
Returns the filename without the extension.\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The file path\r
\r
**Returns:**\r
- \`str\`: The filename without extension\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
stem = fs.path.stem("/home/user/file.txt");\r
println(stem);  // "file"\r
\`\`\`\r
\r
### fs.path.ext(path)\r
\r
Returns the file extension (including the dot).\r
\r
**Parameters:**\r
- \`path\` (\`str\`): The file path\r
\r
**Returns:**\r
- \`str\`: The file extension\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include fs;\r
ext = fs.path.ext("/home/user/file.txt");\r
println(ext);  // ".txt"\r
\`\`\`\r
`;export{r as default};
