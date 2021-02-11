import React from 'react';
import {Link, Router} from 'react-router-dom'

const Header = (props) => (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
            <Router>
                <Link to="/" className="nav-link-item"><li>Home</li></Link>
                <Link to="/about" className="nav-link-item"><li>About</li></Link>
                <Link to="/create" className="nav-link-item"><li>Create</li></Link>
            </Router>
            </ul>
        </nav>
    </div>
)

export default Header;