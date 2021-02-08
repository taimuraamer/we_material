import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/" className="nav-link-item"><li>Home</li></Link>
                <Link to="/about" className="nav-link-item"><li>About</li></Link>
                <Link to="/create" className="nav-link-item"><li>Create</li></Link>
            </ul>
        </nav>
    </div>
)

export default Nav;