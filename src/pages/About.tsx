
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-rust";


const quickExample = `class Player {
    _name = "";
    _hp = 100;

    fn Player(name, hp) {
        _name = name;
		_hp = hp;
    }
    fn damage(amount) { _hp -= amount; }
    fn status() { println("{_name}: {_hp} HP"); }
}

println("=== quick example ===");
include json;

fn main() {
    data = { "name": "Alice", "hp": 100 };
    json_text = json.dump(data);
	println("dumped JSON text: " + json_text);

    parsed = json.parse(json_text);
    println("parsed JSON object: {parsed}");
	println();

	println("--- class behavior ---");
	damage = 25;
	p = Player(parsed['name'], parsed['hp']);
	p.status();
	p.damage(damage);
	println('{p._name} takes {damage} damage.');
	p.status();
}`;

const quickExampleResult = `=== quick example ===
dumped JSON text: {"hp":100,"name":"Alice"}
parsed JSON object: {'hp': 100, 'name': 'Alice'}

--- class behavior ---
Alice: 100 HP
Alice takes 25 damage.
Alice: 75 HP`;


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

export default function About() {
  return <div className='text-left'>
    <p className='pt-6 text-3xl'><b>y</b>et another programming <b>lang</b>uage — retro, C-like, and Pythonic</p>
    <hr className='my-4 border-cyan-200 border-3'/>
    <h2 className='pt-8 mb-6'>Overview</h2>
    <div>
    <p><em>ylang</em> is a lightweight, C-like language designed with a simple and retro style — combining C’s syntax with Python-like dynamic semantics.</p>
    <br/>
    <p>And beyond these, ylang also has its own style.</p>
    </div>
    <h2 className='pt-12 mb-6'>Language Characteristics</h2>
    <div>
      <h3 className='mb-2'>C-like</h3>
      <ul className='list-disc list-inside pl-4'>
        <li>C-style syntax</li>
        <li>main function as the entry point</li>
        <li>Semicolon(;) required for statement termination</li>
        <li>Control statements: if/for/break/continue/return</li>
        <li>Same operators as C (arithmetic, logical, bitwise, augmented assignments)</li>
        <li>Increment and decrement operators (++, --)</li>
        <li>Ternary operator ( ? : )</li>
      </ul>
      <h3 className='pt-10 mb-2'>Pythonic</h3>
      <ul className='list-disc list-inside pl-4'>
        <li>Supports both top-level statements and main() entry function</li>
        <li>Dynamic typing (number, string, collection, object)</li>
        <li>Built-in collections: list, dictionary</li>
        <li>f-string style interpolation — "value = {'{'}value{'}'} (but no prefix!)</li>
        <li>Primitive modules: string, list, dictionary</li>
        <li>Useful built-in modules</li>
      </ul>
      <h3 className='pt-10 mb-2'>My own style</h3>
      <ul className='list-disc list-inside pl-4'>
        <li>Supports lightweight class system</li>
        <ul className="list-disc list-inside pl-4">
          <li>Classes with fields and member functions</li>
          <li>No access modifiers (Python-style)</li>
          <li>Constructor function defined with the class name (C++ style)</li>
          <li>this or self keyword not required inside member functions</li>
        </ul>
        <li>Module include with automatic namespace extraction</li>
      </ul>
    </div>
    <h2 className='pt-12 mb-6'>Quick Example</h2>
    <CodeBlock code={quickExample} />
    <h3 className='pt-8 mb-2'>Result</h3>
    <CodeBlock code={quickExampleResult} lang='' />
  </div>
}
