# file — File operations

The `file` module provides functions for file I/O operations.

## Functions

| Function | Description |
|----------|-------------|
| [`open(path, mode)`](#openpath-mode) | Opens a file and returns a file object |
| [`close()`](#close) | Closes the file (called on file object) |
| [`read(size)`](#readsize) | Reads up to `size` bytes from the file (called on file object) |
| [`read_all(path)`](#read_allpath) | Reads the entire contents of a file |
| [`write(data)`](#writedata) | Writes data to the file (called on file object) |
| [`write_all(path, data)`](#write_allpath-data) | Writes data to a file, creating or overwriting it |

### open(path, mode)

Opens a file and returns a file object.

**Parameters:**
- `path` (`str`): The path to the file
- `mode` (`str`): The file mode:
  - `"r"`: Read mode (default)
  - `"w"`: Write mode (creates or truncates)
  - `"w+"`: Read/write mode (creates or truncates)
  - `"a"`: Append mode

**Returns:**
- File object: A file object that can be used with other file methods

**Example:**

```ylang
include file;
f = file.open("data.txt", "r");
// Use file object...
f.close();
```

### close()

Closes the file. Must be called on a file object returned by `file.open()`.

**Example:**

```ylang
include file;
f = file.open("data.txt", "w+");
f.write("Hello, World!");
f.close();
```

### read(size)

Reads up to `size` bytes from the file. Must be called on a file object.

**Parameters:**
- `size` (`int`): The maximum number of bytes to read

**Returns:**
- `str`: The data read from the file

**Example:**

```ylang
include file;
f = file.open("data.txt", "r");
content = f.read(100);  // Read up to 100 bytes
f.close();
println(content);
```

### read_all(path)

Reads the entire contents of a file into a string.

**Parameters:**
- `path` (`str`): The path to the file

**Returns:**
- `str`: The entire contents of the file

**Example:**

```ylang
include file;
content = file.read_all("data.txt");
println(content);
```

### write_all(path, data)

Writes data to a file, creating the file if it doesn't exist or overwriting it if it does. This is a convenience function that opens, writes, and closes the file in one operation.

**Parameters:**
- `path` (`str`): The path to the file
- `data` (`str`): The data to write to the file

**Returns:**
- `int`: Error code (0 on success, non-zero on error)

**Example:**

```ylang
include file;
file.write_all("output.txt", "Hello, World!");
```

### write(data)

Writes data to the file. Must be called on a file object opened in write mode.

**Parameters:**
- `data` (`str`): The data to write

**Returns:**
- `int`: Error code (0 on success)

**Example:**

```ylang
include file;
f = file.open("output.txt", "w+");
f.write("Hello, World!");
f.close();
```
