import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import ReactQuill from 'react-quill'

import './assets/styles/main.scss'
import 'react-quill/dist/quill.snow.css'

export default function App() {
  const [value, setValue] = useState('')
  const [content, setContent] = useState('')
  const contentRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: any) => {
    e.preventDefault()

    setContent(e.target.content.value)
  }

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
      <form onSubmit={submitHandler}>
        {/* <textarea rows={10} cols={50} name='content' /> */}

        <ReactQuill theme="snow" value={value} onChange={setValue} style={{ direction: 'ltr' }} />

        <button type='submit'>
          create
        </button>
      </form>

      <div ref={contentRef} className='content box1'>
        {/* {value} */}
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>

      <button onClick={buildHandler}>Build image</button>
    </>
  )
}
