# json — JSON encoding and decoding

The `json` module provides functions for parsing and serializing JSON data.

## Functions

| Function | Description |
|----------|-------------|
| [`parse(text)`](#parsetext) | Parses a JSON string and returns a ylang object (dict or list) |
| [`dump(obj [, indent])`](#dumpobj-indent) | Converts a ylang object (dict or list) to a JSON string |

### parse(text)

Parses a JSON string and returns a ylang object. The JSON object is converted to a dictionary, and JSON arrays are converted to lists.

**Parameters:**
- `text` (`str`): The JSON string to parse

**Returns:**
- `dict` or `list`: The parsed JSON data

**Example:**

```ylang
include json;
json_text = '''
{
    "name": "Alice",
    "age": 30,
    "scores": [85, 92, 78]
}
''';
data = json.parse(json_text);
println(data["name"]);  // "Alice"
println(data["scores"]);  // [85, 92, 78]
```

### dump(obj [, indent])

Converts a ylang object (dictionary or list) to a JSON string.

**Parameters:**
- `obj` (`dict` or `list`): The object to serialize
- `indent` (`int`, optional): The indentation level for pretty-printing. If not specified or negative, the output is compact. If specified, the output is pretty-printed with the given indentation level.

**Returns:**
- `str`: The JSON string representation

**Example:**

```ylang
include json;
data = {
    "name": "Alice",
    "age": 30,
    "scores": [85, 92, 78]
};

// Compact output
json_text = json.dump(data);
println(json_text);
// Output: {"name":"Alice","age":30,"scores":[85,92,78]}

// Pretty-printed output with indentation
json_text_pretty = json.dump(data, 2);
println(json_text_pretty);
// Output:
// {
//   "name": "Alice",
//   "age": 30,
//   "scores": [
//     85,
//     92,
//     78
//   ]
// }
```
