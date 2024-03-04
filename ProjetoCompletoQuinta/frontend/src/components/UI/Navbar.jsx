
import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <NavLink
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        to='/notes'
      >
        Notes
      </NavLink>
      
    </nav>
  )
}

export default Navbar