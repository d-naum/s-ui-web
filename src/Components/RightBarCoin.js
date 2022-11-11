import { Box, Button, HStack, Text, VStack } from 'native-base'
import React from 'react'

import Background from "../assets/bak.png"
import Img from "../assets/rightbar.png"

const RightBarCoin = () => {
  return (
    <VStack
    w="full"
        rounded={"md"}
        style={{
          backgroundImage: `url(${Background})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(183,91,131,0.4)",
        }}>
<HStack w="full" p="4" alignItems={"center"} justifyContent="space-between">
    <VStack w="65%"  space="4">
        <Text color="white">Use your SIVI coins to buy products and service from our marketplace</Text>
        <Button w="70%" bg="white"><Text>Get Started</Text></Button>
    </VStack>
    <img src={Img} alt=""/>
</HStack>

  </VStack>
  )
}

export default RightBarCoin