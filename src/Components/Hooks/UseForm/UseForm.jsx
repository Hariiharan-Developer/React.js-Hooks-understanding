import React from 'react'
import './useForm.css'
import { useFormState } from 'react-dom'

// Submit button component
function SubmitButton({ pending }) {
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Form submitting..." : "Submit"}
    </button>
  )
}

const UseForm = () => {
  // Form action function
  async function FormSubmit(prevState, formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // simulate delay
    console.log('Form submitted:', formData.get('name'), formData.get('password'))
    return "✅ Form Submitted Successfully"
  }

  // useFormState hook
  const [state, formAction, pending] = useFormState(FormSubmit, "")

  return (
    <div className='container'>
      <div className="content">
        <h1>4.useFormState Example</h1>

        <form action={formAction}>
          <input type='text' placeholder='Enter name' name='name' required />
          <input type='password' placeholder='Enter password' name='password' required />
          <SubmitButton pending={pending} />
        </form>

        {/* Show response */}
        {state && <p>{state}</p>}
      </div>
    </div>
  )
}

export default UseForm
