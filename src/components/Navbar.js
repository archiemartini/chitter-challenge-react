import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src="/chit.png" className="nav--icon" alt="chit-icon"></img>
        <a href='/' className="nav--logo_text">Chitter</a>
      </div>
      <div >
        <a href='/login' className="nav--button">Login </a>
        <a href='/signup' className="nav--button signup-button"> SignUp</a>
      </div>
    </nav>
  )
}