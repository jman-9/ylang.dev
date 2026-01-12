# fs — File system operations

The `fs` module provides functions for file system operations.

## Submodules

| Submodule | Description |
|-----------|-------------|
| [`path`](#path-submodule) | Path manipulation functions (see `fs.path`) |

## Functions

| Function | Description |
|----------|-------------|
| [`exists(path)`](#existspath) | Checks if a file or directory exists |
| [`cwd()`](#cwd) | Returns the current working directory |
| [`cwd(path)`](#cwdpath) | Changes the current working directory |
| [`abspath(path)`](#abspathpath) | Returns the absolute path of a file or directory |
| [`readdir(path)`](#readdirpath) | Returns a list of entries in the specified directory |

### exists(path)

Checks if a file or directory exists at the specified path.

**Parameters:**
- `path` (`str`): The path to check

**Returns:**
- `bool`: `true` if the path exists, `false` otherwise

**Example:**

```ylang
include fs;
if (fs.exists("data.txt")) {
    println("File exists");
} else {
    println("File does not exist");
}
```

### cwd()

Returns the current working directory.

**Returns:**
- `str`: The current working directory path

**Example:**

```ylang
include fs;
current_dir = fs.cwd();
println(current_dir);
```

### cwd(path)

Changes the current working directory to the specified path.

**Parameters:**
- `path` (`str`): The directory path to change to

**Returns:**
- `bool`: `true` on success, `false` on failure

**Example:**

```ylang
include fs;
fs.cwd("/home/user");
println(fs.cwd());  // "/home/user"
```

### abspath(path)

Returns the absolute path of a file or directory.

**Parameters:**
- `path` (`str`): The relative or absolute path

**Returns:**
- `str`: The absolute path

**Example:**

```ylang
include fs;
abs = fs.abspath("data.txt");
println(abs);  // e.g., "/home/user/data.txt"
```

### readdir(path)

Returns a list of entries (files and directories) in the specified directory.

**Parameters:**
- `path` (`str`): The directory path

**Returns:**
- `list`: A list of entry names in the directory

**Example:**

```ylang
include fs;
entries = fs.readdir(".");
for (i = 0; i < entries.size(); i += 1) {
    println(entries[i]);
}
```

## path Submodule

The `fs.path` submodule provides path manipulation functions.

### fs.path.join(...)

Joins multiple path components into a single path.

**Parameters:**
- Variable number of `str` arguments: Path components to join

**Returns:**
- `str`: The joined path

**Example:**

```ylang
include fs;
p = fs.path.join("a", "b", "c");
println(p);  // "a/b/c" (or "a\\b\\c" on Windows)
```

### fs.path.parent(path)

Returns the parent directory of the specified path.

**Parameters:**
- `path` (`str`): The file or directory path

**Returns:**
- `str`: The parent directory path

**Example:**

```ylang
include fs;
parent = fs.path.parent("/home/user/file.txt");
println(parent);  // "/home/user"
```

### fs.path.name(path)

Returns the filename (with extension) from the specified path.

**Parameters:**
- `path` (`str`): The file path

**Returns:**
- `str`: The filename

**Example:**

```ylang
include fs;
name = fs.path.name("/home/user/file.txt");
println(name);  // "file.txt"
```

### fs.path.stem(path)

Returns the filename without the extension.

**Parameters:**
- `path` (`str`): The file path

**Returns:**
- `str`: The filename without extension

**Example:**

```ylang
include fs;
stem = fs.path.stem("/home/user/file.txt");
println(stem);  // "file"
```

### fs.path.ext(path)

Returns the file extension (including the dot).

**Parameters:**
- `path` (`str`): The file path

**Returns:**
- `str`: The file extension

**Example:**

```ylang
include fs;
ext = fs.path.ext("/home/user/file.txt");
println(ext);  // ".txt"
```
