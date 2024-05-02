import React from 'react';
import Popup from 'reactjs-popup'
import GameResultsView from '../gameResults/gameResults.js';
import ScoreView from '../scoreView/scoreView.js';
import { GiFoldedPaper, GiStonePile } from "react-icons/gi";
import { BsScissors } from "react-icons/bs";
import { RiCloseLine } from 'react-icons/ri'
import 'reactjs-popup/dist/index.css';
import './gamePlay.css';


const choicesList = [
    {
        id: 'ROCK',
        imageUrl: 'https://marlaschevker.com/images/rock.png',
    },
    {
        id: 'PAPER',
        imageUrl: 'https://marlaschevker.com/images/paper.png',
    },
    {
        id: 'SCISSORS',
        imageUrl: 'https://marlaschevker.com/images/scissors.png',
    }
]

class GamePlay extends React.Component {
    state = {
        isShow: true,
        newArray: [choicesList[0], choicesList[1]],
        text: 'YOU WON',
        score: 0,
    }

    getResult = (item1, item2) => {
        if (item1.id === 'ROCK') {
            switch (item2.id) {
                case 'PAPER':
                    return 'YOU LOSE'
                case 'SCISSORS':
                    return 'YOU WON'
                default:
                    return 'IT IS DRAW'
            }
        } else if (item1.id === 'PAPER') {
            switch (item2.id) {
                case 'ROCK':
                    return 'YOU WON'
                case 'SCISSORS':
                    return 'YOU LOSE'
                default:
                    return 'IT IS DRAW'
            }
        } else if (item1.id === 'SCISSORS') {
            switch (item2.id) {
                case 'ROCK':
                    return 'YOU LOSE'
                case 'PAPER':
                    return 'YOU WIN'
                default:
                    return 'IT IS DRAW'
            }
        };
    }

    restartGame = () => this.setState({ isShow: true })

    checkResult = id => {
        const { score } = this.state
        const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
        const choice1 = choicesList.filter(eachValue => eachValue.id === id)
        const result = this.getResult(choice1[0], choice2)
        let newScore = score
        if (result === 'YOU WON') {
            newScore = score + 1
        } else if (result === 'YOU LOSE') {
            newScore = score - 1
        } else {
            newScore = score
        }
        this.setState({
            isShow: false,
            newArray: [choice1[0], choice2],
            text: result,
            score: newScore,
        })
    }

    render() {
        const { isShow, newArray, text, score } = this.state
        return (
            <div className="mainContainer">
                <ScoreView score={score} />
                <GameResultsView
                    choicesList={choicesList}
                    text={text}
                    isShow={isShow}
                    newArray={newArray}
                    checkResult={this.checkResult}
                    restartGame={this.restartGame}
                />
                <div className="rulesView">
                    <Popup
                        modal
                        trigger={
                            <button type="button" className="trigger-button">
                                RULES
                            </button>
                        }
                    >
                        {close => (
                            <div className="popUpView">
                                <button
                                    type="button"
                                    className="trigger-button-close"
                                    onClick={() => close()}>
                                    <RiCloseLine />
                                </button>
                                <p className="rulesTitle">Rules</p>
                                <p className="rules"><BsScissors /> Scissors <strong>Cut</strong> Paper <GiFoldedPaper /></p>
                                <p className="rules"><GiFoldedPaper /> Paper <strong>Covers</strong> Rock <GiStonePile /> </p>
                                <p className="rules"><GiStonePile /> Rock <strong>Crushes</strong> Scissors <BsScissors /></p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        )
    }
}

export default GamePlay;