const n=`# fs — File system operations

The \`fs\` module provides functions for file system operations.

## Submodules

| Submodule | Description |
|-----------|-------------|
| [\`path\`](#path-submodule) | Path manipulation functions (see \`fs.path\`) |

## Functions

| Function | Description |
|----------|-------------|
| [\`exists(path)\`](#existspath) | Checks if a file or directory exists |
| [\`cwd([path])\`](#cwd-path) | Returns the current working directory, or changes it if \`path\` is provided |
| [\`abspath(path)\`](#abspathpath) | Returns the absolute path of a file or directory |
| [\`readdir(path [, recursive])\`](#readdirpath-recursive) | Returns a list of entries in the specified directory |
| [\`mkdirs(path)\`](#mkdirspath) | Creates the directory and any missing parent directories |
| [\`remove(path)\`](#removepath) | Removes a file or empty directory |

### exists(path)

Checks if a file or directory exists at the specified path.

**Parameters:**
- \`path\` (\`str\`): The path to check

**Returns:**
- \`bool\`: \`true\` if the path exists, \`false\` otherwise

**Example:**

\`\`\`ylang
include fs;
if (fs.exists("data.txt")) {
    println("File exists");
} else {
    println("File does not exist");
}
\`\`\`

### cwd([path])

Returns the current working directory, or changes it if \`path\` is provided.

**Parameters:**
- \`path\` (\`str\`, optional): The directory path to change to

**Returns:**
- \`str\`: The current working directory path (if no \`path\` is provided)
- \`bool\`: \`true\` on success, \`false\` on failure (if \`path\` is provided)

**Example:**

\`\`\`ylang
include fs;
current_dir = fs.cwd();
println(current_dir);

fs.cwd("/home/user");
println(fs.cwd());  // "/home/user"
\`\`\`

### abspath(path)

Returns the absolute path of a file or directory.

**Parameters:**
- \`path\` (\`str\`): The relative or absolute path

**Returns:**
- \`str\`: The absolute path

**Example:**

\`\`\`ylang
include fs;
abs = fs.abspath("data.txt");
println(abs);  // e.g., "/home/user/data.txt"
\`\`\`

### readdir(path [, recursive])

Returns a list of entries in the specified directory. Only regular files are included in the list.

**Parameters:**
- \`path\` (\`str\`): The directory path
- \`recursive\` (\`bool\`, optional): If \`true\`, walks the directory recursively and lists regular files in subdirectories. Defaults to \`false\`.

**Returns:**
- \`list\`: A list of entry paths (as strings). With \`recursive\` true, paths are full paths to each regular file.

**Example:**

\`\`\`ylang
include fs;
entries = fs.readdir(".");
for (i = 0; i < entries.size(); i += 1) {
    println(entries[i]);
}

// Recursive: all regular files under dir
files = fs.readdir("src", true);
for (i = 0; i < files.size(); i += 1) {
    println(files[i]);
}
\`\`\`

### mkdirs(path)

Creates the directory at the given path. If any parent directories do not exist, they are created as well (like \`mkdir -p\`).

**Parameters:**
- \`path\` (\`str\`): The directory path to create

**Returns:**
- \`bool\`: \`true\` if the directory was created or already exists, \`false\` on failure

**Example:**

\`\`\`ylang
include fs;
ok = fs.mkdirs("out/logs");
if (ok) {
    println("Directory created");
}
\`\`\`

### remove(path)

Removes a file or an empty directory at the given path.

**Parameters:**
- \`path\` (\`str\`): The path to the file or directory to remove

**Returns:**
- \`bool\`: \`true\` if the file or directory was removed, \`false\` on failure (e.g. non-empty directory, missing path)

**Example:**

\`\`\`ylang
include fs;
ok = fs.remove("temp.txt");
if (ok) {
    println("Removed");
}
\`\`\`

## path Submodule

The \`fs.path\` submodule provides path manipulation functions.

### Functions

| Function | Description |
|----------|-------------|
| [\`fs.path.join(...)\`](#fspathjoin) | Joins multiple path components into a single path |
| [\`fs.path.parent(path)\`](#fspathparentpath) | Returns the parent directory of the specified path |
| [\`fs.path.name(path)\`](#fspathnamepath) | Returns the filename (with extension) from the specified path |
| [\`fs.path.stem(path)\`](#fspathstempath) | Returns the filename without the extension |
| [\`fs.path.ext(path)\`](#fspathextpath) | Returns the file extension (including the dot) |

### fs.path.join(...)

Joins multiple path components into a single path.

**Parameters:**
- Variable number of \`str\` arguments: Path components to join

**Returns:**
- \`str\`: The joined path

**Example:**

\`\`\`ylang
include fs;
p = fs.path.join("a", "b", "c");
println(p);  // "a/b/c" (or "a\\\\b\\\\c" on Windows)
\`\`\`

### fs.path.parent(path)

Returns the parent directory of the specified path.

**Parameters:**
- \`path\` (\`str\`): The file or directory path

**Returns:**
- \`str\`: The parent directory path

**Example:**

\`\`\`ylang
include fs;
parent = fs.path.parent("/home/user/file.txt");
println(parent);  // "/home/user"
\`\`\`

### fs.path.name(path)

Returns the filename (with extension) from the specified path.

**Parameters:**
- \`path\` (\`str\`): The file path

**Returns:**
- \`str\`: The filename

**Example:**

\`\`\`ylang
include fs;
name = fs.path.name("/home/user/file.txt");
println(name);  // "file.txt"
\`\`\`

### fs.path.stem(path)

Returns the filename without the extension.

**Parameters:**
- \`path\` (\`str\`): The file path

**Returns:**
- \`str\`: The filename without extension

**Example:**

\`\`\`ylang
include fs;
stem = fs.path.stem("/home/user/file.txt");
println(stem);  // "file"
\`\`\`

### fs.path.ext(path)

Returns the file extension (including the dot).

**Parameters:**
- \`path\` (\`str\`): The file path

**Returns:**
- \`str\`: The file extension

**Example:**

\`\`\`ylang
include fs;
ext = fs.path.ext("/home/user/file.txt");
println(ext);  // ".txt"
\`\`\`
`;export{n as default};
