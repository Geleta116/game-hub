import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image-placeholder.webp";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={game.background_image? getCroppedImageUrl(game.background_image) : noImage} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((gam) => gam.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card> 
  );
};

export default GameCard;
