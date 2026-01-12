# math — Mathematical functions

The `math` module provides mathematical functions and variables.

## Variables

| Variable | Description |
|----------|-------------|
| `pi` | The mathematical constant π (approximately 3.14159) |

## Functions

| Function | Description |
|----------|-------------|
| [`sin(x)`](#sinx) | Returns the sine of `x` (in radians) |
| [`cos(x)`](#cosx) | Returns the cosine of `x` (in radians) |
| [`tan(x)`](#tanx) | Returns the tangent of `x` (in radians) |
| [`sqrt(x)`](#sqrtx) | Returns the square root of `x` |
| [`floor(x)`](#floorx) | Returns the largest integer less than or equal to `x` |
| [`ceil(x)`](#ceilx) | Returns the smallest integer greater than or equal to `x` |
| [`round(x)`](#roundx) | Returns the nearest integer to `x` |
| [`pow(x, y)`](#powx-y) | Returns `x` raised to the power of `y` |
| [`abs(x)`](#absx) | Returns the absolute value of `x` |
| [`min(x, y)`](#minx-y) | Returns the minimum of `x` and `y` |
| [`max(x, y)`](#maxx-y) | Returns the maximum of `x` and `y` |

### pi

The mathematical constant π (approximately 3.14159).

**Example:**

```ylang
include math;
println(math.pi);  // 3.14159...
```

### sin(x)

Returns the sine of `x` (in radians).

**Parameters:**
- `x` (`int` or `float`): The angle in radians

**Returns:**
- `float`: The sine of `x`

**Example:**

```ylang
include math;
pi_d2 = 1.57079632679;  // π/2
println(math.sin(pi_d2));  // 1.0
```

### cos(x)

Returns the cosine of `x` (in radians).

**Parameters:**
- `x` (`int` or `float`): The angle in radians

**Returns:**
- `float`: The cosine of `x`

**Example:**

```ylang
include math;
println(math.cos(0));  // 1.0
```

### tan(x)

Returns the tangent of `x` (in radians).

**Parameters:**
- `x` (`int` or `float`): The angle in radians

**Returns:**
- `float`: The tangent of `x`

### sqrt(x)

Returns the square root of `x`.

**Parameters:**
- `x` (`int` or `float`): The number

**Returns:**
- `float`: The square root of `x`

**Example:**

```ylang
include math;
println(math.sqrt(2.0));  // 1.41421...
```

### floor(x)

Returns the largest integer less than or equal to `x`.

**Parameters:**
- `x` (`int` or `float`): The number

**Returns:**
- `int` or `float`: The floor of `x`

**Example:**

```ylang
include math;
println(math.floor(3.7));  // 3
println(math.floor(-3.7));  // -4
```

### ceil(x)

Returns the smallest integer greater than or equal to `x`.

**Parameters:**
- `x` (`int` or `float`): The number

**Returns:**
- `int` or `float`: The ceiling of `x`

**Example:**

```ylang
include math;
println(math.ceil(3.2));  // 4
println(math.ceil(-3.2));  // -3
```

### round(x)

Returns the nearest integer to `x`.

**Parameters:**
- `x` (`int` or `float`): The number

**Returns:**
- `int` or `float`: The rounded value

**Example:**

```ylang
include math;
println(math.round(3.5));  // 4
println(math.round(3.4));  // 3
```

### pow(x, y)

Returns `x` raised to the power of `y`.

**Parameters:**
- `x` (`int` or `float`): The base
- `y` (`int` or `float`): The exponent

**Returns:**
- `float`: `x` raised to the power of `y`

**Example:**

```ylang
include math;
println(math.pow(5, 3));  // 125.0
```

### abs(x)

Returns the absolute value of `x`.

**Parameters:**
- `x` (`int` or `float`): The number

**Returns:**
- `int` or `float`: The absolute value of `x`

**Example:**

```ylang
include math;
println(math.abs(-1));  // 1
println(math.abs(0));  // 0
println(math.abs(-2.0));  // 2.0
```

### min(x, y)

Returns the minimum of `x` and `y`.

**Parameters:**
- `x` (`int` or `float`): The first number
- `y` (`int` or `float`): The second number

**Returns:**
- `int` or `float`: The minimum of `x` and `y`

**Example:**

```ylang
include math;
println(math.min(9, 8));  // 8
println(math.min(5, 2.0));  // 2.0
```

### max(x, y)

Returns the maximum of `x` and `y`.

**Parameters:**
- `x` (`int` or `float`): The first number
- `y` (`int` or `float`): The second number

**Returns:**
- `int` or `float`: The maximum of `x` and `y`

**Example:**

```ylang
include math;
println(math.max(9, 8));  // 9
println(math.max(5.0, 2));  // 5.0
```
