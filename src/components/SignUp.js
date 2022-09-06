import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import api from '../api/base'
import { styled, TextField, Button } from "@mui/material";

const CustomizedTextField = styled(TextField)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7.5px;
`;

const CustomButton = styled(Button)`
  margin: auto;
  width: 50%;
`;

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
    <div className="main-container">
    <div className="signup-form">
      <div>
        <h1 className="header">Sign Up</h1>
      </div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <CustomizedTextField 
        onChange={e => setSignUpUsername(e.target.value)}
        label="username"
        />
        <br/>
        <CustomizedTextField 
        onChange={e => setSignUpUsername(e.target.value)}
        label="password"
        type="password"
        />
        <br/>
          <CustomButton 
            type="submit" 
            variant="outlined" 
            onClick={handleSubmit}>Submit</CustomButton>
        </form> 
    </div>
    </div>
  )
}