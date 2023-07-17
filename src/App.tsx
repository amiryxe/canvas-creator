import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import './assets/styles/main.scss'

export default function App() {
  const [content, setContent] = useState('')
  const contentRef = useRef<HTMLElement>()

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
        <input name='content' />

        <button type='submit'>
          create
        </button>
      </form>

      <div ref={contentRef} className='content'>
        {content}
      </div>

      <button onClick={buildHandler}>Build image</button>
    </>
  )
}
