import { Button, Divider, HStack, Text, VStack } from "native-base";
import React from "react";
import Profile from "../assets/profile.png";
import Img1 from "../assets/01.svg";
import Img2 from "../assets/2.svg";
import Img3 from "../assets/3.svg";
import Dark from "../assets/dark.png";
import Post from "./Post";
import PostC from "./PostC";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import PostImg from "../assets/postImg.png";
import PostImg2 from "../assets/post2.png";
import PostImg3 from "../assets/post3.png";
import PostB from "./PostB";


const postData1={
    
        profileImg: Profile1,
        profileName:"Harold Finch",
        profileLocation:"London, United Kingdom 6h",
        postImg:PostImg,
        postTitle:"Join now foe $20 per month",
        postDesc:"",
        postTag:"",
    
}

const postData2={
    profileImg: Profile2,
    profileName:"Samantha Groves",
    profileLocation:"London, United Kingdom 6h",
    postImg:PostImg2,
    postTitle:"UnLock this post for $20.00",
    postDesc:"",
    postTag:"",
}
const postData3 = {
        profileImg: Profile3,
        profileName:"Lionel Fusco",
        profileLocation:"London, United Kingdom 6h",
        postImg:PostImg3,
        postTitle:"Join now foe $20 per month",
        postDesc:"You can't stop what's coming and neither can I, but we have the opportunity to understand things when they finally change. The future is coming. You started it, and I'll finish it.",
        postTag:"#London",
     }




const PostFeed = () => {
  return (
    <VStack
      w="50%"
      space="4"
      h="full"
      bg=""
      rounded={"md"}
 
    >
      <VStack rounded={"md"}      style={{
        backgroundColor: "rgba(183,91,131,0.4)",
      }}>
        <VStack>
          <VStack w="full" space="12" p="4">
            <VStack w="full" space="2">
              <HStack alignItems="center" space="2">
                <img src={Profile} alt="" />
                <Text color="white">John Reese</Text>
              </HStack>
              <Text color="light.200">What's on your mind?</Text>
            </VStack>
            <HStack alignItems="center" space="6">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
            </HStack>
          </VStack>
          <Divider bg="#876B92" />
        </VStack>
        <VStack>
          <HStack alignItems="center" p={"2"} justifyContent={"space-between"}>
            <Text fontSize={20} color="light.200">
              Subscribes only post
            </Text>
            <img src={Dark} alt="" />
          </HStack>
          <HStack
            roundedBottom={"md"}
            justifyContent={"flex-end"}
            p="4"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Button bg="white" rounded={"md"} px="8">
              <Text color={"black"}>Post</Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Post/>
      <PostB />
      <PostC />
    </VStack>
  );
};

export default PostFeed;
