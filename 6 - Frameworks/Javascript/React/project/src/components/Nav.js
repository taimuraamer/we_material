import React from 'react';
import {NavLink, Router} from 'react-router-dom'

const Nav = (props) => (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">

                <NavLink to="/" className="nav-link-item"><li>Home</li></NavLink>
                <NavLink to="/about" className="nav-link-item"><li>About</li></NavLink>
                <NavLink to="/create" className="nav-link-item"><li>Create</li></NavLink>
                

            </ul>
        </nav>
    </div>
)

export default Nav;