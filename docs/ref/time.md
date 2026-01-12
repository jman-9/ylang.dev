# time — Time-related functions

The `time` module provides functions for time operations.

## Functions

| Function | Description |
|----------|-------------|
| [`sleep(ms)`](#sleepms) | Suspends execution for the specified number of milliseconds |
| [`now()`](#now) | Returns the current time as a Unix timestamp (seconds since epoch) |

### sleep(ms)

Suspends execution for the specified number of milliseconds.

**Parameters:**
- `ms` (`int`): The number of milliseconds to sleep

**Example:**

```ylang
include time;
println("Before sleep");
time.sleep(2000);  // Sleep for 2 seconds
println("After sleep");
```

### now()

Returns the current time as a Unix timestamp (number of seconds since January 1, 1970, 00:00:00 UTC).

**Returns:**
- `int`: The current Unix timestamp

**Example:**

```ylang
include time;
current_time = time.now();
println(current_time);  // e.g., 1704067200
```
