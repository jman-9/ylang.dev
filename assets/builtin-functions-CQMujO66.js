const n=`# Builtin Functions\r
\r
Builtin functions are globally available functions that don't require any module to be included. They provide essential I/O and program control functionality.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`print([value])\`](#printvalue) | Prints a value to stdout without a newline |\r
| [\`println([value])\`](#printlnvalue) | Prints a value to stdout with a newline |\r
| [\`eprint([value])\`](#eprintvalue) | Prints a value to stderr without a newline |\r
| [\`eprintln([value])\`](#eprintlnvalue) | Prints a value to stderr with a newline |\r
| [\`readln()\`](#readln) | Reads a line from stdin |\r
| [\`exit([code])\`](#exitcode) | Terminates the program with an optional exit code |\r
\r
### print([value])\r
\r
Prints a value to stdout without a trailing newline. If called without arguments, does nothing.\r
\r
**Parameters:**\r
- \`value\` (any, optional): The value to print. Can be a variable, literal, or object. If not provided, the function does nothing.\r
\r
**Returns:**\r
- Nothing (void)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
print("Hello");\r
print(" World\\n");  // Output: Hello World\r
\r
print(123);  // Output: 123 (no newline)\r
print();     // Does nothing\r
\`\`\`\r
\r
### println([value])\r
\r
Prints a value to stdout with a trailing newline. If called without arguments, prints only a newline.\r
\r
**Parameters:**\r
- \`value\` (any, optional): The value to print. Can be a variable, literal, or object. If not provided, only a newline is printed.\r
\r
**Returns:**\r
- Nothing (void)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
println("Hello, " + "World!");  // Output: Hello, World! (newline)\r
\r
println();  // Output: (just a newline)\r
\r
i = 0;\r
println("Line {++i}");\r
println("Line {++i}");\r
println("Line {++i}");\r
// Output:\r
// Line 1\r
// Line 2\r
// Line 3\r
\`\`\`\r
\r
### eprint([value])\r
\r
Prints a value to stderr (standard error) without a trailing newline. If called without arguments, does nothing. Useful for error messages and debugging output.\r
\r
**Parameters:**\r
- \`value\` (any, optional): The value to print to stderr. Can be a variable, literal, or object. If not provided, the function does nothing.\r
\r
**Returns:**\r
- Nothing (void)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
eprint("Error: File not found");\r
eprint("\\n");  // Output to stderr: Error: File not found (newline)\r
\r
eprint(42);    // Output to stderr: 42 (no newline)\r
eprint();      // Does nothing\r
\`\`\`\r
\r
### eprintln([value])\r
\r
Prints a value to stderr with a trailing newline. If called without arguments, prints only a newline to stderr.\r
\r
**Parameters:**\r
- \`value\` (any, optional): The value to print to stderr. Can be a variable, literal, or object. If not provided, only a newline is printed to stderr.\r
\r
**Returns:**\r
- Nothing (void)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
eprintln("Error: File not found");  // Output to stderr: Error: File not found (newline)\r
\r
eprintln();  // Output to stderr: (just a newline)\r
\r
eprintln("Debug: value = 42");  // Output to stderr: Debug: value = 42 (newline)\r
\`\`\`\r
\r
### readln()\r
\r
Reads a line from stdin (standard input) and returns it as a string.\r
\r
**Parameters:**\r
- None\r
\r
**Returns:**\r
- \`str\`: The line read from stdin (without the trailing newline)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
println("Enter your name:");\r
name = readln();\r
println("Hello, {name}!");\r
\r
// If user enters "Alice", output:\r
// Enter your name:\r
// Hello, Alice!\r
\`\`\`\r
\r
### exit([code])\r
\r
Terminates the program immediately. If an exit code is provided, the program exits with that code; otherwise, it exits with code 0.\r
\r
**Parameters:**\r
- \`code\` (\`int\`, optional): The exit code. Defaults to 0 if not provided. Exit code 0 typically indicates success, while non-zero values indicate errors.\r
\r
**Returns:**\r
- Never returns (terminates the program)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
println("Starting program...");\r
\r
if (some_error) {\r
    eprintln("Fatal error occurred");\r
    exit(1);  // Exit with error code 1\r
}\r
\r
println("Program completed successfully");\r
exit(0);  // Exit with success code 0 (explicit, but optional)\r
\r
// Or simply:\r
exit();  // Exits with code 0\r
\`\`\`\r
`;export{n as default};
