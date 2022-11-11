import { Box, Button, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
import MemberImg from "../../assets/memberImg.png";
import Archive from "../../assets/archive-add.png";
import Coin from "../../assets/coin.png"
import { Link } from 'react-router-dom';


const JoinMember = () => {
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
      <VStack w="full" space="4">
        <Text fontSize={16} fontWeight="bold" color="white">
          Join My Membership
        </Text>
        <Box position={"relative"}>
          <img
            src={MemberImg}
            alt=""
            style={{
              borderRadius: "10px",
            }}
          />
        <HStack  p="2" space="2" bg="bgColorPrimary.900" rounded={"md"} position="absolute" bottom={"2"} left={"2"}>
        <img src={Coin} alt=""/>
        <Text color="white">$ 599</Text>
        <Divider color={"white"} orientation="vertical"/>
        <Text color="white">37 Items</Text>
        </HStack>
        </Box>

        <Text color="white" opacity={90}>
          Lorem ipsum dolor sit emit
        </Text>
        <Text color="white" opacity={80}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Button
          isHovered={false}
          rounded={"md"}
          bg="white"
          leftIcon={<img src={Archive} alt="" />}
        >
        <Link to="/credit">
        <Text fontWeight={"bold"} color="bgColorPrimary.900">
            SUBSCRIBE
          </Text>
        </Link>
        </Button>
      </VStack>
    </VStack>
  );
};

export default JoinMember;
