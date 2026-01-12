# shell — Shell command execution

The `shell` module provides functions for executing shell commands.

## Functions

| Function | Description |
|----------|-------------|
| [`system(command)`](#systemcommand) | Executes a shell command and returns the exit code |
| [`run(command)`](#runcommand) | Executes a shell command and returns its output as a string |

### system(command)

Executes a shell command and returns the exit code.

**Parameters:**
- `command` (`str`): The shell command to execute

**Returns:**
- `int`: The exit code of the command (0 on success)

**Example:**

```ylang
include shell;
exit_code = shell.system("ls");
println(exit_code);  // 0 on success
```

### run(command)

Executes a shell command and returns its output as a string.

**Parameters:**
- `command` (`str`): The shell command to execute

**Returns:**
- `str`: The output of the command

**Example:**

```ylang
include shell;
output = shell.run("ls");
println(output);  // Directory listing
```
