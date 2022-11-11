import { Box, Button, HStack, Text, VStack } from 'native-base'
import React from 'react'
import Background from "../assets/Background.png"
import Star from "../assets/medal-star.png"

const RightBarRewards = () => {
  return (
  <VStack
    w="full"
        roundedTop={"md"}
        style={{
          backgroundImage: `url(${Background})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(183,91,131,0.4)",
        }}>
        <VStack  space="4" px={"3"} py="4">
          <Box shadow="5" w="12" h="12" justifyContent="center" alignItems="center" rounded={"md"} style={{
            backgroundColor:"rgba(255,255,255,0.4)"
          }}>
            <img src={Star} alt=""/>
          </Box>
          <Text color="white" fontWeight="bold">Save with Rewards you'll <br/>actually use</Text>
        </VStack>
        <HStack w="full" p="2" alignItems={"center"} space="4" style={{
          backgroundColor:"rgba(0,0,0,0.5)"
        }}>
          <Text opacity={50} color={"white"}>Enjoy offers and discounts from trusted partners</Text>
          <Button bg={"white"}  rounded={"md"} px="10"><Text fontWeight="bold" color={" bgColorPrimary.900"}>Try</Text></Button>
        </HStack>

  </VStack>
  )
}

export default RightBarRewards