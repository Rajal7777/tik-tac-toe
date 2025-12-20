import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// console.log(initialGameBoard[1][1]);
export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            //here will copy prevGameBoard and update the specific square
            const updatedGameBoard = prevGameBoard.map(row => [...row]);
            updatedGameBoard[rowIndex][colIndex] = "X"; //example symbol
            return updatedGameBoard;
        }
        );
    }

    return (
        <ol id="game-board">
            
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}