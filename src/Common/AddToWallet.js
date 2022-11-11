import { Box, Text, VStack } from 'native-base'
import React from 'react'
import { Button } from 'native-base';
import { HStack } from 'native-base';
import Walletimg from "../assets/walletImg.png"


const walletData = [
    {
        number:"01",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
    },
    {
        number:"02",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
    },
    {
        number:"03",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
    },
    {
        number:"04",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
    },
    {
        number:"05",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
    },
]

const AddToWallet = () => {
  return (
    <VStack>
    <VStack position={"relative"}>
    <img src={Walletimg} alt=""/>
    <Button position={"absolute"} bottom="2" left={"30%"} rounded={"md"} bg="white"><Text color="bgColorPrimary.900" fontWeight={"bold"}>Add to my wallet</Text></Button>

    </VStack>
    
        <VStack space={"8"} p="4" roundedBottom={"md"} style={{
            backgroundColor:"rgba(255,255,255,0.1)"
        }}>
           {
            walletData.map((item,index)=>(
                <HStack alignItems={"center"} space="4" key={index}>
                <Box w="12" h="12" rounded={"full"} justifyContent={"center"} alignItems="center" style={{
                    backgroundColor:"rgba(255,255,255,0.2)"
                }}>
                    <Text fontWeight={"bold"} color="white">{item.number}</Text>
                </Box>
                <Text color="white">{item.para} </Text>

            </HStack>
            ))
           }
        </VStack>
    </VStack>
  )
}

export default AddToWallet