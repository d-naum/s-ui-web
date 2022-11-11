import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import Profile from "../assets/profile.png";
import NavIon from "../assets/navicon.png";
import Logo from "../assets/logo.png";
import React from "react";
import {Link} from "react-router-dom"

const AppBar = () => {
  return (
    <div style={{
        width:"100%",
        backgroundColor: "rgba(183,91,131,0.3)",
    }}>
      {/* <StatusBar bg="#ffff" barStyle="light-content" w="full" /> */}
      {/* <Box safeAreaTop bg="violet.600" /> */}
      <HStack
      shadow="5"
        bg=""
       
        py="3"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        mx="auto"
      >
        <HStack space="6" alignItems="center">
        <img src={Logo} alt="logo" />
     <Link to="/">
     <Text color="white" fontSize="30" fontWeight="bold">
            SIVA
          </Text>
     </Link>
        </HStack>
        <HStack space="4"  alignItems="center" >
          <Link to="/profile">
          <img src={Profile} alt="profile" />
          </Link>

          <Text color="white" fontSize="20" fontWeight="bold">
            John Rees
          </Text>
          <img src={NavIon} alt="profile" />
        </HStack>
      </HStack>
    </div>
  );
};

export default AppBar;
