import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    axios.get('/api/greeting?name=Next.js')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Error loading greeting'))
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}