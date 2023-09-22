'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'
import Spinner from './Spinner'

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()
  
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='mb-2'>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Ask a question..."
          className="border border-black/20 px-2 py-2 text-lg rounded-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 ml-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
      {loading && <Spinner/>}
      {response && <p className='my-4 text-xl'>{response}</p>}
    </div>
  )
}

export default Question
