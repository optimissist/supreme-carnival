import React, { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import Producer from './producer.js';
import Manager from './manager.js';
import Senior from './senior.js';
import Specialist from './specialist.js';
import Coordinator from './coordinator.js';
import './experience.css';

export default function Experience() {
    const [torrid, setTorrid] = useState(false);
    const [beachbody, setBeachbody] = useState(false);

    return (
        <div className="experience">
            <p className="companyName" onClick={() => setTorrid(!torrid)}><GoChevronDown className={`downChevron ${torrid && 'upChevron'}`} />
                Torrid — 2023 to Present</p>
            {
                torrid ? <span> <p className="contentProducer">Digital Content Producer • April 2023 to Present</p>
                    <Producer /> </span> : ""
            }

            <p className="companyName" onClick={() => setBeachbody(!beachbody)}><GoChevronDown className={`downChevron ${beachbody && 'upChevron'}`} />Beachbody — 2018 to 2023</p>
            {
                beachbody ? <span>
                    <p className="merchManager">Merchandising Operations Manager • April 2022 to March 2023</p>
                    <Manager />

                    <p className="seniorSpecialist">Senior CMS Specialist • July 2021 to April 2022 </p>
                    <Senior />

                    <p className="operationsSpecialist">CMS Operations Specialist • August 2019 to July 2021</p>
                    <Specialist />

                    <p className="coordinator">CMS Web Content Coordinator • December 2018 to August 2019</p>
                    <Coordinator />
                </span> : ""
            }
        </div >
    );
}