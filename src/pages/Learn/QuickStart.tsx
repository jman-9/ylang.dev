
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-rust";


const classExample = `class Pos {
  _x = _y = _z = 0;
  fn Pos(x, y, z) { _x = x; _y = y; _z = z; }
};

class Zoi {
    _name = "unnamed";
    _pos = Pos(0, 0, 0);
    _trait = "Observer";
    _preferences = [];

    fn Zoi(name, pos, preferences) {
        _name = name;
        _pos = pos;
        _preferences = preferences;
    }

    fn prefer(p) {
        for(i=0; i<_preferences.size(); i++)
            if(p == _preferences[i]) return true;
        return false;
    }
}

zois = [];
zois.push_back(Zoi("Henry", Pos(9.8, 1.0, 2.0), ["Car", "Guitar"]));
zois.push_back(Zoi("Walter", Pos(5.0, 2.0, 0.0), ["Sing", "Basketball"]));

for(i=0; i<zois.size(); i++) {
  if(zois[i].prefer("Basketball"))
    println("'{zois[i]._name}' like basketball.");
  else
    println("'{zois[i]._name}' doesn't like basketball.");
}`;

const classExampleResult = `'Henry' doesn't like basketball.
'Walter' like basketball.`;


function CodeBlock({ code, lang = "rust" }: {code: string; lang?: string; }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);

  let clsName = lang ? `language-${lang}` : '';
  clsName += ' rounded-lg bg-gray-50 p-4 overflow-x-auto text-base';

  return (
    <pre className={clsName}>
      <code ref={ref}>
        {code}
      </code>
    </pre>
  );
}

export default function QuickStart() {
  return <div className='text-left'>
    <h1 className='pt-8 mb-2'>Quick Start</h1>
    <p className='pt-4 text-3xl'>Welcome to the <em>ylang</em> documentation!</p>
    <hr className='my-4 mb-10 border-cyan-200 border-3'/>

    <h2 className='mb-6'>Hello, World</h2>
    <p>Create a file and write the following code.</p>
    <CodeBlock code="println('Hello, World!');" />
    <p>If the file name is 'hello.y', you can run the code by executing the following command. And you will see the following output.</p>
    <CodeBlock code="> ylang hello.y
Hello, World!" lang='' />

    <h2 className='mt-12 mb-4'>Comments</h2>
    <p><em>ylang</em> has two comment types.</p>
    <CodeBlock code={
`println(111); // single line comment
my_var = /* inline comment */ 9810;
/* multiline
comment
*/
`} />

    <h2 className='mt-12 mb-4'>Variables</h2>
    <p><em>ylang</em> has no explicit data types, so all variables are dynamically typed. They are declared by first assignment.</p>
    <CodeBlock code={
`println(my_var); // error: undefined variable

my_var = 9810; // declaration and assignment
println(my_var); // print '9810'

my_var = 2052; // assignment
println(my_var); // print '2052'
`} />

    <h2 className='mt-12 mb-4'>Primitive Types</h2>
    <p>There are a few implicit data types supported by ylang.</p>
    <CodeBlock code={
`my_var = 1089;                // int type
my_var = .2502;               // float type
my_var = "str";               // string type
my_var = 'str';               // string type
my_var = [ 1, "b", 3, "d" ];  // list type
my_var = { "a":2, "c":4 };    // dict type

      // mixed type
my_var = { "list":[ 1, { "dict":false } ], "dict": {"list":["string", 0.4781]} };
`} />
    <h2 className='mt-12 mb-4'>Strings</h2>
    <p>In <em>ylang</em>, you can assign and use strings with various ways.</p>
    <CodeBlock code={
`str1 = 'hello';
str2 = "world";

concat = str1 + str2;           // helloworld
fstr = "{str1} {str2 + str1}";  // hello worldhello
fstr += " {{ added }}";         // hello worldhello { added }

rawstr = '''{str1}{str2}''';    // {str1}{str2}

multiline = """line 1
line 2
line 3
""";

n = str1.size();       // n <= 5
m = "12345789".size(); // m <= 9
`} />

    <h2 className='mt-12 mb-4'>Operators</h2>
    <p><em>ylang</em> is a C-like programming language. So it supports most of C operators.</p>
    <table className="mt-8">
      <thead>
        <tr>
          <th className="text-left border-b mb-2">Category</th>
          <th className="text-left border-b mb-2">Operators</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pt-4">Arithmetic</td>
          <td className="pt-4">{`+ - * / %`}</td>
        </tr>
        <tr>
          <td className="pt-2">Assignment</td>
          <td className="pt-2">{`= +=	-= *= /= %= &= |= ^= >>= <<=`}</td>
        </tr>
        <tr>
          <td className="pt-2 pr-7">Increment / Decrement</td>
          <td className="pt-2">{`++ --`}</td>
        </tr>
        <tr>
          <td className="pt-2">Comparison</td>
          <td className="pt-2">{`== != < <= > >=`}</td>
        </tr>
        <tr>
          <td className="pt-2">Logical</td>
          <td className="pt-2">{`&& || !`}</td>
        </tr>
        <tr>
          <td className="pt-2">Bitwise</td>
          <td className="pt-2">{`& | ^ ~ << >>`}</td>
        </tr>
      </tbody>
    </table>
    <CodeBlock code={
`my_var = 1089 + 911;      // 2000
my_var -= 1;              // 1999
my_var++;                 // 2000
my_var = my_var > 2000;   // false
my_var = 1 << 4;          // 16
my_var = true && false;   // false
my_var = !my_var;         // true`} />

    <h2 className='mt-12 mb-4'>If-Else</h2>
    <p><em>ylang</em> supports conditional statements via If-Else. Its syntax is mostly the same as C.</p>
    <CodeBlock code={
`t = true;
f = false;

if(f) {
  println("false");
}
else if(t) {
  println("true");
}
else {
  println("unreachable");
}`} />


    <h2 className='mt-12 mb-4'>For-Loop</h2>
    <p>In <em>ylang</em>, iteration is available by for-loop. Its syntax is also the same as C. And you can control loops using break/continue statements.</p>
    <CodeBlock code={
`for(i=0; i<10; i++) {
  if(i % 2) {
    continue;
  }
  if(i == 8) break;

  print("{i} ");         // 0 2 4 6
}`} />


    <h2 className='mt-12 mb-4'>Functions</h2>
    Functions are defined by using the <b>fn</b> keyword.
    <CodeBlock code={
`fn square(x) {     // an ordinary way
    return x * x;
};

fn concat(s1, s2) return "{s1}{s2}";  // single line function definition

println(square(9));                 // 81
println(concat("hello", " ylang");  // hello ylang
`} />

    <h2 className='mt-12 mb-4'>Classes</h2>
    <p><em>ylang</em> is a C-like programming language. <em>ylang</em>, however, explicitly supports object-oriented programming, so it has 'class' statements.</p>
    <p>Classes of <em>ylang</em> does not support any access modifiers, because it is also Pythonic.</p>
    <CodeBlock code={classExample} />
    <p>Output:</p>
    <CodeBlock code={classExampleResult} lang='' />
  </div>
}
