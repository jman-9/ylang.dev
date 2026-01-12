const n=`# shell — Shell command execution\r
\r
The \`shell\` module provides functions for executing shell commands.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`system(command)\`](#systemcommand) | Executes a shell command and returns the exit code |\r
| [\`run(command)\`](#runcommand) | Executes a shell command and returns its output as a string |\r
\r
### system(command)\r
\r
Executes a shell command and returns the exit code.\r
\r
**Parameters:**\r
- \`command\` (\`str\`): The shell command to execute\r
\r
**Returns:**\r
- \`int\`: The exit code of the command (0 on success)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include shell;\r
exit_code = shell.system("ls");\r
println(exit_code);  // 0 on success\r
\`\`\`\r
\r
### run(command)\r
\r
Executes a shell command and returns its output as a string.\r
\r
**Parameters:**\r
- \`command\` (\`str\`): The shell command to execute\r
\r
**Returns:**\r
- \`str\`: The output of the command\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include shell;\r
output = shell.run("ls");\r
println(output);  // Directory listing\r
\`\`\`\r
`;export{n as default};
