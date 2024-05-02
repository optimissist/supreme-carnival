import React from 'react';

export default function Specialist() {
    const operationsSpecialist = [
        "Merchandised products, hero banners, and other modules",
        "Built sell pages for individual products and programs",
        "Provided Quality Assurance assistance when needed"
    ];

    const operationsSpecialistItems = operationsSpecialist.map((operationsSpecialist) =>
        <li key={operationsSpecialist.toString()} className="detailList">{operationsSpecialist}</li>
    );

    return (
        <ul className="resumeItems">{operationsSpecialistItems}</ul>
    )
}