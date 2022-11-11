import { Button, HStack, Icon, Text, VStack } from "native-base";
import React from "react";
import Profile from "../../assets/profile.png";
import Crpto from "../../assets/buy-crypto.png";
import UserIcon from "../../assets/user-add.png"

const ProfileCom = () => {
  return (
    <VStack
      rounded={"md"}
      alignItems={"center"}
      space="4"
      p="4"
      style={{
        backgroundColor: "rgba(183,91,131,0.3)",
      }}
    >
      <VStack alignItems={"center"} space="2">
        <img src={Profile} alt="" />
        <Text fontSize={20} fontWeight="bold" color="white">
          John Reese
        </Text>
      </VStack>
      <Text color={"white"} textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </Text>
      <HStack w="full" alignItems={"center"} justifyContent="space-evenly">
        <Button w="45%" rounded={"md"} bg="white" leftIcon={<img src={UserIcon} alt="" />} style={{
            backgroundColor:"rgba(255,255,255,0.7)"
        }}>
          <Text color="white">Follow</Text>
        </Button>
        <Button w="45%" rounded={"md"} bg="white" leftIcon={<img src={Crpto} alt="" />}>
          <Text color="bgColorPrimary.900">Buy</Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default ProfileCom;
