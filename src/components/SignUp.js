import React from "react"

export default function SignUp() {
  return (
    <>
      <h1 className="header">Sign Up</h1>
      <form className="signup-form">
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
      </form>   
    </>
  )
}