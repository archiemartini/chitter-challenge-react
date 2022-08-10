import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import api from '../api/base'

export default function SignUp(props) {

  const nav = useNavigate()

  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const signUpData = {
    "user": {
      "handle":`${signUpUsername}`, "password":`${signUpPassword}`
    }
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users', signUpData)
      console.log(response.data)
      props.setSignUpSuccessful(true)
      nav("/login")
      
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
    
  }

  return (
    <>
      <h1 className="header">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input 
          type='text' 
          name="text"
          placeholder="username"
          required
          value={signUpUsername}
          onChange={e => setSignUpUsername(e.target.value)}
        />
        <input 
          type='password'
          name="password" 
          placeholder="password"
          required
          value={signUpPassword}
          onChange={e => setSignUpPassword(e.target.value)}

        />
        <input type='submit' value="Sign Up" />
      </form> 
    </>
  )
}