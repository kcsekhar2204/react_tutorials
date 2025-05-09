import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // const [isXNext, setIsXNext] = useState(true)
    const isXNext = history.length % 2 !== 0;
    const currentSquares = history[history.length - 1];

    const describeMoves = history.map((squares, move) => {
        const description = move ? 'Go to move #' + move : 'Go to game start';
        const className = move === history.length - 1 ? 'bold' : '';
        return (
            <li key={move}>
                <button className={className} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })

    function jumpTo(move) {
        const history_copy = history.slice(0, move + 1);
        setHistory(history_copy);
        // setIsXNext(move % 2 === 0);
    }

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        // setIsXNext(!isXNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{describeMoves}</ol>
            </div>
        </div>
    );
}
