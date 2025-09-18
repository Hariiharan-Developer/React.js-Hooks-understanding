import React, { useRef } from 'react'
import './UseRef.css'
const UseRef = () => {

    const focus = useRef()
    function focusElement() {
        focus.current.focus()
    }
  return (
    <div className='container'>
        <div className="content">
            <h1>8.useRef Example</h1>
            <p>When you click the buttton the input element also Focused</p>
            <form action="">
                <input ref={focus} type="text" placeholder='Focus' />
                <button onClick={focusElement}>Click</button>
            </form>
        </div>
      
    </div>
  )
}

export default UseRef
