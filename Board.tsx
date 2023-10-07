import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Sqaure from './Sqaure';

function Board(props: any) {
    function calculateWinner(squares: any[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
    }

    function handleClick(i: number) {
        if (props.squares[i] || calculateWinner(props.squares)) {
            return;
        }
        const nextSquares = props.squares.slice();
        nextSquares[i] = props.xIsNext ? "X" : "O";
        props.onPlay(nextSquares)
    }

    const winner = calculateWinner(props.squares)
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (props.xIsNext ? "X" : "O");
    }
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Sqaure value={props.squares[0]} squareClick={() => handleClick(0)} />
                <Sqaure value={props.squares[1]} squareClick={() => handleClick(1)} />
                <Sqaure value={props.squares[2]} squareClick={() => handleClick(2)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Sqaure value={props.squares[3]} squareClick={() => handleClick(3)} />
                <Sqaure value={props.squares[4]} squareClick={() => handleClick(4)} />
                <Sqaure value={props.squares[5]} squareClick={() => handleClick(5)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Sqaure value={props.squares[6]} squareClick={() => handleClick(6)} />
                <Sqaure value={props.squares[7]} squareClick={() => handleClick(7)} />
                <Sqaure value={props.squares[8]} squareClick={() => handleClick(8)} />
            </View>
            <Text>{status}</Text>
        </View>


    )
}

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares: any[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: any) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <View >
                <TouchableOpacity onPress={() => jumpTo(move)}>
                    <Text>{description}</Text>
                </TouchableOpacity>
            </View>
        );
    });
    return (
        <View>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <Text>{moves}</Text>
        </View>
    )
}

