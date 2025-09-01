import React, { useReducer } from 'react'
import './UseReducer.css'
const UseReducer = () => {
  const initialCount = {count:0}
  const reduce =(state,action)=>{
    switch (action.type) {
      case 'increament':
        return {count : state.count +1}
        case 'decreament':
         return  {count : state.count -1}

      default: return state
        break;
    }

  }

  const [state,dispatch] = useReducer(reduce,initialCount)
  return (
    <div className='container'>
        <div className="content">
            <h1>Use Reducer Example</h1>
            <p>count :{state.count}</p>
            <button onClick={()=>dispatch({type:'increament'})}>Increament</button>
            <button onClick={()=>dispatch({type:'decreament'})}>Decreament</button>
            <hr/>
        </div>
    
      
    </div>
  )
}

export default UseReducer
