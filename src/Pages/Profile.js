import { HStack } from 'native-base'
import React from 'react'
import ProfileLeft from '../ProfileComponents/ProfileLeft'
import ProfilePosts from '../ProfileComponents/ProfilePosts'

const Profile = () => {
  return (

    <HStack w="80%" mx="auto"   space="2">
    <ProfileLeft/>
    <ProfilePosts/>
    </HStack>

  )
}

export default Profile