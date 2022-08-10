import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  const path = window.location.pathname
  return (
    <nav className="nav">
    <div className="sitelogotext">
      <img src='/chit.png' className="site-logo"></img>
      <Link to="/" className="site-title">
        Chitter
      </Link>
    </div>
      <ul>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/signup">Sign Up</CustomLink>
      </ul>
    </nav>
  )

  function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
}