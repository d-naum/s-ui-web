import { Box, Divider, Flex, HStack, Text, VStack } from 'native-base'
import React from 'react'

const ProfileDetail = () => {
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
   <HStack w="full"   alignItems="center" justifyContent={"space-between"} >
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>3</Text>
        <Text color={"white"} opacity="50">Holders</Text>
     </VStack>
     <Divider orientation="vertical" />
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>2</Text>
        <Text color={"white"} opacity="50">Holding</Text>
     </VStack>
     <Divider orientation="vertical" />
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>$0.40</Text>
        <Text color={"white"} opacity="50">Coin Price</Text>
     </VStack>
   </HStack>
   <Divider/>
   <HStack w="full"   alignItems="center" justifyContent={"space-between"} >
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>3</Text>
        <Text color={"white"} opacity="50">Holders</Text>
     </VStack>
     <Divider orientation="vertical" />
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>2</Text>
        <Text color={"white"} opacity="50">Holding</Text>
     </VStack>
     <Divider orientation="vertical" />
     <VStack space={"2"} alignItems={"center"} justifyContent="center" >
        <Text color="white" fontWeight={"bold"}>$0.40</Text>
        <Text color={"white"} opacity="50">Coin Price</Text>
     </VStack>
   </HStack>
  </VStack>
  )
}

export default ProfileDetail