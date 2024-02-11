import { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
export interface Game {
    id: number;
    name: string;
}

export interface FetchGamesResponse {
    count: number;
    results: Game[];
}
const GameGrid = () => {

    let { games, error } = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(g => <li key={g.id}>{g.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid