import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import api from '../api/base'

export default function Login(props) {

  const nav = useNavigate()

  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const loginData = {
    "session": {
      "handle":`${loginUsername}`, "password":`${loginPassword}`
    }
  }

  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData)

    try {
      const response = await api.post('/sessions', loginData)
      console.log(response.data)
      response.data.username = loginUsername
      props.setLoggedIn(true)
      props.setUserData(response.data)
      nav("/")
      
    } catch (err) {
      console.log(`Error: ${err.message}`)
      setLoginFailed(true)
    }
    
  }

  return (
    <div className="main-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1 className="header">Login</h1>
        </div>
        <input 
          type='text' 
          name="text"
          placeholder="username"
          required
          value={loginUsername}
          onChange={e => setLoginUsername(e.target.value)}
        />
        <input 
          type='password'
          name="password" 
          placeholder="password"
          required
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}

        />
        <input type='submit' value="Login" />
      </form> 
      <div>
        {
        loginFailed &&
        <span className="error-message">login failed</span>  
        }
      </div>
      <div>
        {
        props.signUpSuccessful &&
        <span className="success-message">sign up successful!</span>
        }
      </div>
    </div>
  )
}