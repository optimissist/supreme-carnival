import React, { useId } from "react";
import { Tooltip } from "react-tooltip";
import "./skills.css";

export default function Skills() {
    const skills = ["JavaScript", "React", "Git", "jQuery", "JSON", "HTML", "CSS", "SFCC", "SFMC", "BCC", "WCS", "Endeca",
        "Contentful", "Wordpress", "Amplience"];

    const skillsId = useId();

    const skillsList = skills.map((skills) =>
        <li key={skills.toString()} className="skills" id={skillsId + skills}>{skills}</li>
    );

    return (
        <div className="skills">
            <ul className="skillsList">{skillsList}</ul>
            <Tooltip anchorSelect="#\:r0\:JavaScript" place="bottom" content="JavaScript - 3 years" />
            <Tooltip anchorSelect="#\:r0\:React" place="bottom" content="React - 2 years" />
            <Tooltip anchorSelect="#\:r0\:Git" place="bottom" content="Git - 1 years" />
            <Tooltip anchorSelect="#\:r0\:jQuery" place="bottom" content="jQuery - 8 years" />
            <Tooltip anchorSelect="#\:r0\:JSON" place="bottom" content="JSON - 3 years" />
            <Tooltip anchorSelect="#\:r0\:HTML" place="bottom" content="HTML - 12 years" />
            <Tooltip anchorSelect="#\:r0\:CSS" place="bottom" content="CSS - 12 years" />
            <Tooltip anchorSelect="#\:r0\:SFCC" place="bottom" content="SalesForce Commerce Cloud - 1 year" />
            <Tooltip anchorSelect="#\:r0\:SFMC" place="bottom" content="SalesForce Marketing Cloud - 1 year" />
            <Tooltip anchorSelect="#\:r0\:BCC" place="bottom" content="BCC - 4 years" />
            <Tooltip anchorSelect="#\:r0\:WCS" place="bottom" content="WCS - 4 years" />
            <Tooltip anchorSelect="#\:r0\:Endeca" place="bottom" content="Endeca - 4 years" />
            <Tooltip anchorSelect="#\:r0\:Contentful" place="bottom" content="Contentful - 2 years" />
            <Tooltip anchorSelect="#\:r0\:Wordpress" place="bottom" content="Wordpress - 5 years" />
            <Tooltip anchorSelect="#\:r0\:Amplience" place="bottom" content="Amplience - 1 year" />
        </div>
    );
}