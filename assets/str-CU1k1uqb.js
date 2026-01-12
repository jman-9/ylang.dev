const r=`# str — String operations\r
\r
The \`str\` module provides functions for string manipulation. All string functions are called on string objects using the dot operator.\r
\r
## Functions\r
\r
| Function | Description |\r
|--------|-------------|\r
| [\`empty()\`](#empty) | Returns \`true\` if the string is empty, \`false\` otherwise |\r
| [\`size()\`](#size) | Returns the length of the string |\r
| [\`find([start, ]substr)\`](#find-start-substr) | Searches for a substring. If \`start\` is provided, searches from that position |\r
| [\`substr(start[, length])\`](#substrstart-length) | Returns a substring. If \`length\` is provided, returns that many characters; otherwise returns to the end |\r
| [\`replace(old, new)\`](#replaceold-new) | Replaces all occurrences of \`old\` substring with \`new\` substring |\r
| [\`split([delimiter])\`](#split-delimiter) | Splits the string. If \`delimiter\` is provided, splits by that delimiter; otherwise splits by whitespace |\r
| [\`trim()\`](#trim) | Removes leading and trailing whitespace characters |\r
| [\`ltrim()\`](#ltrim) | Removes leading whitespace characters |\r
| [\`rtrim()\`](#rtrim) | Removes trailing whitespace characters |\r
| [\`join(list)\`](#joinlist) | Joins the elements of a list into a string using the string as a delimiter |\r
| [\`starts_with(str)\`](#starts_withstr) | Checks if the string starts with the specified substring |\r
| [\`ends_with(str)\`](#ends_withstr) | Checks if the string ends with the specified substring |\r
| [\`toupper()\`](#toupper) | Converts all characters in the string to uppercase |\r
| [\`tolower()\`](#tolower) | Converts all characters in the string to lowercase |\r
\r
### empty()\r
\r
Returns \`true\` if the string is empty, \`false\` otherwise.\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the string length is 0, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.empty());  // false\r
\r
b = "";\r
println(b.empty());  // true\r
\`\`\`\r
\r
### size()\r
\r
Returns the length of the string.\r
\r
**Returns:**\r
- \`int\`: The number of characters in the string\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.size());  // 11\r
\r
b = "ylang";\r
println(b.size());  // 5\r
\`\`\`\r
\r
### find([start, ]substr)\r
\r
Searches for a substring in the string. If \`start\` is provided, searches from that position; otherwise searches from the beginning.\r
\r
**Parameters:**\r
- \`start\` (\`int\`, optional): The position to start searching from\r
- \`substr\` (\`str\`): The substring to search for\r
\r
**Returns:**\r
- \`int\`: The position of the first occurrence, or \`-1\` if not found\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.find("world"));  // 6\r
println(a.find("ylang"));  // -1\r
\r
a = "a b c d t";\r
println(a.find(3, " c d"));  // 3\r
\`\`\`\r
\r
### substr(start[, length])\r
\r
Returns a substring starting from the specified position. If \`length\` is provided, returns that many characters; otherwise returns from \`start\` to the end of the string.\r
\r
**Parameters:**\r
- \`start\` (\`int\`): The starting position\r
- \`length\` (\`int\`, optional): The length of the substring\r
\r
**Returns:**\r
- \`str\`: The substring\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.substr(6));  // "world"\r
\r
a = "pika pika chu";\r
println(a.substr(5, 4));   // "pika"\r
println(a.substr(0, 4));   // "pika"\r
\`\`\`\r
\r
### replace(old, new)\r
\r
Replaces all occurrences of \`old\` substring with \`new\` substring.\r
\r
**Parameters:**\r
- \`old\` (string): The substring to be replaced\r
- \`new\` (string): The replacement substring\r
\r
**Returns:**\r
- \`string\`: A new string with all occurrences replaced\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
b = a.replace("world", "ylang");\r
println(b);  // "hello ylang"\r
\r
c = "apple apple apple";\r
println(c.replace("apple", "banana"));  // "banana banana banana"\r
\`\`\`\r
\r
### split([delimiter])\r
\r
Splits the string and returns a list. If \`delimiter\` is provided, splits by that delimiter; otherwise splits by whitespace characters (space, tab, newline, etc.).\r
\r
**Parameters:**\r
- \`delimiter\` (\`str\`, optional): The delimiter string\r
\r
**Returns:**\r
- \`list\`: A list of substrings\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "a b   c d";\r
result = a.split();\r
println(result);  // ["a", "b", "c", "d"]\r
\r
a = "apple,banana,,grape";\r
result = a.split(",");\r
println(result);  // ["apple", "banana", "", "grape"]\r
\`\`\`\r
\r
### trim()\r
\r
Removes leading and trailing whitespace characters from the string.\r
\r
**Returns:**\r
- \`string\`: A new string with whitespace removed from both ends\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "\\r \\n \\t \\v 12345 7\\t9 \\r \\n \\t \\v ";\r
b = a.trim();\r
println(b);  // "12345 7\\t9"\r
\`\`\`\r
\r
### ltrim()\r
\r
Removes leading whitespace characters from the string.\r
\r
**Returns:**\r
- \`string\`: A new string with leading whitespace removed\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "  \\t  12345 7\\t9 \\t\\n";\r
b = a.ltrim();\r
println(b);  // "12345 7\\t9 \\t\\n"\r
\`\`\`\r
\r
### rtrim()\r
\r
Removes trailing whitespace characters from the string.\r
\r
**Returns:**\r
- \`string\`: A new string with trailing whitespace removed\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = " \\v 12345 7\\t9 \\t\\n\\r\\v ";\r
b = a.rtrim();\r
println(b);  // " \\v 12345 7\\t9"\r
\`\`\`\r
\r
### join(list)\r
\r
Joins the elements of a list into a string using the string as a delimiter.\r
\r
**Parameters:**\r
- \`list\` (list): The list of strings to join\r
\r
**Returns:**\r
- \`string\`: A string with list elements joined by the delimiter\r
\r
**Example:**\r
\r
\`\`\`ylang\r
delim = "::";\r
list = ["aa", "bb", "cc", "dd"];\r
result = delim.join(list);\r
println(result);  // "aa::bb::cc::dd"\r
\r
comma = ",";\r
words = ["apple", "banana", "grape"];\r
println(comma.join(words));  // "apple,banana,grape"\r
\`\`\`\r
\r
### starts_with(str)\r
\r
Checks if the string starts with the specified substring.\r
\r
**Parameters:**\r
- \`str\` (string): The substring to check\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the string starts with the substring, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.starts_with("hello"));  // true\r
println(a.starts_with("world"));  // false\r
\`\`\`\r
\r
### ends_with(str)\r
\r
Checks if the string ends with the specified substring.\r
\r
**Parameters:**\r
- \`str\` (string): The substring to check\r
\r
**Returns:**\r
- \`bool\`: \`true\` if the string ends with the substring, otherwise \`false\`\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "hello world";\r
println(a.ends_with("world"));  // true\r
println(a.ends_with("hello"));  // false\r
\`\`\`\r
\r
### toupper()\r
\r
Converts all characters in the string to uppercase.\r
\r
**Returns:**\r
- \`string\`: A new string with all characters in uppercase\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "Hello World";\r
println(a.toupper());  // "HELLO WORLD"\r
\`\`\`\r
\r
### tolower()\r
\r
Converts all characters in the string to lowercase.\r
\r
**Returns:**\r
- \`string\`: A new string with all characters in lowercase\r
\r
**Example:**\r
\r
\`\`\`ylang\r
a = "Hello World";\r
println(a.tolower());  // "hello world"\r
\`\`\`\r
`;export{r as default};
