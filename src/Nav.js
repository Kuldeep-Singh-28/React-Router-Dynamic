import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const linkStyle = {
        color: 'white'
    };
    return (
        <div>
            <nav>
                <Link style={linkStyle} to="/">
                    <h3>Logo</h3>
                </Link>
                <ul className="nav-links">
                <Link style={linkStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={linkStyle} to="/shop">
                    <li>Shop</li>
                </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
