import React from 'react';

export default function Coordinator() {
    const coordinator = [
        "Provided quality assurance to ensure new content posted on teambeachbody.com is consistent with team standards",
        "Assisted in the creation of new content and editing of existing content within team CMS systems",
        "Developed a style manual and other supplemental documentation"
    ]

    const coordinatorItems = coordinator.map((coordinator) =>
        <li key={coordinator.toString()} className="detailList">{coordinator}</li>
    );


    return (
        <ul className="resumeItems">{coordinatorItems}</ul>
    )
}