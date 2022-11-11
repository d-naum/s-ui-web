import { Divider, HStack, Text, VStack } from "native-base";

import Arrow from "../../assets/arrowD.png";
import ArrowU from "../../assets/arrowU.png";
import SingleAccordion from "./singleAccordion";

const accrodionData = [
  {
    title: "What is SIVI",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    title: "How does it works",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    title: "When I perchase the coin, what do i get ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    title: "Eran from your social activities",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
];

const AccordionN = () => {
 

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
     {
        accrodionData.map((item,index)=>(
            <SingleAccordion item={item}/>
        ))
     }
     {/* <SingleAccordion/>
     <SingleAccordion/>
     <SingleAccordion/> */}

    </VStack>
  );
};

export default AccordionN;
