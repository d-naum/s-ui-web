import {  HStack } from 'native-base'
import React from 'react'
import PostFeed from '../Components/PostFeed'
import { RightBarHomeScreen } from '../Components/RightBarHomeScreen'
import SideLinks from '../Components/SideLinks'
import Dash from "../assets/01.png"
import Coin from "../assets/coin.png"
import Wallet from "../assets/wallet.png"
import Creators from "../assets/profile-2user.png"
import Bag from "../assets/bag.png"
import Message from "../assets/message-add.png"
import Download from "../assets/document-download.png"
import Setting from "../assets/setting-3.png"




const  sideLinksData =[

  {
    name:"Add Credit",
    icon:Coin
   },
   {
    name:"Wallet",
    icon:Wallet
   },
   {
    name:"Creators",
    icon:Creators
   },
   {
    name:"Rewards",
    icon:Wallet
   },
   {
    name:"Marketplace",
    icon:Bag
   },
   {
    name:"Create",
    icon:Message
   },
   {
    name:"Download",
    icon:Download
   },
   {
    name:"Setting",
    icon:Setting
   },
]


const Home = () => {
  return (

      <HStack w="80%" mx="auto"   space="6">
        <SideLinks sideLinksData={sideLinksData}/>
        <PostFeed/>
        <RightBarHomeScreen/>
      </HStack>
   
  )
}

export default Home