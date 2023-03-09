import React from "react";
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <header>
        <h1>Navbar</h1>
      </header>
      <ul className="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </ul>
    </div>
  )
}