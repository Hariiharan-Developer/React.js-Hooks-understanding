import React, { useActionState } from 'react'
import './UseAction.css'

const UseAction = () => {
  async function submitForm(prevState, formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // wait 2s

    const name = formData.get('name')
    const password = formData.get('password')

    if (name === 'hari' && password === '123435') {
      return '✅ Login Success'
    }
    return '❌ Invalid Credentials'
  }

  const [state, action, pending] = useActionState(submitForm, '')

  return (
    <div className='container'>
      <div className="content">
        <h1>useActionState Example</h1>

        <form action={action}>
          <input type='text' placeholder='Enter name' name='name' required />
          <input type='password' placeholder='Enter password' name='password' required />
          <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </form>

        {state && <p>{state}</p>}
      </div>
    </div>
  )
}

export default UseAction
