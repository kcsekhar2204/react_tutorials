import { useState } from 'react';
import Board from './Board';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [locationHistory, setLocationHistory] = useState([Array(2).fill(null)]);
    const [toggle, setToggle] = useState(false);
    const isXNext = history.length % 2 !== 0;
    const currentSquares = history[history.length - 1];

    const movesList = []
    history.map((squares, move) => {
        const des = history.length - 1 === move ? "You are at move #" : 'Go to move #'
        const description = move ? des + move + " (" + locationHistory[move] + ")": 'Go to game start';
        const className = move === history.length - 1 ? 'bold' : '';
        movesList.push(
            <li key={move}>
                <button className={className} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })

    if (toggle) {
        movesList.reverse();
    }

    const handleMoves = () => {
        setToggle(!toggle);
    }

    function jumpTo(move) {
        const history_copy = history.slice(0, move + 1);
        const locationHistory_copy = locationHistory.slice(0, move + 1);
        setHistory(history_copy);
        setLocationHistory(locationHistory_copy);
    }

    function handlePlay(nextSquares, index) {
        setHistory([...history, nextSquares]);
        setLocationHistory([...locationHistory, [Math.floor(index / 3), index%3]]);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <button className='toggle' onClick={handleMoves}>
                    Moves
                    <span className={toggle ? 'rotate' : ''}><img src='/images/arrow.svg' alt='Toggle' /></span>
                </button>
                <ol>{movesList}</ol>
            </div>
        </div>
    );
}
