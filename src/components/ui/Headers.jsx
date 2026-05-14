import React from 'react'
import { NavLink } from 'react-router-dom'

function Headers() {
  return (
    <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <NavLink to="/">
                        <h1>WorldAtlas</h1>
                    </NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                            <a>Home</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                            <a>About</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/country">
                            <a>Country</a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                           <a> Contact</a>
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Headers