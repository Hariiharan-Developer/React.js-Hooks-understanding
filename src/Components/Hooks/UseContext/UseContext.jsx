import React, { createContext, useContext, useState } from 'react'
import './UseContext.css'

// Create Context
const UserContext = createContext(null)

const UseContext = () => {
  const [user, setUser] = useState({ name: 'Hari', email: 'hari@sample.com' })

  return (
<UserContext.Provider value={{ user, setUser }}>
      <div className='container'>
        <div className="content">
          <h1>7. useContext Example</h1>
          <Dashboard />
        </div>
      </div>
    </UserContext.Provider>
  )
}

// Dashboard component
function Dashboard() {
  const{ user,setUser}= useContext(UserContext)
  return (
    <div>
      <h3>Welcome to simple Context Example</h3>
      <h3>Hi {user.name}</h3>
      <Profile />
      <button onClick={()=>setUser({name:'haran',email:'haran@sample.com'})}>Change User</button>
    </div>
  )
}

// Profile component
function Profile() {
  const{ user,setUser}= useContext(UserContext)
  return (
    <div>
      <h4>Profile</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UseContext
