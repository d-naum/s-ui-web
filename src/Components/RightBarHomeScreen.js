import { VStack } from "native-base";
import React from "react";
import Creaters from "./Creaters";
import Credit from "../Common/Credit";
import RightBarCoin from "./RightBarCoin";
import RightBarRewards from "./RightBarRewards";

export const RightBarHomeScreen = () => {
  return (
    <VStack w="25%" space="4" h="full" bg="" rounded={"md"}>
     <Credit/>
     <Creaters/>
     <RightBarRewards/>
     <RightBarCoin/>
    </VStack>
  );
};
