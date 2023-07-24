import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'

import './assets/styles/main.scss'
import RichTextEditor from './components/elements/RichTextEditor'

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
      <RichTextEditor value={value} onChange={setValue} />

      <div ref={contentRef} className='content box1' dangerouslySetInnerHTML={{ __html: value }}>

      </div>

      <button onClick={buildHandler}>Build image</button>
    </>
  )
}
