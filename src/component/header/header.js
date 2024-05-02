import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
    return (
        <div className="row headerStyle">
            <div className="headerName col-12 col-lg-5 py-3 px-5">
                <h1> Marla Schevker</h1>
                <h4>Front End Engineer</h4>
            </div>
            <div className="headernav col-12 col-lg-7">
                <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "inactiveNavLink"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "inactiveNavLink"} to="/portfolio">Portfolio</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "inactiveNavLink"} to="/resume">Resume</NavLink>
                <NavLink className={({ isActive }) => isActive ? "activeNavLink" : "inactiveNavLink"} to="/contact">Contact Me</NavLink>
            </div>
        </div>
    );
}