//logo namayesh dade nmishe
import { HStack, Image, Text, Box } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <HStack padding="10px" bg="white">
      <Image src={logo} boxSize="60px" />
      <Text fontWeight="bold">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
