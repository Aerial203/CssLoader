import "./App.css"
import Login from "./components/Login/Login"

function App() {
  const filledData = (isEmpty) => {
    console.log(isEmpty)
  }
  return (
    <div className="App">
      <Login filledData={filledData} />
    </div>
  )
}

export default App
