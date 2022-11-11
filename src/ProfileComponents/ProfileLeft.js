import { VStack } from 'native-base'
import React from 'react'
import ProfileCom from './ProfileLeftComp/ProfileCom'
import ProfileDetail from './ProfileLeftComp/ProfileDetail'
import AccordionN from './ProfileLeftComp/Accordion';
import JoinMember from './ProfileLeftComp/JoinMember';

const ProfileLeft = () => {
  return (
    <VStack w="25%" space={"2"} >
     <ProfileCom/>
     <ProfileDetail/>
     <AccordionN/>
     <JoinMember/>
    </VStack>
  )
}

export default ProfileLeft