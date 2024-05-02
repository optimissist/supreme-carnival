import React from 'react';
import './gameResults.css';

export default function GameResultsView(props) {
    const { choicesList, isShow, checkResult, newArray, text, restartGame } = props
    const showGame = () => (
        <div className="gameViewContainer">
            {isShow && (
                <>
                    <button
                        className="gameButton"
                        type="button"
                        data-testid="rockButton"
                        onClick={() => checkResult(choicesList[0].id)}
                    >
                        <img
                            className="gameImg"
                            src={choicesList[0].imageUrl}
                            alt={choicesList[0].id}
                            key={choicesList[0].id}
                        />
                    </button>
                    <button
                        className="gameButton"
                        type="button"
                        data-testid="paperButton"
                        onClick={() => checkResult(choicesList[1].id)}
                    >
                        <img
                            className="gameImg"
                            src={choicesList[1].imageUrl}
                            alt={choicesList[1].id}
                            key={choicesList[1].id}
                        />
                    </button>
                    <button
                        className="gameButton"
                        type="button"
                        data-testid="scissorsButton"
                        onClick={() => checkResult(choicesList[2].id)}
                    >
                        <img
                            className="gameImg"
                            src={choicesList[2].imageUrl}
                            alt={choicesList[2].id}
                            key={choicesList[2].id}
                        />
                    </button>
                </>
            )}
            {!isShow && (
                <>
                    <div className="resultImageContainer">
                        <p className="resultName">YOU</p>
                        <img
                            className="gameImg"
                            src={newArray[0].imageUrl}
                            alt="your choice" />
                    </div>
                    <div className="resultImageContainer">
                        <p className="resultName">OPPONENT</p>
                        <img
                            className="gameImg"
                            src={newArray[1].imageUrl} alt="opponent choice" />
                    </div>
                    <div className="resultImageContainer">
                        <p className="resultText">{text}</p>
                        <button
                            className="result-button"
                            type="button"
                            onClick={restartGame}
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                </>
            )}
        </div>
    )
    return showGame()
}
