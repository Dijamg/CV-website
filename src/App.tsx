import { useState, useEffect } from 'react'
import './index.css'
import LoadingPage from './Components/LoadingPage'
import MainPage from './Components/MainPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading page for 4 seconds to allow complete drawing animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? <LoadingPage /> : <MainPage />}
    </div>
  )
}

export default App
