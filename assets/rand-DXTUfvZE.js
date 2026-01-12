const n=`# rand — Random number generation\r
\r
The \`rand\` module provides functions for generating random numbers.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`randomize_timer()\`](#randomize_timer) | Initializes the random number generator with the current time |\r
| [\`seed(n)\`](#seedn) | Initializes the random number generator with a specific seed |\r
| [\`get(min, max)\`](#getmin-max) | Returns a random number between \`min\` and \`max\` (inclusive) |\r
\r
### randomize_timer()\r
\r
Initializes the random number generator with the current time as the seed. This ensures different random sequences on each program run.\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include rand;\r
rand.randomize_timer();\r
r = rand.get(1, 10);\r
println(r);  // Random number between 1 and 10\r
\`\`\`\r
\r
### seed(n)\r
\r
Initializes the random number generator with a specific seed value. Using the same seed will produce the same sequence of random numbers.\r
\r
**Parameters:**\r
- \`n\` (\`int\`): The seed value\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include rand;\r
rand.seed(42);\r
r1 = rand.get(1, 100);\r
rand.seed(42);  // Same seed\r
r2 = rand.get(1, 100);\r
// r1 and r2 will be the same\r
\`\`\`\r
\r
### get(min, max)\r
\r
Returns a random number between \`min\` and \`max\` (inclusive). The return type depends on the input types:\r
- If both \`min\` and \`max\` are integers, returns an integer\r
- If either is a float, returns a float\r
\r
**Parameters:**\r
- \`min\` (\`int\` or \`float\`): The minimum value (inclusive)\r
- \`max\` (\`int\` or \`float\`): The maximum value (inclusive)\r
\r
**Returns:**\r
- \`int\` or \`float\`: A random number between \`min\` and \`max\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
include rand;\r
rand.randomize_timer();\r
\r
// Integer random number\r
r1 = rand.get(1, 10);\r
println(r1);  // Random integer between 1 and 10\r
\r
// Float random number\r
r2 = rand.get(0.0, 1.0);\r
println(r2);  // Random float between 0.0 and 1.0\r
\`\`\`\r
`;export{n as default};
