import { Button, HStack, Text, VStack } from 'native-base'
import React from 'react'
import Coin from "../assets/coin.png"

const Credit = () => {
  return (
    <VStack
    w={"full"}
    rounded={"md"}
    style={{
      backgroundColor: "rgba(183,91,131,0.4)",
    }}
  >
  <VStack w="full" alignItems={"center"} space="4" p="4">
    <HStack w="full" alignItems={"center"} justifyContent="space-between" p="2" rounded={"md"}  style={{
        backgroundColor:"rgba(255,255,255,0.2)"
    }}>
        <HStack alignItems={"center"} space="4">
            <img src={Coin} alt=""/>
            <Text color="white" fontSize={18}>$SIVI Balance</Text>
        </HStack>
        <Text color={"white"} fontSize={"18"} fontWeight="bold">$ 2 USD</Text>
    </HStack>
    <HStack w="full" alignItems={"center"} justifyContent="space-between" p="2" rounded={"md"} style={{
        backgroundColor:"rgba(255,255,255,0.2)"
    }}>
        <HStack alignItems={"center"} space="4">
            <img src={Coin} alt=""/>
            <Text color="white" fontSize={18}>Cash Balance</Text>
        </HStack>
        <Text color={"white"} fontSize={"18"} fontWeight="bold">10 USD</Text>
    </HStack>
    <Button bg={"white"} rounded={"md"} w="full"><Text fontWeight={"bold"} color="bgColorPrimary.900">Add Credit</Text></Button>
  </VStack>
    
  </VStack>
  )
}

export default Credit