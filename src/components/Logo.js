import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import  logo from  "./images/logo.png";
export default function Logo(props) {
  return (
    <Box {...props}>
      <Image borderRadius="15px" className="shadow-custom-anim" src={logo} alt="logo" width="50px" />
    </Box>
  );
}