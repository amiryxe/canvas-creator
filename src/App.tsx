import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import './assets/styles/main.scss'

export default function App() {
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
        <textarea rows={10} cols={50} name='content' />

        <button type='submit'>
          create
        </button>
      </form>

      <div ref={contentRef} className='content box1'>
        {content}
      </div>

      <button onClick={buildHandler}>Build image</button>
    </>
  )
}
