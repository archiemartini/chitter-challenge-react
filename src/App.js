import React, {useState} from "react"
import { Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState({ user_id:"", session_key:"", username:"" })
  const [signUpSuccessful, setSignUpSuccessful] = useState(false)

  return (
    <>
     <Navbar loggedIn={loggedIn} setUserData={setUserData} userData={userData}/>
     <Routes>
        <Route path='/' element={<Home userData={userData} loggedIn={loggedIn} />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUserData={setUserData} signUpSuccessful={signUpSuccessful}/>} />
        <Route path='/signup' element={<SignUp setSignUpSuccessful={setSignUpSuccessful}/>} />
     </Routes>
    </>
  )
}