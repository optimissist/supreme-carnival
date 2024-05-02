import React from 'react';
import './scoreView.css'

export default function ScoreView(props) {
    const { score } = props
    return (
        <div className="scoreContainer">
            <div className="scoreNameContainer">
                <p className="scoreName">
                    Rock <span className="colorBreaker">|</span> Paper <span className="colorBreaker">|</span> Scissors
                </p>
            </div>
            <div className="scoreBoard">
                <p className="scoreHeading">Score</p>
                <p className="scoreResult">{score}</p>
            </div>
        </div>
    )
}
