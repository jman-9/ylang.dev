import ReactMarkdown from "react-markdown";
import hello from "/docs/ref/hello.md?raw";

export default function Reference() {
  return <div className='text-left'>
    <ReactMarkdown>{hello}</ReactMarkdown>
  </div>
}
