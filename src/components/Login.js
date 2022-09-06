import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import api from '../api/base'
import { styled, TextField, Button } from "@mui/material"

const CustomizedTextField = styled(TextField)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7.5px;
`;

const CustomButton = styled(Button)`
  margin: auto;
  width: 50%;
`;

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
      <div className="login-form">
          <div>
            <h1 className="header">Login</h1>
          </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <CustomizedTextField 
              label="username"
              onChange={e => setLoginUsername(e.target.value)}
            />
            <br/>
            <CustomizedTextField 
              label="password"
              onChange={e => setLoginPassword(e.target.value)}
              type="password"
            />
            <br/>
            <CustomButton 
              type="submit" 
              variant="outlined" 
              onClick={handleSubmit}>Submit</CustomButton>
        </form> 
        <div>
          {
          loginFailed &&
          <span className="error-message">login failed</span>  
          }
        </div>
      </div>
    </div>
  )
}