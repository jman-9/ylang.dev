# str — String operations

The `str` module provides methods for string manipulation. All string methods are called on string objects using the dot operator.

## Methods

| Method | Description |
|--------|-------------|
| [`empty()`](#empty) | Returns `true` if the string is empty, `false` otherwise |
| [`size()`](#size) | Returns the length of the string |
| [`find(substr)`](#findsubstr) | Searches for the first occurrence of a substring |
| [`find(start, substr)`](#findstart-substr) | Searches for a substring starting from a specified position |
| [`substr(start)`](#substrstart) | Returns a substring starting from the specified position to the end |
| [`substr(start, length)`](#substrstart-length) | Returns a substring of specified length starting from the specified position |
| [`replace(old, new)`](#replaceold-new) | Replaces all occurrences of `old` substring with `new` substring |
| [`split()`](#split) | Splits the string by whitespace characters and returns a list |
| [`split(delimiter)`](#splitdelimiter) | Splits the string by the specified delimiter and returns a list |
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

### find(substr)

Searches for the first occurrence of a substring in the string.

**Parameters:**
- `substr` (string): The substring to search for

**Returns:**
- `int`: The position of the first occurrence, or `-1` if not found

**Example:**

```ylang
a = "hello world";
println(a.find("world"));  // 6
println(a.find("ylang"));  // -1
```

### find(start, substr)

Searches for a substring starting from a specified position.

**Parameters:**
- `start` (int): The position to start searching from
- `substr` (string): The substring to search for

**Returns:**
- `int`: The position of the first occurrence, or `-1` if not found

**Example:**

```ylang
a = "a b c d t";
println(a.find(3, " c d"));  // 3
```

### substr(start)

Returns a substring starting from the specified position to the end of the string.

**Parameters:**
- `start` (int): The starting position

**Returns:**
- `string`: The substring from `start` to the end

**Example:**

```ylang
a = "hello world";
println(a.substr(6));  // "world"
```

### substr(start, length)

Returns a substring of specified length starting from the specified position.

**Parameters:**
- `start` (int): The starting position
- `length` (int): The length of the substring

**Returns:**
- `string`: The substring

**Example:**

```ylang
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

### split()

Splits the string by whitespace characters (space, tab, newline, etc.) and returns a list of substrings.

**Returns:**
- `list`: A list of strings split by whitespace

**Example:**

```ylang
a = "a b   c d";
result = a.split();
println(result);  // ["a", "b", "c", "d"]
```

### split(delimiter)

Splits the string by the specified delimiter and returns a list of substrings.

**Parameters:**
- `delimiter` (string): The delimiter string

**Returns:**
- `list`: A list of strings split by the delimiter

**Example:**

```ylang
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
