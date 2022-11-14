import { HStack } from 'native-base'
import React from 'react'
import CenterBar from '../AddCreditComponents/CenterBar'
import LeftBarCredit from '../AddCreditComponents/LeftBarCredit'
import RightBar from '../AddCreditComponents/RightBar'

const AddCredit = () => {
  return (
  
    <HStack w="80%" mx="auto"   space="6">
     <LeftBarCredit/>
     <CenterBar/>
     <RightBar/>
    </HStack>

  )
}

export default AddCredit