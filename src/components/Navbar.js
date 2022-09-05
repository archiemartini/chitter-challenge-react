import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Diversity1Icon from '@mui/icons-material/Diversity1';


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
        <li className="logout--link" >
          <a onClick={handleLogout} href="/">Logout</a>
        </li>
      </ul>  
      :
      <ul>
        <CustomLink to="/login">login</CustomLink>
        <CustomLink to="/signup">signUp</CustomLink>
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