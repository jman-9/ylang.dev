# rand — Random number generation

The `rand` module provides functions for generating random numbers.

## Functions

| Function | Description |
|----------|-------------|
| [`randomize_timer()`](#randomize_timer) | Initializes the random number generator with the current time |
| [`seed(n)`](#seedn) | Initializes the random number generator with a specific seed |
| [`get(min, max)`](#getmin-max) | Returns a random number between `min` and `max` (inclusive) |

### randomize_timer()

Initializes the random number generator with the current time as the seed. This ensures different random sequences on each program run.

**Example:**

```ylang
include rand;
rand.randomize_timer();
r = rand.get(1, 10);
println(r);  // Random number between 1 and 10
```

### seed(n)

Initializes the random number generator with a specific seed value. Using the same seed will produce the same sequence of random numbers.

**Parameters:**
- `n` (`int`): The seed value

**Example:**

```ylang
include rand;
rand.seed(42);
r1 = rand.get(1, 100);
rand.seed(42);  // Same seed
r2 = rand.get(1, 100);
// r1 and r2 will be the same
```

### get(min, max)

Returns a random number between `min` and `max` (inclusive). The return type depends on the input types:
- If both `min` and `max` are integers, returns an integer
- If either is a float, returns a float

**Parameters:**
- `min` (`int` or `float`): The minimum value (inclusive)
- `max` (`int` or `float`): The maximum value (inclusive)

**Returns:**
- `int` or `float`: A random number between `min` and `max`

**Example:**

```ylang
include rand;
rand.randomize_timer();

// Integer random number
r1 = rand.get(1, 10);
println(r1);  // Random integer between 1 and 10

// Float random number
r2 = rand.get(0.0, 1.0);
println(r2);  // Random float between 0.0 and 1.0
```
