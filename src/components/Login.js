import React from "react"

export default function Login() {

  return (
    <>
      <h1 className="header">Login</h1>
      <form className="login-form">
        <input type='text' placeholder="username"></input>
        <input type='text' placeholder="password"></input>
      </form>   
    </>
  )
}