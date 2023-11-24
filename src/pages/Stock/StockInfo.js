import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import styled from "styled-components";
import axios from "axios";
import Flex from "@components/atoms/Flex";
import Header from "@components/organisms/Header";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
import SearchInput from "@components/molecules/SearchInput";
import Filter from "../Stock/components/Filter";
import HoverDescription from "@components/organisms/HoverDescription";
import Bar from "@components/molecules/Bar";

import Chart from "@components/organisms/Chart";
import DropdownSelector from "@components/organisms/ChartMenu";
import dataSet from "@/utils/ChartData";
import { useParams } from "react-router-dom";

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

const ContentBox = ({
  id,
  title,
  listItems,
  price,
  date,
  analystname,
  one,
  two,
  three,
  four,
  five,
  six,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const API_URL = `https://port-0-server-bkcl2bloy31e46.sel5.cloudtype.app/`;

  const [pointList, setPointList] = useState([]);
  useEffect(() => {
    setPointList([...listItems]);
  }, []);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ContentsBox>
      <Flex direction="row" gap={20}>
        <Flex width="500px" direction="column" align="flex-start">
          <Text
            color={palette.color_mainText}
            weight={700}
            size={16}
            lineHeight="25px"
          >
            수익성 하락과 경쟁 압력에 직면하는 삼성전자
          </Text>
          <ul>
            {listItems
              .slice(0, isExpanded ? listItems.length : 3)
              .map((itemContent, index) => (
                <li
                  key={index}
                  style={{
                    listStyle: "inside",
                    overflowWrap: "break-word",
                    textAlign: "left",
                  }}
                >
                  <Text
                    color={palette.color_mainText}
                    weight={500}
                    size={16}
                    lineHeight="25px"
                  >
                    {itemContent}
                  </Text>
                </li>
              ))}
          </ul>
          <Text
            cursor="pointer"
            weight={800}
            size={16}
            color={palette.color_barFill}
            onClick={toggleExpand}
          >
            {isExpanded ? `접기` : `...더보기`}
          </Text>
        </Flex>
        <Flex width="70px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            81,000{" "}
          </Text>
        </Flex>
        <Flex width="70px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            2023.9.10.{" "}
          </Text>
        </Flex>
        <Flex width="92px" direction="row">
          <Flex>
            <Text size={12} color={palette.color_subText} weight={600}>
              미래투자증권
            </Text>
            <Text
              size={16}
              color={palette.color_mainText}
              weight={500}
              cursor="pointer"
              textDecoration="underline"
            >
              김선경
            </Text>
          </Flex>
        </Flex>
        <Flex width="150px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              리포트 적중률
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61%
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61일
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61일
            </Bar>
          </Flex>
        </Flex>
        <Flex width="150px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 적중률
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61%
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61일
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61일
            </Bar>
          </Flex>
        </Flex>
      </Flex>
    </ContentsBox>
  );
};

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
    <PageWrapper>
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
                <HoverDescription
                  description={
                    "전문가들이 주장하는 해당 종목의 매도 여부와 그에 대한 논리적 근거를 제공합니다."
                  }
                />
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
                <HoverDescription
                  description={
                    "전문가들이 강조하는 해당 종목의 투자 위험성과 그에 대한 논리적 근거를 제공합니다."
                  }
                />
              </ConsiderBtn>
            </Flex>
          </Flex>
        </FirstWrapper>
        <SecondWrapper>
          <Flex gap={23} width="80%">
            <Flex direction="row" justify="space-between">
              <SearchInput
                width="420px"
                height="50px"
                placeholder="애널리스트 명, 소속 기관, 리포트 제목"
              />
              <Filter
                width="700px"
                height="50px"
                insideWidth="670px"
                insideHeight="29px"
                First="날짜"
                Second="리포트 적중률"
                Third="평균 적중률"
              />
            </Flex>
            <ContentsContainer>
              <Flex>
                <Flex gap={20} direction="row" height="40px">
                  <Flex width="500px" direction="row" justify="flex-start">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      Sell Point 요약
                    </Text>
                  </Flex>
                  <Flex width="70px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      타겟 주가
                    </Text>
                  </Flex>
                  <Flex width="70px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      게시 날짜
                    </Text>
                  </Flex>
                  <Flex width="92px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      애널리스트 명
                    </Text>
                  </Flex>
                  <Flex width="150px" direction="row" justify="flex-start">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      리포트 평가 수치
                    </Text>
                    <HoverDescription
                      description={
                        "리포트 적중률\n특정 리포트의 예측이 얼마나 정확했는지를 나타내는 지표입니다. 이는 특정 리포트의 예측과 실제 시장의 움직임을 비교하여 산출됩니다.\n\n첫 예측 적중 기간\n특정 리포트 예측이 실제 시장에서 처음으로 맞을 때까지의 소요 시간을 나타냅니다.\n\n첫 예측 실패 기간\n특정 리포트 예측이 실제 시장에서 처음으로 틀릴 때까지의 소요 시간을 나타냅니다."
                      }
                    />
                  </Flex>
                  <Flex width="150px" direction="row" justify="flex-start">
                    <Text size={15} color={palette.color_subText} weight={800}>
                      애널리스트 히스토리
                    </Text>
                    <HoverDescription
                      description={
                        "평균 적중률\n애널리스트가 작성한 리포트 예측들이 얼마나 정확했는지를 나타내는 지표입니다. 이는 과거 리포트들의 예측과 실제 시장의 움직임을 비교하여 산출됩니다.\n\n평균 첫 예측 적중 기간\n애널리스트의 리포트 예측이 실제 시장에서 처음으로 맞을 때까지의 소요 시간의 평균을 나타냅니다.\n\n평균 첫 예측 실패 기간\n애널리스트의 리포트 예측이 실제 시장에서 처음으로 틀릴 때까지의 소요 시간의 평균을 나타냅니다."
                      }
                    />
                  </Flex>
                </Flex>
                <ContentBox />
              </Flex>
            </ContentsContainer>
          </Flex>
        </SecondWrapper>
      </Flex>
    </PageWrapper>
  );
};

export default StockInfo;

const PageWrapper = styled.div`
  min-width: 1400px;
  overflow-x: auto;
`;
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

const ContentsContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${palette.color_white};
`;

const ContentsBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d5d8dc;
`;
