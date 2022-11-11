import { Button, HStack, Text, VStack } from 'native-base'
import React from 'react'
import ProfileImg1 from "../assets/profile1.png"
import ProfileImg2 from "../assets/profile2.png"
import ProfileImg3 from "../assets/profile3.png"


const CreatersData = [
    {
        profileImg:ProfileImg1,
        name:"Harold Finch",
    },
    {
        profileImg:ProfileImg2,
        name:"Joss Carter",
    },
    {
        profileImg:ProfileImg3,
        name:"Sameen Shaw",
    },
    {
        profileImg:ProfileImg1,
        name:"Nanthan Ingram",
    },
    
]


const Creaters = () => {
  return (
    <VStack
    w={"full"}
    rounded={"md"}
    style={{
      backgroundColor: "rgba(183,91,131,0.4)",
    }}
  >
  <VStack w="full"  space="4" p="4">
  <Text color="white" fontWeight={"bold"} fontSize={18}>Awesom Creators</Text>
    <VStack w={"full"}>
    {
        CreatersData.map((item,index)=>(
         <HStack  w="full" alignItems={"center"} justifyContent="space-between" p="2" key={index}>
         <HStack alignItems={"center"} space="4" >
            <img src={item.profileImg} alt=""/>
            <Text color="white">{item.name}</Text>
        </HStack>
          <Button>Follow</Button>
         </HStack>

        ))
    }

    </VStack>
  </VStack>
    
  </VStack>
  )
}

export default Creaters