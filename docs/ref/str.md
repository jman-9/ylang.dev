# str — String operations

The `str` module provides functions for string manipulation. All string functions are called on string objects using the dot operator.

## Functions

| Function | Description |
|--------|-------------|
| [`empty()`](#empty) | Returns `true` if the string is empty, `false` otherwise |
| [`size()`](#size) | Returns the length of the string |
| [`find([start, ]substr)`](#find-start-substr) | Searches for a substring. If `start` is provided, searches from that position |
| [`substr(start[, length])`](#substrstart-length) | Returns a substring. If `length` is provided, returns that many characters; otherwise returns to the end |
| [`replace(old, new)`](#replaceold-new) | Replaces all occurrences of `old` substring with `new` substring |
| [`split([delimiter])`](#split-delimiter) | Splits the string. If `delimiter` is provided, splits by that delimiter; otherwise splits by whitespace |
| [`trim()`](#trim) | Removes leading and trailing whitespace characters |
| [`ltrim()`](#ltrim) | Removes leading whitespace characters |
| [`rtrim()`](#rtrim) | Removes trailing whitespace characters |
| [`join(list)`](#joinlist) | Joins the elements of a list into a string using the string as a delimiter |
| [`starts_with(str)`](#starts_withstr) | Checks if the string starts with the specified substring |
| [`ends_with(str)`](#ends_withstr) | Checks if the string ends with the specified substring |
| [`toupper()`](#toupper) | Converts all characters in the string to uppercase |
| [`tolower()`](#tolower) | Converts all characters in the string to lowercase |

### empty()

Returns `true` if the string is empty, `false` otherwise.

**Returns:**
- `bool`: `true` if the string length is 0, otherwise `false`

**Example:**

```ylang
a = "hello world";
println(a.empty());  // false

b = "";
println(b.empty());  // true
```

### size()

Returns the length of the string.

**Returns:**
- `int`: The number of characters in the string

**Example:**

```ylang
a = "hello world";
println(a.size());  // 11

b = "ylang";
println(b.size());  // 5
```

### find([start, ]substr)

Searches for a substring in the string. If `start` is provided, searches from that position; otherwise searches from the beginning.

**Parameters:**
- `start` (`int`, optional): The position to start searching from
- `substr` (`str`): The substring to search for

**Returns:**
- `int`: The position of the first occurrence, or `-1` if not found

**Example:**

```ylang
a = "hello world";
println(a.find("world"));  // 6
println(a.find("ylang"));  // -1

a = "a b c d t";
println(a.find(3, " c d"));  // 3
```

### substr(start[, length])

Returns a substring starting from the specified position. If `length` is provided, returns that many characters; otherwise returns from `start` to the end of the string.

**Parameters:**
- `start` (`int`): The starting position
- `length` (`int`, optional): The length of the substring

**Returns:**
- `str`: The substring

**Example:**

```ylang
a = "hello world";
println(a.substr(6));  // "world"

a = "pika pika chu";
println(a.substr(5, 4));   // "pika"
println(a.substr(0, 4));   // "pika"
```

### replace(old, new)

Replaces all occurrences of `old` substring with `new` substring.

**Parameters:**
- `old` (string): The substring to be replaced
- `new` (string): The replacement substring

**Returns:**
- `string`: A new string with all occurrences replaced

**Example:**

```ylang
a = "hello world";
b = a.replace("world", "ylang");
println(b);  // "hello ylang"

c = "apple apple apple";
println(c.replace("apple", "banana"));  // "banana banana banana"
```

### split([delimiter])

Splits the string and returns a list. If `delimiter` is provided, splits by that delimiter; otherwise splits by whitespace characters (space, tab, newline, etc.).

**Parameters:**
- `delimiter` (`str`, optional): The delimiter string

**Returns:**
- `list`: A list of substrings

**Example:**

```ylang
a = "a b   c d";
result = a.split();
println(result);  // ["a", "b", "c", "d"]

a = "apple,banana,,grape";
result = a.split(",");
println(result);  // ["apple", "banana", "", "grape"]
```

### trim()

Removes leading and trailing whitespace characters from the string.

**Returns:**
- `string`: A new string with whitespace removed from both ends

**Example:**

```ylang
a = "\r \n \t \v 12345 7\t9 \r \n \t \v ";
b = a.trim();
println(b);  // "12345 7\t9"
```

### ltrim()

Removes leading whitespace characters from the string.

**Returns:**
- `string`: A new string with leading whitespace removed

**Example:**

```ylang
a = "  \t  12345 7\t9 \t\n";
b = a.ltrim();
println(b);  // "12345 7\t9 \t\n"
```

### rtrim()

Removes trailing whitespace characters from the string.

**Returns:**
- `string`: A new string with trailing whitespace removed

**Example:**

```ylang
a = " \v 12345 7\t9 \t\n\r\v ";
b = a.rtrim();
println(b);  // " \v 12345 7\t9"
```

### join(list)

Joins the elements of a list into a string using the string as a delimiter.

**Parameters:**
- `list` (list): The list of strings to join

**Returns:**
- `string`: A string with list elements joined by the delimiter

**Example:**

```ylang
delim = "::";
list = ["aa", "bb", "cc", "dd"];
result = delim.join(list);
println(result);  // "aa::bb::cc::dd"

comma = ",";
words = ["apple", "banana", "grape"];
println(comma.join(words));  // "apple,banana,grape"
```

### starts_with(str)

Checks if the string starts with the specified substring.

**Parameters:**
- `str` (string): The substring to check

**Returns:**
- `bool`: `true` if the string starts with the substring, otherwise `false`

**Example:**

```ylang
a = "hello world";
println(a.starts_with("hello"));  // true
println(a.starts_with("world"));  // false
```

### ends_with(str)

Checks if the string ends with the specified substring.

**Parameters:**
- `str` (string): The substring to check

**Returns:**
- `bool`: `true` if the string ends with the substring, otherwise `false`

**Example:**

```ylang
a = "hello world";
println(a.ends_with("world"));  // true
println(a.ends_with("hello"));  // false
```

### toupper()

Converts all characters in the string to uppercase.

**Returns:**
- `string`: A new string with all characters in uppercase

**Example:**

```ylang
a = "Hello World";
println(a.toupper());  // "HELLO WORLD"
```

### tolower()

Converts all characters in the string to lowercase.

**Returns:**
- `string`: A new string with all characters in lowercase

**Example:**

```ylang
a = "Hello World";
println(a.tolower());  // "hello world"
```
