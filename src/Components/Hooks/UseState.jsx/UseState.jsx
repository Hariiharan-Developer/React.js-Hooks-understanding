import React, { useState } from 'react'
import './UseState.css'
const UseState = () => {

    const [isVisible,setIsVisible] = useState(false)
    const toggle =()=>{
        setIsVisible(!isVisible)
    }

  return (

    <div className='container'>
        <div className="content">
        <h1>Use State Examples</h1>
       <button onClick={toggle}>Show Text</button>
       {isVisible &&<p>This text toggled , when you click the button that timr only shows the message</p>}
      </div>
      <br/>
      <hr/>
    </div>
  )
}

export default UseState
