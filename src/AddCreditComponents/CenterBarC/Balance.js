import React from "react";
import { Box, HStack, Text, VStack } from "native-base";
import ImgBg from "../../assets/awardBg.png";
import Wallet from "../../assets/wallet-3.png";
import BalImg from "../../assets/balenceImg.png";

const Balance = () => {
  return (
    <HStack
      w="full"
      className="blur"
      alignItems={"center"}
      justifyContent="space-between"
      p="4"
      rounded={"lg"}
      style={{
        backgroundImage: `url(${ImgBg})`,
        height: "131px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(5px)",
      }}
    >
      <HStack alignItems={"center"} space="4">
        <Box
          shadow={8}
          w="16"
          h="16"
          rounded={"lg"}
          alignItems="center"
          justifyContent={"center"}
          bg="white"
        >
          <img src={Wallet} alt="" />
        </Box>
        <VStack>
          <Text fontSize={20} color="white">
            $SIVI Balance
          </Text>
          <Text fontSize={20} color="white" fontWeight={"bold"}>
            $432.92
          </Text>
        </VStack>
      </HStack>
      <img src={BalImg} alt="" />
    </HStack>
  );
};

export default Balance;
