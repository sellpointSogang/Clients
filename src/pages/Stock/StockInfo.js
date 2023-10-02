import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import styled from "styled-components";

import Flex from "@components/atoms/Flex";
import Header from "@components/organisms/Header";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";

import Chart from "@components/organisms/Chart";
import DropdownSelector from "@components/organisms/ChartMenu";
import dataSet from "@/utils/data";

const useStyles = createUseStyles(() => ({
  container: {
    color: "#fff",
    padding: "1rem",
    transition: "0.3s ease-in-out",
    width: "2000px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
}));

const StockInfo = () => {
  const [tabs, setTabs] = useState("sell");
  const Analytics = () => {
    const classes = useStyles();
    const [data, setData] = useState(dataSet.Today);

    const fetchCustomData = (key) => {
      setData(dataSet[key]);
    };

    return (
      <div className={classes.container}>
        <h1>Analytics</h1>
        <Chart data={data} />
      </div>
    );
  };
  return (
    <Flex>
      <Header />
      <FirstWrapper>
        <Flex justify="space-between" width="80%" height="100%">
          <Flex
            direction="row"
            height="350px"
            justify="space-between"
            align="bottom"
          >
            <Flex justify="flex-end" height="90%">
              <Flex align="flex-start" gap={20}>
                <Text weight={600} size={20} color={palette.color_subText}>
                  005930
                </Text>
                <Text weight={800} size={36} color={palette.color_mainText}>
                  삼성전자
                </Text>
                <Flex direction="row" gap={6} justify="left">
                  <Text weight={600} size={24}>
                    ₩ 78,000
                  </Text>
                  <PercentageBox>
                    <Flex justify="center" align="center" height="100%">
                      <Text weight={600} size={16} color={palette.color_plus}>
                        + 0.71%
                      </Text>
                    </Flex>
                  </PercentageBox>
                </Flex>
              </Flex>
            </Flex>
            <Analytics />
          </Flex>
          <Flex direction="row" justify="flex-start">
            <SellBtn tabs={tabs} onClick={() => setTabs("sell")}>
              <Text
                weight={600}
                size={18}
                color={
                  tabs === "sell"
                    ? palette.color_barFill
                    : palette.color_subText
                }
                cursor="pointer"
              >
                Sell Point
              </Text>
            </SellBtn>
            <ConsiderBtn tabs={tabs} onClick={() => setTabs("consider")}>
              <Text
                weight={600}
                size={18}
                color={
                  tabs === "sell"
                    ? palette.color_subText
                    : palette.color_barFill
                }
                cursor="pointer"
              >
                우려 포인트
              </Text>
            </ConsiderBtn>
          </Flex>
        </Flex>
      </FirstWrapper>
      <SecondWrapper></SecondWrapper>
    </Flex>
  );
};

export default StockInfo;

const FirstWrapper = styled.div`
  height: 474px;
  width: 100%;
`;

const SecondWrapper = styled.div`
  width: 100%;
  background-color: ${palette.color_background};
  padding-top: 40px;
  padding-bottom: 50px;
`;

const PercentageBox = styled.div`
  width: 74px;
  height: 25px;
  border-radius: 5px;
  background: rgba(255, 59, 48, 0.1);
`;

const TabsWrapper = styled.div``;

const SellBtn = styled.div`
  width: 185px;
  height: 47px;
  border-bottom: ${(props) =>
    props.tabs === "sell"
      ? `2px solid ${palette.color_barFill}`
      : `2px solid ${palette.color_subText}`};
  cursor: pointer;
`;

const ConsiderBtn = styled.div`
  width: 185px;
  height: 47px;
  border-bottom: ${(props) =>
    props.tabs === "sell"
      ? `2px solid ${palette.color_subText}`
      : `2px solid ${palette.color_barFill}`};
  cursor: pointer;
`;
