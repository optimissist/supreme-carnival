import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <IconContext.Provider value={{ color: "black", className: "footerIcon", size: "2.5rem" }}>
                <div className="foot">
                    <a href="https://github.com/optimissist" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/marlaschevker/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
            </IconContext.Provider>
        </footer>
    );
}