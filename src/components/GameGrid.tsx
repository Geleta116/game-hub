import { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {

    let { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <>

            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={10} padding={10}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
                {games.map(g => <GameCardContainer key={g.id}><GameCard key={g.id} game={g} /> </GameCardContainer>)}
                </SimpleGrid>
        </>
            )
}

            export default GameGrid;