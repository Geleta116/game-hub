import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import "../index.css";

interface Props {
  onSearch: (searchTxt: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"0 10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
