# list — List operations

The `list` module provides functions for list manipulation. All list functions are called on list objects using the dot operator.

## Functions

| Function | Description |
|--------|-------------|
| [`empty()`](#empty) | Returns `true` if the list is empty, `false` otherwise |
| [`size()`](#size) | Returns the number of elements in the list |
| [`resize(n)`](#resizen) | Resizes the list to contain `n` elements |
| [`push_back(value)`](#push_backvalue) | Adds an element to the end of the list |
| [`insert(index, value)`](#insertindex-value) | Inserts an element at the specified index |
| [`pop(index)`](#popindex) | Removes and returns the element at the specified index |
| [`pop_front()`](#pop_front) | Removes and returns the first element of the list |
| [`pop_back()`](#pop_back) | Removes and returns the last element of the list |
| [`front()`](#front) | Returns the first element of the list |
| [`back()`](#back) | Returns the last element of the list |

### empty()

Returns `true` if the list is empty, `false` otherwise.

**Returns:**
- `bool`: `true` if the list size is 0, otherwise `false`

**Example:**

```ylang
a = [1, 2, 3];
println(a.empty());  // false

b = [];
println(b.empty());  // true
```

### size()

Returns the number of elements in the list.

**Returns:**
- `int`: The number of elements in the list

**Example:**

```ylang
a = [1, 2, 3];
println(a.size());  // 3
```

### resize(n)

Resizes the list to contain `n` elements. If the new size is larger than the current size, new elements are default-initialized. If the new size is smaller, elements are removed from the end.

**Parameters:**
- `n` (`int`): The new size of the list

**Example:**

```ylang
a = [1, 2, 3];
a.resize(5);
println(a);  // [1, 2, 3, 0, 0]

a.resize(2);
println(a);  // [1, 2]
```

### push_back(value)

Adds an element to the end of the list.

**Parameters:**
- `value`: The value to add to the list

**Example:**

```ylang
a = [1, 2, 3];
a.push_back(4);
println(a);  // [1, 2, 3, 4]

a.push_back("hello");
println(a);  // [1, 2, 3, 4, "hello"]
```

### insert(index, value)

Inserts an element at the specified index. Elements at and after the index are shifted to the right.

**Parameters:**
- `index` (`int`): The index at which to insert the element
- `value`: The value to insert

**Example:**

```ylang
a = [1, 2, 3];
a.insert(1, 99);
println(a);  // [1, 99, 2, 3]
```

### pop(index)

Removes and returns the element at the specified index.

**Parameters:**
- `index` (`int`): The index of the element to remove

**Returns:**
- The element that was removed

**Example:**

```ylang
a = [1, 2, 3, 4];
value = a.pop(2);
println(value);  // 3
println(a);      // [1, 2, 4]
```

### pop_front()

Removes and returns the first element of the list.

**Returns:**
- The first element of the list

**Example:**

```ylang
a = [1, 2, 3];
value = a.pop_front();
println(value);  // 1
println(a);      // [2, 3]
```

### pop_back()

Removes and returns the last element of the list.

**Returns:**
- The last element of the list

**Example:**

```ylang
a = [1, 2, 3];
value = a.pop_back();
println(value);  // 3
println(a);      // [1, 2]
```

### front()

Returns the first element of the list without removing it.

**Returns:**
- The first element of the list

**Example:**

```ylang
a = [1, 2, 3];
println(a.front());  // 1
println(a);          // [1, 2, 3]
```

### back()

Returns the last element of the list without removing it.

**Returns:**
- The last element of the list

**Example:**

```ylang
a = [1, 2, 3];
println(a.back());  // 3
println(a);         // [1, 2, 3]
```
