import Square from './Square';
import { calculateWinner } from '../../utils/helper'

export default function Board({ isXNext, squares, onPlay }) {
    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)[0]) {
            return
        }
        const nextSquares = squares.slice()
        if (isXNext)
            nextSquares[i] = 'X'
        else
            nextSquares[i] = 'O'
        onPlay(nextSquares, i)
    }

    const [winner, matchingRow] = calculateWinner(squares);
    let status;
    if (winner) {
        if (winner === 'Draw') {
            status = 'Draw';
        } else {
            status = 'Winner: ' + winner;
        }
    } else {
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }

    const renderBoard = () => {
        const board = [];

        for (let i = 0; i < 3; i++) {
            const row = [];

            for (let j = 0; j < 3; j++) {
                const index = i * 3 + j;
                row.push(
                    <Square
                        key={index}
                        value={squares[index]}
                        classes={matchingRow && matchingRow.includes(index) ? 'highlight' : ''}
                        onSquareClick={() => handleClick(index)}
                    />
                );
            }

            board.push(
                <div key={i} className="board-row">
                    {row}
                </div>
            );
        }

        return board;
    };


    return <>
        <div className="status">{status}</div>
        {renderBoard()}
    </>
}