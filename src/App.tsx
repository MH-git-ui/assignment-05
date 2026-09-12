import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { Technology } from './types/technology'
import Navbar from './components/Navbar'


function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
}

  

export default App
