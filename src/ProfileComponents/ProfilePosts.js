import { HStack, Text, VStack } from 'native-base'
import React from 'react'
import { Box } from 'native-base';
import Post from './ProfilePost/Post';
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import PostImg from "../assets/profilepost1.png";
import PostImg2 from "../assets/profilepost2.png";
import PostImg3 from "../assets/profilepost3.png";


const PostData=[
  {
    profileImg: Profile1,
    profileName:"Harold Finch",
    profileLocation:"London, United Kingdom 6h",
    postImg:PostImg,
    postDesc:"You can't stop what's coming and neither can I, but we have the opportunity to understand things when they finally change. The future is coming. You started it, and I'll finish it",
    postTag:"#London",
  },
  {
    profileImg: Profile2,
    profileName:"Harold Finch",
    profileLocation:"London, United Kingdom 6h",
    postImg:PostImg2,
    postDesc:"You can't stop what's coming and neither can I, but we have the opportunity to understand things when they finally change. The future is coming. You started it, and I'll finish it",
    postTag:"#London",
  },
  {
    profileImg: Profile3,
    profileName:"Harold Finch",
    profileLocation:"London, United Kingdom 6h",
    postImg:PostImg3,
    postDesc:"You can't stop what's coming and neither can I, but we have the opportunity to understand things when they finally change. The future is coming. You started it, and I'll finish it",
    postTag:"#London",
  },
]

const ProfilePosts = () => {
  return (
    <VStack w="75%" space={"4"}>
    <Box rounded={"md"} w="full" style={{
         backgroundColor: "rgba(183,91,131,0.4)",
    }}>
   <HStack alignItems={"center"} space="8" w="70%" mx="auto" p="4">
       <Text bg="white" rounded={"md"} px="10" py="4" color={"bgColorPrimary.900"}>Posts</Text>
       <Text  rounded={"md"}  color={"white"}>Products</Text>
       <Text  rounded={"md"} px="10" color={"white"}>Collectibles</Text>
       <Text  rounded={"md"}   color={"white"}>Customs</Text>
       <Text  rounded={"md"} px="10" color={"white"}>Photos</Text>
    </HStack>

    </Box>
    <Box rounded={"md"} w="full" style={{
         backgroundColor: "rgba(183,91,131,0.4)",
    }}>
      <VStack alignItems={"center"} space="8" w="70%" mx="auto" pt="8" >
      <Post PostData={PostData}/>
      </VStack>
    </Box>
 
    </VStack>
  )
}

export default ProfilePosts