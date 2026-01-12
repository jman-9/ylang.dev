# json — JSON encoding and decoding

The `json` module provides functions for parsing and serializing JSON data.

## Functions

| Function | Description |
|----------|-------------|
| [`parse(text)`](#parsetext) | Parses a JSON string and returns a ylang object (dict or list) |
| [`dump(obj)`](#dumpobj) | Converts a ylang object (dict or list) to a JSON string |

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

### dump(obj)

Converts a ylang object (dictionary or list) to a JSON string.

**Parameters:**
- `obj` (`dict` or `list`): The object to serialize

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
json_text = json.dump(data);
println(json_text);
// Output: {"name":"Alice","age":30,"scores":[85,92,78]}
```
