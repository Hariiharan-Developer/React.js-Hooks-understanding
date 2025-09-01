import React, { useLayoutEffect, useState } from 'react'
import './UseLayout.css'

const UseLayout = () => {
  const [color, setColor] = useState('white')

  useLayoutEffect(() => {
    document.getElementById('bg').style.backgroundColor = color
  }, [color])

  return (
    <div className='container' id='bg'>
      <div className="content">
        <h1>6. useLayoutEffect Example</h1>
        <p>Click a button to change background color</p>
        
        <button onClick={() => setColor("tomato")}>Tomato</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("red")}>Red</button>
      </div>
    </div>
  )
}

export default UseLayout
