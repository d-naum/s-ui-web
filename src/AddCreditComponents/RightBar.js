import { VStack } from 'native-base'
import React from 'react'
import AddToWallet from '../Common/AddToWallet'
import Credit from '../Common/Credit'

const RightBar = () => {
  return (
    <VStack w="25%" space="4" h="full" bg="" rounded={"md"}>
    <Credit/>
    <AddToWallet/>
   </VStack>
  )
}

export default RightBar