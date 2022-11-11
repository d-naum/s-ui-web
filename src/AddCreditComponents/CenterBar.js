import React from "react";
import { VStack } from "native-base";

import Balance from "./CenterBarC/Balance";
import AddCredit from "./CenterBarC/AddCredit";
import BuyCard from "./CenterBarC/BuyCard";

const CenterBar = () => {
  return (
    <VStack w="50%" space="4" h="full" bg="" rounded={"md"}>
      <Balance />
      <AddCredit />
      <BuyCard/>
    </VStack>
  );
};

export default CenterBar;
