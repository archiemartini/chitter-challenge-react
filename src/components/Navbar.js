import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Divider } from "@mui/material";


export default function Navbar(props) {

  const handleLogout = () => {
    //hard refreshes the app
    window.location.pathname = "/"
  }

  return (
    <nav className="nav">
      <div className="sitelogotext">
        <Link to='/'>
          {/* <Diversity1Icon className="site-logo" /> */}
          <img src='/chit.png' className="site-logo" alt="site-logo"></img>
        </Link>
        <Link to="/" className="site-title">
          architter
        </Link>
      </div>
      {props.loggedIn ? 
        <ul>
          {/* <li className="no-pointer-event">
            <div className="user--logout no-pointer-event">
            <span>Hey, {props.userData.username}</span>
            <span className="separator">|</span>
            </div>
          </li> */}
          <li className="logout--link" >
            <a onClick={handleLogout} href="/">Logout</a>
          </li>
        </ul>  
      :
        <ul>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/signup">Sign Up</CustomLink>
        </ul>
      }
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