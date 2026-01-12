const n=`# sys — System-specific parameters and functions\r
\r
The \`sys\` module provides access to system-specific parameters and functions.\r
\r
## Variables\r
\r
| Variable | Description |\r
|----------|-------------|\r
| [\`version\`](#version) | The ylang version string |\r
| [\`executable\`](#executable) | The path to the ylang executable |\r
| [\`args\`](#args) | A list of command-line arguments passed to the program |\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`env()\`](#env) | Returns a dictionary of all environment variables |\r
| [\`getenv(name)\`](#getenvname) | Returns the value of the environment variable \`name\` |\r
| [\`setenv(name, value)\`](#setenvname-value) | Sets the environment variable \`name\` to \`value\` |\r
\r
### .version\r
\r
The ylang version string.\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
println(sys.version);  // e.g., "ylang 1.0.0"\r
\`\`\`\r
\r
### .executable\r
\r
The path to the ylang executable.\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
println(sys.executable);  // e.g., "/usr/bin/ylang"\r
\`\`\`\r
\r
### .args\r
\r
A list of command-line arguments passed to the program (excluding the program name itself).\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
println(sys.args);  // e.g., ["arg1", "arg2"]\r
\`\`\`\r
\r
### env()\r
\r
Returns a dictionary containing all environment variables.\r
\r
**Returns:**\r
- \`dict\`: A dictionary mapping environment variable names to their values\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
env_vars = sys.env();\r
println(env_vars["PATH"]);\r
\`\`\`\r
\r
### getenv(name)\r
\r
Returns the value of the environment variable \`name\`. Returns \`null\` if the variable does not exist.\r
\r
**Parameters:**\r
- \`name\` (\`str\`): The name of the environment variable\r
\r
**Returns:**\r
- \`str\` or \`null\`: The value of the environment variable, or \`null\` if not found\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
path = sys.getenv("PATH");\r
println(path);\r
\r
// Check if variable exists\r
home = sys.getenv("HOME");\r
if (home != null) {\r
    println("Home directory: " + home);\r
}\r
\`\`\`\r
\r
### setenv(name, value)\r
\r
Sets the environment variable \`name\` to \`value\`.\r
\r
**Parameters:**\r
- \`name\` (\`str\`): The name of the environment variable\r
- \`value\` (\`str\`): The value to set\r
\r
**Returns:**\r
- \`int\`: Error code (0 on success)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include sys;\r
sys.setenv("MY_VAR", "test_value");\r
value = sys.getenv("MY_VAR");\r
println(value);  // "test_value"\r
\`\`\`\r
`;export{n as default};
