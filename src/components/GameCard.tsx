import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game, FetchGamesResponse } from "../hooks/useGames"
interface props{
    game :Game;
}
const GameCard = ({game}: props) => {
  return (
    
    <Card borderRadius={10} overflow={'hidden'}> 
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={'xx-large'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard