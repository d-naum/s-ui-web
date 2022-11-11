import React from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import Vector from "../assets/01.png"




const SideLinks = ({sideLinksData}) => {
  return (
    <VStack  space="4" alignItems="center">
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      p="2"
      rounded="md"
      style={{
        backgroundColor: "rgba(0,32,95,0.4)",
      }}
    >
      <HStack space="4" alignItems="center">
        <img src={Vector} alt="" />
        <Text color="white">Dashboard</Text>
      </HStack>
    </HStack>
   {
    sideLinksData?.map((item,index)=>(
      <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      p="2"
      rounded="md"
      key={index}
    >
      <HStack space="4" alignItems="center">
        <img src={item.icon} alt="" />
        <Text color="white">{item.name}</Text>
      </HStack>
    </HStack>

    ))
   }


  </VStack>
  )
}

export default SideLinks