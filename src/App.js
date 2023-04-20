import { useEffect, useState } from "react"
import "./App.css"
import Login from "./components/Login/Login"
import Successful from "./components/Successful/Successful"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  const filledData = (isEmpty) => {
    setLoading(true)
    setIsAuthenticated(isEmpty)
  }

  if (loading) {
    return <span className="loader"></span>
  } else if (!isAuthenticated) {
    return <Login filledData={filledData} />
  } else {
    return <>{loading ? <span className="loader"></span> : <Successful />}</>
  }
}

export default App
