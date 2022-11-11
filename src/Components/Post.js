import { Box, Button, HStack, Text, VStack } from "native-base";
import React from "react";
import Profile from "../assets/profile1.png";
import Dots from "../assets/more.png";
import Lock from "../assets/lock.svg";
import PostImg from "../assets/postImg.png";

const Post = () => {
  return (
    <>
      <VStack
        w="full"
        roundedTop={"md"}
        style={{
          backgroundImage: `url(${PostImg})`,
          width: "100%",
          height: "300px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(183,91,131,0.4)",
        }}
      >
        <HStack alignItems={"center"} justifyContent="space-between" p="4">
          <HStack alignItems="center" space="4">
            <img src={Profile} alt="" />
            <VStack space={"2"}>
              <Text color={"white"}>Harold Finch</Text>
              <Text color="gray.300">London, United Kingdom 6h</Text>
            </VStack>
          </HStack>
          <Box w="10" h="10" justifyContent={"center"} alignItems="center" rounded={"md"}
       style={{
        backgroundColor:"rgba(255,255,255,0.2)"
       }}
       >
       <img src={Dots} alt="" />
       </Box>
        </HStack>
        <Box justifyContent={"center"} py="8" alignItems="center">
          <VStack
            w={"50%"}
            rounded="md"
            px="12"
            py="2"
          
            justifyContent={"center"}
            alignItems="center"
            space={"4"}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Box
              justifyContent={"center"}
              alignItems="center"
              w="16"
              h="16"
              borderRadius={"full"}
              bg="gray.400"
            >
              <img src={Lock} alt="" />
            </Box>
            <Text textAlign={"center"} color="white" fontSize={14}>
              Unlock this post by becomming subscriber
            </Text>
          </VStack>
        </Box>
      </VStack>
      <HStack
        style={{
          backgroundColor: "rgba(183,91,131,0.4)",
        }}
        roundedBottom="md"
        alignItems={"center"}
        justifyContent="space-between"
        p="4"
      >
        <Text color="white">Join now foe $20 per month</Text>
        <Button bg="white">
          <Text color={"black"}>Subscribe</Text>
        </Button>
      </HStack>
    </>
  );
};

export default Post;
