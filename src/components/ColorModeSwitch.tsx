import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        onChange={toggleColorMode}
        colorScheme={"green"}
        isChecked={colorMode === "dark"}
      ></Switch>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
