import { Box, Card, Skeleton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box overflow={"hidden"} borderRadius={"10px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
