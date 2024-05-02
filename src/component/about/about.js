import React from 'react';
import GamePlay from './game/gamePlay/gamePlay.js';
import './about.css';

export default function Home() {

    return (
        <div className="homeContainer">
            <div className="homeButtonContainer">
                <GamePlay />
            </div>
        </div>
    )

}