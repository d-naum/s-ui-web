import { Box, HStack, Text, VStack } from "native-base";
import React from "react";
import SideLinks from "../Common/SideLinks";
import RightBarRewards from './../Components/RightBarRewards';
import Coin from "../assets/coin.png"
import Wallet from "../assets/wallet.png"
import Creators from "../assets/profile-2user.png"
import Bag from "../assets/bag.png"
import Message from "../assets/message-add.png"
import Download from "../assets/document-download.png"
import Setting from "../assets/setting-3.png"

const  sideLinksData =[

  {
    name:"Buy SIVI",
    icon:Coin
   },
   {
    name:"Wallet",
    icon:Wallet
   },

   
   
   {
    name:"Create",
    icon:Message
   },
   
   {
    name:"Setting",
    icon:Setting
   },
]

const LeftBarCredit = () => {
  return (
    <VStack w="25%" space="8" alignItems="center" h="full">
      <Box
        w="full"
        p="4"
        rounded="md"
        style={{
          backgroundColor: "rgba(183,91,131,0.4)",
        }}
      >
        <SideLinks sideLinksData={sideLinksData} />
      </Box>
      <RightBarRewards/>
    </VStack>
  );
};

export default LeftBarCredit;
