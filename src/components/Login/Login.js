import { useRef } from "react"
import classes from "./Login.module.css"

const Login = (props) => {
  const userName = useRef("")
  const password = useRef("")
  const submitHandler = (e) => {
    e.preventDefault()
    if (!userName.current.value && !password.current.value) return
    props.filledData(true)
    userName.current.value = ""
    password.current.value = ""
  }
  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="Username"
          className={classes["form-input__username"]}
          placeholder="username"
          ref={userName}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          className={classes["form-input__password"]}
          placeholder="password"
          ref={password}
        />
        <button className={classes["form-btn"]}>Login</button>
      </form>
    </>
  )
}

export default Login
