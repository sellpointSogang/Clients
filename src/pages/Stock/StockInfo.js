import React from "react";
import Flex from "@components/atoms/Flex";
import Header from "@components/organisms/Header";
import { FilterDate } from "@components/organisms/FilterRadio";
const StockInfo = () => {
  return (
    <Flex>
      <Header />
      <FilterDate></FilterDate>
    </Flex>
  );
};

export default StockInfo;
