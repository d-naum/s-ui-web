import { Box, Button, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Vector from "../assets/01.png";
import Img from "../assets/bgImg.png";
import Coins from "../assets/coins.png";
import Play from "../assets/play.png";
import Apple from "../assets/apple.png";
import SideLinksC from './../Common/SideLinks';

const SideLinks = ({sideLinksData}) => {
  return (
    <VStack w="25%" space="8" alignItems="center" h="full">
      <VStack
      space={"12"}
        w="full"
        h="100%"
    
        p="4"
        rounded="md"
        style={{
          backgroundColor: "rgba(183,91,131,0.4)",
        }}
      >
     <SideLinksC sideLinksData={sideLinksData}/>

        <VStack position="relative">
          <img src={Img} alt="" />
          <VStack space="2" w="80%" position="absolute" left="10%">
            <Text textAlign="center" fontSize="30" color="white">
              Let's start!
            </Text>
            <HStack alignItems="center" space="4">
              <img
                style={
                  {
                    // width:"50%"
                  }
                }
                src={Coins}
                alt=""
              />
              <Text color="#D3D3D3">Invite a friend, get 5 SIVI coins</Text>
            </HStack>
            <Button rounded="md" w="full" bg="white" color="black">
              <Text>Get 5 Now</Text>
            </Button>
          </VStack>
        </VStack>
      </VStack>
      <Box
        w="full"
        p="4"
        rounded="md"
        style={{
          backgroundColor: "rgba(183,91,131,0.4)",
        }}
      >
        <VStack alignItems="center" space="4">
          <HStack>
            <Text color="#D3D3D3">Don't have an account?</Text>
            <Text color="white">Get the app</Text>
          </HStack>
          <HStack alignItems="center" space="4">
            <img src={Play} alt="" />
            <img src={Apple} alt="" />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SideLinks;
