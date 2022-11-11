import { Divider, HStack, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import Arrow from "../../assets/arrowD.png";
import ArrowU from "../../assets/arrowU.png";


const SingleAccordion = ({item}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <VStack
    w="full"
    rounded={"md"}
    p="2"
    space={"2"}
    style={{
      backgroundColor: "rgba(255,255,255,0.1)",
    }}
  >
    <HStack
      w="full"
      rounded={"md"}
      alignItems={"center"}
      justifyContent="space-between"
      p="2"
      onClick={() => setIsActive(!isActive)}
    >
      <Text color={"white"}>{item.title}</Text>
      <img src={isActive ? Arrow : ArrowU} alt="" />
    </HStack>
    {isActive && (
      <VStack>
        {" "}
        <Divider />
        <Text color={"white"}>
         {item.content}
        </Text>
      </VStack>
    )}
  </VStack>
  )
}

export default SingleAccordion