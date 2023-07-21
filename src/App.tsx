import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import ReactQuill from 'react-quill'

import './assets/styles/main.scss'
import 'react-quill/dist/quill.snow.css'

export default function App() {
  const [value, setValue] = useState('')
  const contentRef = useRef<HTMLInputElement>(null)

  const buildHandler = () => {
    console.log(contentRef.current)

    if (contentRef.current) {
      html2canvas(contentRef.current).then(function (canvas) {
        document.body.appendChild(canvas);
      })
    }
  }

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} style={{ direction: 'ltr' }} />

      <div ref={contentRef} className='content box1'>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>

      <button onClick={buildHandler}>Build image</button>
    </>
  )
}
