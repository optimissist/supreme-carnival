import React from "react";
import Pdf from "../../../public/FrontEndEngineerCertificate.pdf";
import "./education.css";

export default function Education() {
    return (
        <div className="education">

            <ul className="educationList">
                <li><span className="educationItem"> <a href={Pdf} target="blank">Front-end Engineer Path Certification</a></span> - February 2023 - Codecademy</li>
                <li><span className="educationItem"> Master of Arts</span> - 2014 - University of Southern California </li>
                <li><span className="educationItem">Bachelor of Arts</span> - 2010 - California State University Northridge</li>
            </ul>
        </div>
    );
}