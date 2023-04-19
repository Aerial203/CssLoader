import { useState } from "react"
import "./App.css"
import Login from "./components/Login/Login"
import Successful from "./components/Successful/Successful"

function App() {
  const [isEmptyField, UpdateIsEmpty] = useState(true)
  const filledData = (isEmpty) => {
    UpdateIsEmpty(isEmpty)
  }
  return (
    <div className="App">
      <Login filledData={filledData} />

      {!isEmptyField ? <Successful /> : <span className="loader"></span>}
    </div>
  )
}

export default App
