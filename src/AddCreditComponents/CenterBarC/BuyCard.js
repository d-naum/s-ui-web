import { Box, Button, Divider, HStack, Input, Text, VStack } from "native-base";
import React from "react";
import Visa from "../../assets/visa.png";
import Master from "../../assets/master.png";
import Cvc from "../../assets/cvc.png";
import Flag from "../../assets/flag.png";
import Down from "../../assets/downV.png";

const BuyCard = () => {
  return (
    <Box
      w="full"
      p="4"
      rounded="lg"
      style={{
        backgroundColor: "rgba(183,91,131,0.2)",
      }}
    >
      <VStack space={"4"}>
        <Text fontWeight={"bold"} color="white">
          By with Card
        </Text>
        <Divider opacity={70} />
        <HStack
          w="full"
          justifyContent={"space-between"}
          p="2"
          alignItems={"center"}
          rounded="lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Input
            variant="unstyled"
            fontSize={18}
            fontWeight="light"
            placeholderTextColor={"white"}
            placeholder="Card Number"
          />
          <HStack space={"2"} alignItems={"center"}>
            <img src={Visa} alt="" />
            <img src={Master} alt="" />
          </HStack>
        </HStack>
        <HStack w="full" justifyContent={"space-between"} alignItems={"center"} space="2">
        <HStack
          w="49%" 
          p="2"
          alignItems={"center"}
          rounded="lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Input
            variant="unstyled"
            fontSize={18}
            fontWeight="light"
            placeholderTextColor={"white"}
            placeholder="Card Number"
          />

        </HStack>
        <HStack
        w="49%"
          justifyContent={"space-between"}
          p="2"
          alignItems={"center"}
          rounded="lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Input
            variant="unstyled"
            fontSize={18}
            fontWeight="light"
            placeholderTextColor={"white"}
            placeholder="CVC"
          />
           <img src={Cvc} alt=""/>
        </HStack>
        </HStack>
        <HStack w="full" justifyContent={"space-between"} alignItems={"center"} space="2">
        <HStack
        w="49%"
          justifyContent={"space-between"}
          px="4"
          py={"2"}
          alignItems={"center"}
          rounded="lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
   <HStack alignItems={"center"} >
   <img src={Flag} alt=""/>
   <Input   
           
            variant="unstyled"
            fontSize={18}
            fontWeight="light"
            placeholderTextColor={"white"}
            placeholder="Card Number"
          />
   </HStack>
           <img src={Down} alt=""/>
        </HStack>
        <HStack
          w="49%" 
          p="2"
          alignItems={"center"}
          rounded="lg"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Input
            variant="unstyled"
            fontSize={18}
            fontWeight="light"
            placeholderTextColor={"white"}
            placeholder="Postal Code"
          />

        </HStack>
        </HStack>
        <HStack justifyContent={"flex-end"}>
            <Button bg="white" px="6" rounded={"lg"}><Text fontWeight={"bold"} color="bgColorPrimary.900">Pay Now</Text></Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default BuyCard;
