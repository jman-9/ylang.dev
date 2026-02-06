# bytes — Bytes operations

The `bytes` type represents a sequence of byte values (0–255). All bytes functions are called on bytes objects using the dot operator.

## Functions

| Function | Description |
|----------|-------------|
| [`empty()`](#empty) | Returns `true` if the bytes are empty, `false` otherwise |
| [`size()`](#size) | Returns the number of bytes |
| [`resize(n)`](#resizen) | Resizes the bytes to contain `n` elements |
| [`push_back(value)`](#push_backvalue) | Appends a byte (0–255) to the end |
| [`insert(index, value)`](#insertindex-value) | Inserts a byte at the specified index |
| [`pop(index)`](#popindex) | Removes and returns the byte at the specified index |
| [`pop_front()`](#pop_front) | Removes and returns the first byte |
| [`pop_back()`](#pop_back) | Removes and returns the last byte |
| [`front()`](#front) | Returns the first byte (without removing) |
| [`back()`](#back) | Returns the last byte (without removing) |
| [`get(index)`](#getindex) | Returns the byte at the specified index |
| [`set(index, value)`](#setindex-value) | Sets the byte at the specified index (value 0–255) |
| [`copy(src [, srcStart [, copySz [, dstStart]]])`](#copysrc-srcstart-copysz-dststart) | Copies from another bytes object into this one |
| [`cmp(cmp [, selfStart [, cmpStart [, cmpSize]]])`](#cmpcmp-selfstart-cmpstart-cmpsize) | Compares with another bytes object (memcmp-style), returns int |

### empty()

Returns `true` if the bytes are empty, `false` otherwise.

**Returns:**
- `bool`: `true` if size is 0, otherwise `false`

**Example:**

```ylang
b = <10>;
println(b.empty());  // false

b.resize(0);
println(b.empty());  // true
```

### size()

Returns the number of bytes.

**Returns:**
- `int`: The number of bytes

**Example:**

```ylang
b = <5>;
println(b.size());  // 5
```

### resize(n)

Resizes the bytes to contain `n` elements. If the new size is larger, new bytes are zero-initialized; if smaller, bytes are removed from the end.

**Parameters:**
- `n` (`int`): The new size

**Example:**

```ylang
b = <3>;
b.resize(5);
println(b.size());  // 5

b.resize(2);
println(b.size());  // 2
```

### push_back(value)

Appends a single byte to the end. The value must be in the range 0–255.

**Parameters:**
- `value` (`int`): The byte value (0–255)

**Example:**

```ylang
b = <0>;
b.push_back(65);
b.push_back(66);
println(b.get(0));  // 65
println(b.get(1));  // 66
```

### insert(index, value)

Inserts a byte at the specified index. Elements at and after the index are shifted right. The value must be 0–255.

**Parameters:**
- `index` (`int`): The index at which to insert
- `value` (`int`): The byte value (0–255)

**Example:**

```ylang
b = <3>;
b.insert(1, 99);
println(b.size());  // 4
```

### pop(index)

Removes and returns the byte at the specified index.

**Parameters:**
- `index` (`int`): The index of the byte to remove

**Returns:**
- `int`: The byte that was removed (0–255)

**Example:**

```ylang
b = <3>;
v = b.pop(1);
println(v);
println(b.size());  // 2
```

### pop_front()

Removes and returns the first byte. Throws if empty.

**Returns:**
- `int`: The first byte (0–255)

**Example:**

```ylang
b = <3>;
v = b.pop_front();
println(v);
println(b.size());  // 2
```

### pop_back()

Removes and returns the last byte. Throws if empty.

**Returns:**
- `int`: The last byte (0–255)

**Example:**

```ylang
b = <3>;
v = b.pop_back();
println(v);
println(b.size());  // 2
```

### front()

Returns the first byte without removing it. Throws if empty.

**Returns:**
- `int`: The first byte (0–255)

**Example:**

```ylang
b = <3>;
println(b.front());
```

### back()

Returns the last byte without removing it. Throws if empty.

**Returns:**
- `int`: The last byte (0–255)

**Example:**

```ylang
b = <3>;
println(b.back());
```

### get(index)

Returns the byte at the specified index.

**Parameters:**
- `index` (`int`): The index

**Returns:**
- `int`: The byte at that index (0–255)

**Example:**

```ylang
b = <5>;
b.set(0, 72);
println(b.get(0));  // 72
```

### set(index, value)

Sets the byte at the specified index. The value must be 0–255.

**Parameters:**
- `index` (`int`): The index to set
- `value` (`int`): The byte value (0–255)

**Example:**

```ylang
b = <5>;
b.set(0, 65);
b.set(1, 66);
```

### copy(src [, srcStart [, copySz [, dstStart]]])

Copies from another bytes object into this one. If the destination is too small, it is resized. All indices and sizes are in bytes.

**Parameters:**
- `src` (`bytes`): The source bytes to copy from
- `srcStart` (`int`, optional): Start index in `src`. Defaults to 0.
- `copySz` (`int`, optional): Number of bytes to copy. Defaults to from `srcStart` to end of `src`.
- `dstStart` (`int`, optional): Start index in this bytes. Defaults to 0.

**Example:**

```ylang
src = <10>;
dst = <0>;
dst.resize(5);
dst.copy(src);           // copies 10 bytes from src[0] into dst (dst resized to 10)
dst.copy(src, 2, 3);     // copies 3 bytes from src[2] into dst[0]
dst.copy(src, 1, 2, 3);  // copies 2 bytes from src[1] into dst[3]
```

### cmp(cmp [, selfStart [, cmpStart [, cmpSize]]])

Compares this bytes with another (memcmp-style). Returns an integer: negative if this is less, zero if equal, positive if this is greater. Comparison is limited by the optional range parameters.

**Parameters:**
- `cmp` (`bytes`): The bytes to compare with
- `selfStart` (`int`, optional): Start index in this bytes. Defaults to 0.
- `cmpStart` (`int`, optional): Start index in `cmp`. Defaults to 0.
- `cmpSize` (`int`, optional): Maximum number of bytes to compare. Defaults to the minimum of the remaining lengths.

**Returns:**
- `int`: &lt; 0, 0, or &gt; 0

**Example:**

```ylang
a = <3>;
b = <3>;
a[0] = 1; a[1] = 2; a[2] = 3;
b[0] = 1; b[1] = 2; b[2] = 3;
println(a.cmp(b));  // 0

b[2] = 4;
println(a.cmp(b));  // negative
```
