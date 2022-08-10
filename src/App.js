import React from "react"
import { Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

export default function App() {


  return (
    <>
     <Navbar />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
     </Routes>
    </>
  )
}