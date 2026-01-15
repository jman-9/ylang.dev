# Builtin Functions

Builtin functions are globally available functions that don't require any module to be included. They provide essential I/O and program control functionality.

## Functions

| Function | Description |
|----------|-------------|
| [`print([value])`](#print-value) | Prints a value to stdout without a newline |
| [`println([value])`](#println-value) | Prints a value to stdout with a newline |
| [`eprint([value])`](#eprint-value) | Prints a value to stderr without a newline |
| [`eprintln([value])`](#eprintln-value) | Prints a value to stderr with a newline |
| [`readln()`](#readln) | Reads a line from stdin |
| [`exit([code])`](#exit-code) | Terminates the program with an optional exit code |

### print([value])

Prints a value to stdout without a trailing newline. If called without arguments, does nothing.

**Parameters:**
- `value` (any, optional): The value to print. Can be a variable, literal, or object. If not provided, the function does nothing.

**Returns:**
- Nothing (void)

**Example:**

```ylang
print("Hello");
print(" World");  // Output: Hello World (no newline)

print(123);  // Output: 123 (no newline)
print();     // Does nothing
```

### println([value])

Prints a value to stdout with a trailing newline. If called without arguments, prints only a newline.

**Parameters:**
- `value` (any, optional): The value to print. Can be a variable, literal, or object. If not provided, only a newline is printed.

**Returns:**
- Nothing (void)

**Example:**

```ylang
println("Hello, " + "World!");  // Output: Hello, World! (newline)

println();  // Output: (just a newline)

i = 0;
println("Line {++i}");
println("Line {++i}");
println("Line {++i}");
// Output:
// Line 1
// Line 2
// Line 3
```

### eprint([value])

Prints a value to stderr (standard error) without a trailing newline. If called without arguments, does nothing. Useful for error messages and debugging output.

**Parameters:**
- `value` (any, optional): The value to print to stderr. Can be a variable, literal, or object. If not provided, the function does nothing.

**Returns:**
- Nothing (void)

**Example:**

```ylang
eprint("Error: File not found");
eprint("\n");  // Output to stderr: Error: File not found (newline)

eprint(42);    // Output to stderr: 42 (no newline)
eprint();      // Does nothing
```

### eprintln([value])

Prints a value to stderr with a trailing newline. If called without arguments, prints only a newline to stderr.

**Parameters:**
- `value` (any, optional): The value to print to stderr. Can be a variable, literal, or object. If not provided, only a newline is printed to stderr.

**Returns:**
- Nothing (void)

**Example:**

```ylang
eprintln("Error: File not found");  // Output to stderr: Error: File not found (newline)

eprintln();  // Output to stderr: (just a newline)

eprintln("Debug: value = 42");  // Output to stderr: Debug: value = 42 (newline)
```

### readln()

Reads a line from stdin (standard input) and returns it as a string.

**Parameters:**
- None

**Returns:**
- `str`: The line read from stdin (without the trailing newline)

**Example:**

```ylang
println("Enter your name:");
name = readln();
println("Hello, {name}!");

// If user enters "Alice", output:
// Enter your name:
// Hello, Alice!
```

### exit([code])

Terminates the program immediately. If an exit code is provided, the program exits with that code; otherwise, it exits with code 0.

**Parameters:**
- `code` (`int`, optional): The exit code. Defaults to 0 if not provided. Exit code 0 typically indicates success, while non-zero values indicate errors.

**Returns:**
- Never returns (terminates the program)

**Example:**

```ylang
println("Starting program...");

if (some_error) {
    eprintln("Fatal error occurred");
    exit(1);  // Exit with error code 1
}

println("Program completed successfully");
exit(0);  // Exit with success code 0 (explicit, but optional)

// Or simply:
exit();  // Exits with code 0
```
