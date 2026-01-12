const n=`# time — Time-related functions\r
\r
The \`time\` module provides functions for time operations.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`sleep(ms)\`](#sleepms) | Suspends execution for the specified number of milliseconds |\r
| [\`now()\`](#now) | Returns the current time as a Unix timestamp (seconds since epoch) |\r
\r
### sleep(ms)\r
\r
Suspends execution for the specified number of milliseconds.\r
\r
**Parameters:**\r
- \`ms\` (\`int\`): The number of milliseconds to sleep\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include time;\r
println("Before sleep");\r
time.sleep(2000);  // Sleep for 2 seconds\r
println("After sleep");\r
\`\`\`\r
\r
### now()\r
\r
Returns the current time as a Unix timestamp (number of seconds since January 1, 1970, 00:00:00 UTC).\r
\r
**Returns:**\r
- \`int\`: The current Unix timestamp\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include time;\r
current_time = time.now();\r
println(current_time);  // e.g., 1704067200\r
\`\`\`\r
`;export{n as default};
