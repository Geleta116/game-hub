import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={"0 10px"} justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
