import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [top, setTop] = useState(0)
    const changeNavbar = (e) => {
        setTop(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNavbar)
        return () => {
            window.removeEventListener("scroll", changeNavbar)
        }
    }, [])


    return (
        <nav className={top > 10 ? "navbar navbar-bg" : "navbar"}>
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/">Gallery</NavLink></li>
                <li className="nav-item"><NavLink to="/">About</NavLink></li>
                <li className="nav-item"><NavLink to="/">Contacts</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;