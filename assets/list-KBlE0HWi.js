const n=`# list — List operations\r
\r
The \`list\` module provides functions for list manipulation. All list functions are called on list objects using the dot operator.\r
\r
## Functions\r
\r
| Function | Description |\r
|--------|-------------|\r
| [\`empty()\`](#empty) | Returns \`true\` if the list is empty, \`false\` otherwise |\r
| [\`size()\`](#size) | Returns the number of elements in the list |\r
| [\`resize(n)\`](#resizen) | Resizes the list to contain \`n\` elements |\r
| [\`push_back(value)\`](#push_backvalue) | Adds an element to the end of the list |\r
| [\`insert(index, value)\`](#insertindex-value) | Inserts an element at the specified index |\r
| [\`pop(index)\`](#popindex) | Removes and returns the element at the specified index |\r
| [\`pop_front()\`](#pop_front) | Removes and returns the first element of the list |\r
| [\`pop_back()\`](#pop_back) | Removes and returns the last element of the list |\r
| [\`front()\`](#front) | Returns the first element of the list |\r
| [\`back()\`](#back) | Returns the last element of the list |\r
\r
### empty()\r
\r
Returns \`true\` if the list is empty, \`false\` otherwise.\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the list size is 0, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
println(a.empty());  // false\r
\r
b = [];\r
println(b.empty());  // true\r
\`\`\`\r
\r
### size()\r
\r
Returns the number of elements in the list.\r
\r
**Returns:**\r
- \`int\`: The number of elements in the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
println(a.size());  // 3\r
\`\`\`\r
\r
### resize(n)\r
\r
Resizes the list to contain \`n\` elements. If the new size is larger than the current size, new elements are default-initialized. If the new size is smaller, elements are removed from the end.\r
\r
**Parameters:**\r
- \`n\` (\`int\`): The new size of the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
a.resize(5);\r
println(a);  // [1, 2, 3, 0, 0]\r
\r
a.resize(2);\r
println(a);  // [1, 2]\r
\`\`\`\r
\r
### push_back(value)\r
\r
Adds an element to the end of the list.\r
\r
**Parameters:**\r
- \`value\`: The value to add to the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
a.push_back(4);\r
println(a);  // [1, 2, 3, 4]\r
\r
a.push_back("hello");\r
println(a);  // [1, 2, 3, 4, "hello"]\r
\`\`\`\r
\r
### insert(index, value)\r
\r
Inserts an element at the specified index. Elements at and after the index are shifted to the right.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index at which to insert the element\r
- \`value\`: The value to insert\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
a.insert(1, 99);\r
println(a);  // [1, 99, 2, 3]\r
\`\`\`\r
\r
### pop(index)\r
\r
Removes and returns the element at the specified index.\r
\r
**Parameters:**\r
- \`index\` (\`int\`): The index of the element to remove\r
\r
**Returns:**\r
- The element that was removed\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3, 4];\r
value = a.pop(2);\r
println(value);  // 3\r
println(a);      // [1, 2, 4]\r
\`\`\`\r
\r
### pop_front()\r
\r
Removes and returns the first element of the list.\r
\r
**Returns:**\r
- The first element of the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
value = a.pop_front();\r
println(value);  // 1\r
println(a);      // [2, 3]\r
\`\`\`\r
\r
### pop_back()\r
\r
Removes and returns the last element of the list.\r
\r
**Returns:**\r
- The last element of the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
value = a.pop_back();\r
println(value);  // 3\r
println(a);      // [1, 2]\r
\`\`\`\r
\r
### front()\r
\r
Returns the first element of the list without removing it.\r
\r
**Returns:**\r
- The first element of the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
println(a.front());  // 1\r
println(a);          // [1, 2, 3]\r
\`\`\`\r
\r
### back()\r
\r
Returns the last element of the list without removing it.\r
\r
**Returns:**\r
- The last element of the list\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = [1, 2, 3];\r
println(a.back());  // 3\r
println(a);         // [1, 2, 3]\r
\`\`\`\r
`;export{n as default};
