const e=`# file — File operations

The \`file\` module provides functions for file I/O operations.

## Functions

| Function | Description |
|----------|-------------|
| [\`open(path, mode)\`](#openpath-mode) | Opens a file and returns a file object |
| [\`close()\`](#close) | Closes the file (called on file object) |
| [\`is_binary_mode()\`](#is_binary_mode) | Returns whether the file was opened in binary mode (called on file object) |
| [\`read(size)\`](#readsize) | Reads up to \`size\` bytes from the file (called on file object) |
| [\`read_all(path [, binary])\`](#read_allpath-binary) | Reads the entire contents of a file |
| [\`write(data)\`](#writedata) | Writes data to the file (called on file object) |
| [\`write_all(path, data)\`](#write_allpath-data) | Writes data to a file, creating or overwriting it |

### open(path, mode)

Opens a file and returns a file object.

**Parameters:**
- \`path\` (\`str\`): The path to the file
- \`mode\` (\`str\`): The file mode:
  - \`"r"\`: Read mode (text, default)
  - \`"w"\`: Write mode (text, creates or truncates)
  - \`"w+"\`: Read/write mode (text, creates or truncates)
  - \`"a"\`: Append mode (text)
  - \`"rb"\`, \`"wb"\`, \`"w+b"\`, \`"ab"\`: Binary variants; include \`"b"\` for binary I/O (bytes instead of str)

**Returns:**
- File object: A file object that can be used with other file methods

**Example:**

\`\`\`ylang
include file;
f = file.open("data.txt", "r");
// Use file object...
f.close();
\`\`\`

### close()

Closes the file. Must be called on a file object returned by \`file.open()\`.

**Example:**

\`\`\`ylang
include file;
f = file.open("data.txt", "w+");
f.write("Hello, World!");
f.close();
\`\`\`

### is_binary_mode()

Returns whether the file was opened in binary mode. Must be called on a file object.

**Returns:**
- \`bool\`: \`true\` if the file was opened with a mode containing \`"b"\` (e.g. \`"rb"\`, \`"wb"\`), \`false\` otherwise

**Example:**

\`\`\`ylang
include file;
f = file.open("data.bin", "rb");
println(f.is_binary_mode());  // true
f.close();
\`\`\`

### read(size)

Reads up to \`size\` bytes from the file. Must be called on a file object.

**Parameters:**
- \`size\` (\`int\`): The maximum number of bytes to read

**Returns:**
- \`str\` or \`bytes\`: The data read. In text mode, returns \`str\`; in binary mode, returns \`bytes\`.

**Example:**

\`\`\`ylang
include file;
f = file.open("data.txt", "r");
content = f.read(100);  // Read up to 100 bytes as str
f.close();
println(content);

f = file.open("data.bin", "rb");
raw = f.read(100);  // Read up to 100 bytes as bytes
f.close();
\`\`\`

### read_all(path [, binary])

Reads the entire contents of a file.

**Parameters:**
- \`path\` (\`str\`): The path to the file
- \`binary\` (\`bool\`, optional): If \`true\`, open and read in binary mode (returns \`bytes\`). Defaults to \`false\` (returns \`str\`).

**Returns:**
- \`str\` or \`bytes\`: The entire contents. \`str\` when \`binary\` is false or omitted, \`bytes\` when \`binary\` is true.

**Example:**

\`\`\`ylang
include file;
content = file.read_all("data.txt");
println(content);

raw = file.read_all("data.bin", true);  // read as bytes
\`\`\`

### write_all(path, data)

Writes data to a file, creating the file if it doesn't exist or overwriting it if it does. This is a convenience function that opens, writes, and closes the file in one operation.

**Parameters:**
- \`path\` (\`str\`): The path to the file
- \`data\` (\`str\` or \`bytes\`): The data to write to the file

**Returns:**
- \`int\`: Error code (0 on success, non-zero on error)

**Example:**

\`\`\`ylang
include file;
file.write_all("output.txt", "Hello, World!");

// Write bytes (binary file)
buf = <4>;
buf[0] = 0x48; buf[1] = 0x65; buf[2] = 0x6c; buf[3] = 0x6c;  // "Hell"
file.write_all("output.bin", buf);
\`\`\`

### write(data)

Writes data to the file. Must be called on a file object opened in write mode.

**Parameters:**
- \`data\` (\`str\` or \`bytes\`): The data to write

**Returns:**
- \`int\`: Error code (0 on success)

**Example:**

\`\`\`ylang
include file;
f = file.open("output.txt", "w+");
f.write("Hello, World!");
f.close();

// Write bytes (binary mode)
f = file.open("output.bin", "wb");
buf = <3>;
buf[0] = 65; buf[1] = 66; buf[2] = 67;  // ABC
f.write(buf);
f.close();
\`\`\`
`;export{e as default};
