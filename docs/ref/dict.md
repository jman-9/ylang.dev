# dict — Dictionary operations

The `dict` module provides functions for dictionary manipulation. All dictionary functions are called on dictionary objects using the dot operator.

## Functions

| Function | Description |
|--------|-------------|
| [`empty()`](#empty) | Returns `true` if the dictionary is empty, `false` otherwise |
| [`size()`](#size) | Returns the number of key-value pairs in the dictionary |
| [`contains(key)`](#containskey) | Checks if the dictionary contains the specified key |
| [`keys()`](#keys) | Returns a list of all keys in the dictionary |
| [`values()`](#values) | Returns a list of all values in the dictionary |
| [`items()`](#items) | Returns a list of all key-value pairs as [key, value] lists |
| [`pop(key)`](#popkey) | Removes and returns the value associated with the specified key |

### empty()

Returns `true` if the dictionary is empty, `false` otherwise.

**Returns:**
- `bool`: `true` if the dictionary size is 0, otherwise `false`

**Example:**

```ylang
d = {'x': 10, 'y': 20};
println(d.empty());  // false

e = {};
println(e.empty());  // true
```

### size()

Returns the number of key-value pairs in the dictionary.

**Returns:**
- `int`: The number of key-value pairs in the dictionary

**Example:**

```ylang
d = {'x': 10, 'y': 20, 'z': 30};
println(d.size());  // 3
```

### contains(key)

Checks if the dictionary contains the specified key.

**Parameters:**
- `key` (`str`): The key to search for

**Returns:**
- `bool`: `true` if the key exists, `false` otherwise

**Example:**

```ylang
d = {'x': 10, 'y': 20};
println(d.contains("x"));  // true
println(d.contains("z"));  // false
```

### keys()

Returns a list of all keys in the dictionary.

**Returns:**
- `list`: A list containing all keys in the dictionary

**Example:**

```ylang
d = {'x': 10, 'y': 20, 'z': 30};
println(d.keys());  // ["x", "y", "z"]
```

### values()

Returns a list of all values in the dictionary.

**Returns:**
- `list`: A list containing all values in the dictionary

**Example:**

```ylang
d = {'x': 10, 'y': 20, 'z': 30};
println(d.values());  // [10, 20, 30]
```

### items()

Returns a list of all key-value pairs. Each pair is represented as a list `[key, value]`.

**Returns:**
- `list`: A list of [key, value] pairs

**Example:**

```ylang
d = {'x': 10, 'y': 20};
items = d.items();
println(items);  // [["x", 10], ["y", 20]]
```

### pop(key)

Removes and returns the value associated with the specified key. If the key does not exist, returns an empty value.

**Parameters:**
- `key` (`str`): The key to remove

**Returns:**
- The value associated with the key, or an empty value if the key does not exist

**Example:**

```ylang
d = {'x': 10, 'y': 20, 'z': 30};
value = d.pop("y");
println(value);  // 20
println(d);      // {'x': 10, 'z': 30}
```
