import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assest/btc.png";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Link to={"/"}>
        <Image
          borderRadius="full"
          boxSize="50px"
          src={img}
          alt="Dan Abramov"
          objectFit={"contain"}
        />
      </Link>

      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginLeft={"20"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginLeft={"20"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
