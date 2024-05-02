import React from 'react';

export default function Senior() {
    const seniorSpecialist = [
        "Creates unique modules and pages within the confines of the CMS templates",
        "Merchandises products, hero banners, and other modules",
        "Builds sell pages for individual products and programs, often versioned",
        "Manages site launches for new and/or updated products, programs, etc.",
        "Provides Quality Assurance assistance when needed",
        "Helps team troubleshoot CMS issues"
    ];

    const seniorSpecialistItems = seniorSpecialist.map((seniorSpecialist) =>
        <li key={seniorSpecialist.toString()} className="detailList">{seniorSpecialist}</li>
    );


    return (
        <ul className="resumeItems">{seniorSpecialistItems}</ul>
    )
}