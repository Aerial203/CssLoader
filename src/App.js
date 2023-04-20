import { useEffect, useState } from "react"
import "./App.css"
import Login from "./components/Login/Login"
import Successful from "./components/Successful/Successful"

function App() {
  const [isEmptyField, UpdateIsEmpty] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const filledData = (isEmpty) => {
    UpdateIsEmpty(isEmpty)
  }
  return (
    <div className="App">
      {loading ? (
        <span className="loader"></span>
      ) : (
        <Login filledData={filledData} />
      )}
      {/* <Login filledData={filledData} />

      {!isEmptyField ? <Successful /> : <span className="loader"></span>} */}
    </div>
  )
}

export default App
