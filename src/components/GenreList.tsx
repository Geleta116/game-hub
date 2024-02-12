import React from 'react'
import useGenres from '../hooks/useGenres';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres'
import { Button, HStack, Image, Link, LinkBox, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />
    return (

        <List >
            {data.map(genre => (
                <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image boxSize={"32px"}
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}></Image>
                        <Button overflow={'wrap'} fontSize='lg' variant="link" onClick={() => { onSelectGenre(genre)}}>{genre.name} </Button>
                    </HStack>
                </ListItem>))}
        </List>
    )
}

export default GenreList;