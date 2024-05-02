import React, { useState, useEffect } from "react";
import Experience from "./experience/experience.js";
import Education from "./education.js";
import Skills from "./skills.js";
import "./resume.css";
import { GoChevronDown } from "react-icons/go";
import Pdf from "../../../public/SchevkerResume.pdf";
import "react-tooltip/dist/react-tooltip.css";

export default function Resume() {
    const [experience, setExperience] = useState(false);
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(false);

    return (
        <div className="container pt-4">
            <p className="resumeTitle">Resume</p>
            <p className="experienceTitle" onClick={() => setExperience(!experience)}><GoChevronDown className={`downChevron ${experience && "upChevron"}`} />Experience</p>
            {experience ? <Experience /> : ""}
            <p className="skillsTitle" onClick={() => setSkills(!skills)}><GoChevronDown className={`downChevron ${skills && "upChevron"}`} />Skills</p>
            {skills ? <Skills /> : ""}
            <p className="educationTitle" onClick={() => setEducation(!education)}><GoChevronDown className={`downChevron ${education && "upChevron"}`} />Education</p>
            {education ? <Education /> : ""}
            <p className="myResume"><a href={Pdf}target="_blank" rel="noreferrer">My Resume </a></p>
        </div>
    );
}