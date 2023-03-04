import { useRef, useState, useEffect } from 'react'

export default function DebouncePage() {
  const [text, setText] = useState('')  

  const searchData = () => {
    if (!text) return
    
    console.log('... searching data ...')
    console.log(text)
  }

  useEffect(() => {
    searchData()
  }, [text]) 
  
  return (
    <div>
      <h4>Debounce:</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}