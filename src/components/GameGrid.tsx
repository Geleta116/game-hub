import { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {

    let { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>

            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={10} padding={10}>
                {isLoading && skeletons.map(s => <GameCardSkeleton />)}
                {games.map(g => <GameCard key={g.id} game={g} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;