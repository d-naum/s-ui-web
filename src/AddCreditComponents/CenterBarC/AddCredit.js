import { Button, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
import { Box } from "native-base";
import Notify from "../../assets/notification-bing.png";

const AddCredit = () => {
  return (
    <Box
      w="full"
      p="4"
      rounded="lg"
      style={{
        backgroundColor: "rgba(183,91,131,0.2)",
      }}
    >
      <VStack w="full" space="4">
        <Text fontWeight={"bold"} color="white">
          Add credit to SIVA
        </Text>
        <Divider opacity={70} />
        <Text color={"white"} opacity={90}>
          $SIVI Balence
        </Text>
        <HStack w="full" space={"2"}>
          <HStack
            w="70%"
            rounded={"lg"}
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Text
              color="white"
              p="4"
              roundedLeft={"lg"}
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
            >
              USD
            </Text>
            <Text p="4" color={"white"}>
              100
            </Text>
          </HStack>
          <Button rounded={"lg"} w="28%" bg="white">
            <Text color="bgColorPrimary.900">Add to my Wallet</Text>
          </Button>
        </HStack>
        <HStack alignItems={"center"} space={"2"} p="4" rounded="lg" style={{
            backgroundColor:"rgba(0,32,95,0.4)"
        }}>
          <Box
            w="10"
            h="10"
            alignItems={"center"}
            justifyContent="center"
            rounded={"full"}
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            <img src={Notify} alt="" />
          </Box>
          <Text fontSize={16} color="white">Once we've recieved your payment, we'll update your account in about 30 minutes.</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddCredit;
