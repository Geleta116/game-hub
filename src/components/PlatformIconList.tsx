import { FaGlobe, FaPlaystation, FaXbox } from "react-icons/fa";
import { AiFillAndroid, AiFillWindows, AiFillApple } from "react-icons/ai";
import { DiLinux } from "react-icons/di";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";
import { SiNintendo } from "react-icons/si";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: AiFillAndroid,
    pc: AiFillWindows,
    linux: DiLinux,
    web: FaGlobe,
    mac: AiFillApple,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
