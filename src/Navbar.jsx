import React from 'react'
import './styles/Navbar.scss'
import logo from "./images/logo.svg"

export default function Navbar(props) {
    

    return (
        <nav>
            <img src={logo} alt="logo"  />
            <ul>
                <li>Features</li>
                <li>Teams</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}
