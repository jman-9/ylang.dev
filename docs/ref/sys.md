# sys — System-specific parameters and functions

The `sys` module provides access to system-specific parameters and functions.

## Variables

| Variable | Description |
|----------|-------------|
| [`version`](#version) | The ylang version string |
| [`executable`](#executable) | The path to the ylang executable |
| [`args`](#args) | A list of command-line arguments passed to the program |

## Functions

| Function | Description |
|----------|-------------|
| [`env()`](#env) | Returns a dictionary of all environment variables |
| [`getenv(name)`](#getenvname) | Returns the value of the environment variable `name` |
| [`setenv(name, value)`](#setenvname-value) | Sets the environment variable `name` to `value` |

### .version

The ylang version string.

**Example:**

```ylang
include sys;
println(sys.version);  // e.g., "ylang 1.0.0"
```

### .executable

The path to the ylang executable.

**Example:**

```ylang
include sys;
println(sys.executable);  // e.g., "/usr/bin/ylang"
```

### .args

A list of command-line arguments passed to the program (excluding the program name itself).

**Example:**

```ylang
include sys;
println(sys.args);  // e.g., ["arg1", "arg2"]
```

### env()

Returns a dictionary containing all environment variables.

**Returns:**
- `dict`: A dictionary mapping environment variable names to their values

**Example:**

```ylang
include sys;
env_vars = sys.env();
println(env_vars["PATH"]);
```

### getenv(name)

Returns the value of the environment variable `name`. Returns `null` if the variable does not exist.

**Parameters:**
- `name` (`str`): The name of the environment variable

**Returns:**
- `str` or `null`: The value of the environment variable, or `null` if not found

**Example:**

```ylang
include sys;
path = sys.getenv("PATH");
println(path);

// Check if variable exists
home = sys.getenv("HOME");
if (home != null) {
    println("Home directory: " + home);
}
```

### setenv(name, value)

Sets the environment variable `name` to `value`.

**Parameters:**
- `name` (`str`): The name of the environment variable
- `value` (`str`): The value to set

**Returns:**
- `bool`: `true` on success, `false` on failure

**Example:**

```ylang
include sys;
ok = sys.setenv("MY_VAR", "test_value");
if (ok) {
    value = sys.getenv("MY_VAR");
    println(value);  // "test_value"
}
```
