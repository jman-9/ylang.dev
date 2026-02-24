const n=`# bytes — Bytes operations\r
\r
The \`bytes\` type represents a sequence of byte values (0–255). All bytes functions are called on bytes objects using the dot operator.\r
\r
## Functions\r
\r
| Function | Description |\r
|----------|-------------|\r
| [\`empty()\`](#empty) | Returns \`true\` if the bytes are empty, \`false\` otherwise |\r
| [\`size()\`](#size) | Returns the number of bytes |\r
| [\`resize(n)\`](#resizen) | Resizes the bytes to contain \`n\` elements |\r
| [\`push_back(value)\`](#push_backvalue) | Appends a byte (0–255) to the end |\r
| [\`insert(index, value)\`](#insertindex-value) | Inserts a byte at the specified index |\r
| [\`pop(index)\`](#popindex) | Removes and returns the byte at the specified index |\r
| [\`pop_front()\`](#pop_front) | Removes and returns the first byte |\r
| [\`pop_back()\`](#pop_back) | Removes and returns the last byte |\r
| [\`front()\`](#front) | Returns the first byte (without removing) |\r
| [\`back()\`](#back) | Returns the last byte (without removing) |\r
| [\`get(index)\`](#getindex) | Returns the byte at the specified index |\r
| [\`set(index, value)\`](#setindex-value) | Sets the byte at the specified index (value 0–255) |\r
| [\`copy(src [, srcStart [, copySz [, dstStart]]])\`](#copysrc-srcstart-copysz-dststart) | Copies from another bytes object into this one |\r
| [\`cmp(cmp [, selfStart [, cmpStart [, cmpSize]]])\`](#cmpcmp-selfstart-cmpstart-cmpsize) | Compares with another bytes object (memcmp-style), returns int |\r
\r
### empty()\r
\r
Returns \`true\` if the bytes are empty, \`false\` otherwise.\r
\r
**Returns:**\r
- \`bool\`: \`true\` if size is 0, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <10>;\r
println(b.empty());  // false\r
\r
b.resize(0);\r
println(b.empty());  // true\r
\`\`\`\r
\r
### size()\r
\r
Returns the number of bytes.\r
\r
**Returns:**\r
- \`int\`: The number of bytes\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <5>;\r
println(b.size());  // 5\r
\`\`\`\r
\r
### resize(n)\r
\r
Resizes the bytes to contain \`n\` elements. If the new size is larger, new bytes are zero-initialized; if smaller, bytes are removed from the end.\r
\r
**Parameters:**\r
- \`n\` (\`int\`): The new size\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
b.resize(5);\r
println(b.size());  // 5\r
\r
b.resize(2);\r
println(b.size());  // 2\r
\`\`\`\r
\r
### push_back(value)\r
\r
Appends a single byte to the end. The value must be in the range 0–255.\r
\r
**Parameters:**\r
- \`value\` (\`int\`): The byte value (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <0>;\r
b.push_back(65);\r
b.push_back(66);\r
println(b.get(0));  // 65\r
println(b.get(1));  // 66\r
\`\`\`\r
\r
### insert(index, value)\r
\r
Inserts a byte at the specified index. Elements at and after the index are shifted right. The value must be 0–255.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index at which to insert\r
- \`value\` (\`int\`): The byte value (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
b.insert(1, 99);\r
println(b.size());  // 4\r
\`\`\`\r
\r
### pop(index)\r
\r
Removes and returns the byte at the specified index.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index of the byte to remove\r
\r
**Returns:**\r
- \`int\`: The byte that was removed (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
v = b.pop(1);\r
println(v);\r
println(b.size());  // 2\r
\`\`\`\r
\r
### pop_front()\r
\r
Removes and returns the first byte. Throws if empty.\r
\r
**Returns:**\r
- \`int\`: The first byte (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
v = b.pop_front();\r
println(v);\r
println(b.size());  // 2\r
\`\`\`\r
\r
### pop_back()\r
\r
Removes and returns the last byte. Throws if empty.\r
\r
**Returns:**\r
- \`int\`: The last byte (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
v = b.pop_back();\r
println(v);\r
println(b.size());  // 2\r
\`\`\`\r
\r
### front()\r
\r
Returns the first byte without removing it. Throws if empty.\r
\r
**Returns:**\r
- \`int\`: The first byte (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
println(b.front());\r
\`\`\`\r
\r
### back()\r
\r
Returns the last byte without removing it. Throws if empty.\r
\r
**Returns:**\r
- \`int\`: The last byte (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <3>;\r
println(b.back());\r
\`\`\`\r
\r
### get(index)\r
\r
Returns the byte at the specified index.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index\r
\r
**Returns:**\r
- \`int\`: The byte at that index (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <5>;\r
b.set(0, 72);\r
println(b.get(0));  // 72\r
\`\`\`\r
\r
### set(index, value)\r
\r
Sets the byte at the specified index. The value must be 0–255.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index to set\r
- \`value\` (\`int\`): The byte value (0–255)\r
\r
**Example:**\r
\r
\`\`\`ylang\r
b = <5>;\r
b.set(0, 65);\r
b.set(1, 66);\r
\`\`\`\r
\r
### copy(src [, srcStart [, copySz [, dstStart]]])\r
\r
Copies from another bytes object into this one. If the destination is too small, it is resized. All indices and sizes are in bytes.\r
\r
**Parameters:**\r
- \`src\` (\`bytes\`): The source bytes to copy from\r
- \`srcStart\` (\`int\`, optional): Start index in \`src\`. Defaults to 0.\r
- \`copySz\` (\`int\`, optional): Number of bytes to copy. Defaults to from \`srcStart\` to end of \`src\`.\r
- \`dstStart\` (\`int\`, optional): Start index in this bytes. Defaults to 0.\r
\r
**Example:**\r
\r
\`\`\`ylang\r
src = <10>;\r
dst = <0>;\r
dst.resize(5);\r
dst.copy(src);           // copies 10 bytes from src[0] into dst (dst resized to 10)\r
dst.copy(src, 2, 3);     // copies 3 bytes from src[2] into dst[0]\r
dst.copy(src, 1, 2, 3);  // copies 2 bytes from src[1] into dst[3]\r
\`\`\`\r
\r
### cmp(cmp [, selfStart [, cmpStart [, cmpSize]]])\r
\r
Compares this bytes with another (memcmp-style). Returns an integer: negative if this is less, zero if equal, positive if this is greater. Comparison is limited by the optional range parameters.\r
\r
**Parameters:**\r
- \`cmp\` (\`bytes\`): The bytes to compare with\r
- \`selfStart\` (\`int\`, optional): Start index in this bytes. Defaults to 0.\r
- \`cmpStart\` (\`int\`, optional): Start index in \`cmp\`. Defaults to 0.\r
- \`cmpSize\` (\`int\`, optional): Maximum number of bytes to compare. Defaults to the minimum of the remaining lengths.\r
\r
**Returns:**\r
- \`int\`: &lt; 0, 0, or &gt; 0\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = <3>;\r
b = <3>;\r
a[0] = 1; a[1] = 2; a[2] = 3;\r
b[0] = 1; b[1] = 2; b[2] = 3;\r
println(a.cmp(b));  // 0\r
\r
b[2] = 4;\r
println(a.cmp(b));  // negative\r
\`\`\`\r
`;export{n as default};
