import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
    <div className="sitelogotext">
      <img src='/chit.png' className="site-logo"></img>
      <a href="/" className="site-title">
        Chitter
      </a>
    </div>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}