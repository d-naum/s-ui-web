import React from 'react'
import { Box, HStack, Text, VStack } from "native-base";
import Dots from "../../assets/more.png";
import Heart from "../../assets/heart.png";
import Message from "../../assets/message.png";
import Export from "../../assets/export.png";
import Archive from "../../assets/archive.png";
import Coins from "../../assets/coin.png";


const Post = ({PostData}) => {
  return (
    <VStack space={"4"}>
    {
      PostData.map((item,index)=>(
        <VStack key={index}>
<VStack
      w="full"
      roundedTop={"md"}
      style={{
        backgroundImage: `url(${item.postImg})`,
        width: "100%",
        height: "300px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(183,91,131,0.3)",
      }}
    >
      <HStack alignItems={"center"} justifyContent="space-between" p="4">
        <HStack alignItems="center" space="4">
          <img src={item.profileImg} alt="" />
          <VStack space={"2"}>
            <Text color={"white"}>{item.profileName}</Text>
            <Text color="gray.300">{item.profileLocation}</Text>
          </VStack>
        </HStack>
     <Box w="10" h="10" justifyContent={"center"} alignItems="center" rounded={"md"}
     style={{
      backgroundColor:"rgba(255,255,255,0.2)"
     }}
     >
     <img src={Dots} alt="" />
     </Box>
      </HStack>
      {/* <Box justifyContent={"center"} py="8" alignItems="center">
        <VStack
          w={"50%"}
          rounded="md"
          px="12"
          py="6"
          justifyContent={"center"}
          alignItems="center"
          space={"4"}
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Box
            justifyContent={"center"}
            alignItems="center"
            w="16"
            h="16"
            borderRadius={"full"}
            bg="gray.400"
          >
            <img src={Lock} alt="" />
          </Box>
          <Text textAlign={"center"} color="white" fontSize={20}>
            Unlock this post by becomming subscriber
          </Text>
        </VStack>
      </Box> */}
    </VStack>
    <VStack
    roundedBottom={"md"}
      style={{
        backgroundColor: "rgba(183,91,131,0.3)",
      }}
    >

      <HStack
        px="4"
        py="2"
        roundedBottom={"md"}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <HStack alignItems={"center"} space="4">
          <HStack
            alignItems={"center"}
            space="1"
            p="2"
            rounded="md"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <img src={Heart} alt="" />
            <Text color="white">4.2k</Text>
          </HStack>
          <HStack alignItems={"center"} space="1" p="1" rounded="md">
            <img src={Message} alt="" />
            <Text color="white">27</Text>
          </HStack>
          <HStack alignItems={"center"} space="1" p="1" rounded="md">
            <img src={Export} alt="" />
            <Text color="white">73</Text>
          </HStack>
        </HStack>
        <HStack alignItems={"center"} space="6">
          <img src={Coins} alt="" />
          <img src={Archive} alt="" />
        </HStack>
      </HStack>
      <Text color="white" p="4" fontSize={20}>
        {item.postDesc}
      </Text>
     <HStack p="4"  justifyContent={"flex-start"}> <Text bg="#00205F" color="white" rounded={"full"} px="8" py="2" >{item.postTag}</Text></HStack>
    </VStack>
</VStack>
      ))
    }

  </VStack>
  )
}

export default Post