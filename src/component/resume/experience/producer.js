import React from 'react';

export default function Producer() {

    const producer = [
        "Update the Torrid mobile app and desktop and mobile site using HTML, CSS, JavaScript and SalesForce Commerce Cloud",
        "Build custom landing pages using HTML, CSS, JavaScript and SalesForce Commerce Cloud",
        "Provide Quality Assurance assistance for the team as needed"
    ];

    const contentProducerItems = producer.map((producer) =>
        <li key={producer.toString()} className="detailList">{producer}</li>
    );

    return (
        <ul className="resumeItems">{contentProducerItems}</ul>
    )
}