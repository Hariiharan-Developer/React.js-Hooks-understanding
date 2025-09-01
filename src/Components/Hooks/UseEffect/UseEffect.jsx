import React, { useEffect, useState } from 'react'
import './UseEffect.css'

const UseEffect = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  function getApi() {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getApi()
  }, [])

  if (loading) return <div>...Loading</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='container'>
      <div className="content">
        <h1>5.useEffect Example (API Fetch)</h1>

        {data && (
          <ul>
            {data.slice(0, 5).map((post) => (
              <li key={post.id} style={{listStyle:'none'}}>
                <strong>{post.title}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default UseEffect
