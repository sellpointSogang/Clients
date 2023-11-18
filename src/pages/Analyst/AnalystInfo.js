import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/organisms/Header/index";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
import Bar from "@components/molecules/Bar";
import SearchInput from "@components/molecules/SearchInput";
import Filter from "@pages/Analyst/components/Filter";
import HoverDescription from "@components/organisms/HoverDescription";

const ContentBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const listItems = [
    `반도체 부문 불확실성: 반도체 시장의 변동성과 공급망
    문제로 인해 삼성의 반도체 부문이 불안정한 상황에
    직면하고 있습니다.`,
    `반도체 부문 불확실성: 반도체 시장의 변동성과 공급망
    문제로 인해 삼성의 반도체 부문이 불안정한 상황에
    직면하고 있습니다.`,
    `반도체 부문 불확실성: 반도체 시장의 변동성과 공급망
    문제로 인해 삼성의 반도체 부문이 불안정한 상황에
    직면하고 있습니다.`,
    `반도체 부문 불확실성: 반도체 시장의 변동성과 공급망
    문제로 인해 삼성의 반도체 부문이 불안정한 상황에
    직면하고 있습니다.`,
    `반도체 부문 불확실성: 반도체 시장의 변동성과 공급망
    문제로 인해 삼성의 반도체 부문이 불안정한 상황에
    직면하고 있습니다.`,
  ];

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
        <Flex width="86.25px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            81,000{" "}
          </Text>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            2023.9.10.{" "}
          </Text>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Flex>
            <Text size={12} color={palette.color_subText} weight={600}>
              005930
            </Text>
            <Text
              size={16}
              color={palette.color_mainText}
              weight={500}
              cursor="pointer"
              textDecoration="underline"
            >
              삼성전자
            </Text>
          </Flex>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            Sell
          </Text>
        </Flex>
        <Flex width="185px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              리포트 적중률
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="185px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61%
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="185px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              61일
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage="61%"
              width="185px"
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

const AnalystInfo = () => {
  return (
    <PageWrapper>
      {" "}
      <Flex>
        <Header />
        <FirstWrapper>
          <Flex height="100%">
            <Flex
              direction="row"
              width="80%"
              height="240px"
              justify="space-between"
              align="top"
            >
              <NameWrapper>
                <Flex align="flex-start" gap={10}>
                  <Text weight={800} color={palette.color_mainText} size={36}>
                    김선경
                  </Text>
                  <Text weight={600} color={palette.color_mainText} size={24}>
                    미래투자증권
                  </Text>
                </Flex>
              </NameWrapper>
              <BarContainer>
                <BarWrapper>
                  <Flex gap={15}>
                    <Flex gap={11} align="start">
                      <Flex direction="row" justify="flex-start">
                        <Text size={16} weight={600}>
                          평균 적중률
                        </Text>
                        <HoverDescription
                          description={
                            "애널리스트가 작성한 리포트 예측들이 얼마나 정확했는지를 나타내는 지표입니다. 이는 과거 리포트들의 예측과 실제 시장의 움직임을 비교하여 산출됩니다."
                          }
                        />
                      </Flex>
                      <Bar
                        height="26.5px"
                        percentage="61%"
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        61%
                      </Bar>
                    </Flex>
                    <Flex gap={11} align="start">
                      <Flex direction="row" justify="flex-start">
                        <Text size={16} weight={600}>
                          평균 첫 예측 적중 기간
                        </Text>
                        <HoverDescription
                          description={
                            "애널리스트의 리포트 예측이 실제 시장에서 처음으로 맞을 때까지의 소요 시간의 평균을 나타냅니다."
                          }
                        />
                      </Flex>
                      <Bar
                        height="26.5px"
                        percentage="61%"
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        61일
                      </Bar>
                    </Flex>
                    <Flex gap={11} align="start">
                      <Flex direction="row" justify="flex-start">
                        <Text size={16} weight={600}>
                          평균 첫 예측 실패 기간
                        </Text>
                        <HoverDescription
                          description={
                            "애널리스트의 리포트 예측이 실제 시장에서 처음으로 틀릴 때까지의 소요 시간의 평균을 나타냅니다."
                          }
                        />
                      </Flex>
                      <Bar
                        height="26.5px"
                        percentage="61%"
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        72일
                      </Bar>
                    </Flex>
                  </Flex>
                </BarWrapper>
              </BarContainer>
            </Flex>
          </Flex>
        </FirstWrapper>
        <SecondWrapper>
          <Flex gap={23} width="80%">
            <Flex direction="row" justify="space-between">
              <Text weight={800} size={24}>
                리포트
              </Text>
              <SearchInput
                width="348px"
                height="50px"
                placeholder="리포트 제목, 종목"
              />
              <Filter
                width="700px"
                height="50px"
                insideWidth="670px"
                insideHeight="29px"
                First="날짜"
                Second="리포트 적중률"
                Third="리포트 종류"
              />
            </Flex>
            <ContentsContainer>
              <Flex>
                <Flex gap={20} direction="row" height="40px">
                  <Flex width="500px" direction="row" justify="flex-start">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      Point 요약
                    </Text>
                  </Flex>
                  <Flex width="86.25px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      타겟 주가
                    </Text>
                  </Flex>
                  <Flex width="86.25px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      날짜
                    </Text>
                  </Flex>
                  <Flex width="86.25px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      종목
                    </Text>
                  </Flex>
                  <Flex width="86.25px" direction="row">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      리포트 종류
                    </Text>
                  </Flex>
                  <Flex width="185px" direction="row" justify="flex-start">
                    <Text size={16} color={palette.color_subText} weight={800}>
                      리포트 평가 수치
                    </Text>
                    <HoverDescription
                      description={
                        "리포트 적중률\n특정 리포트의 예측이 얼마나 정확했는지를 나타내는 지표입니다. 이는 특정 리포트의 예측과 실제 시장의 움직임을 비교하여 산출됩니다.\n\n첫 예측 적중 기간\n특정 리포트 예측이 실제 시장에서 처음으로 맞을 때까지의 소요 시간을 나타냅니다.\n\n첫 예측 실패 기간\n특정 리포트 예측이 실제 시장에서 처음으로 틀릴 때까지의 소요 시간을 나타냅니다."
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

export default AnalystInfo;

const FirstWrapper = styled.div`
  height: 335px;
  width: 100%;
`;

const SecondWrapper = styled.div`
  width: 100%;
  background-color: ${palette.color_background};
  padding-top: 40px;
  padding-bottom: 50px;
  z-index: 1;
`;

const NameWrapper = styled.div``;

const BarContainer = styled.div`
  width: 400px;
  height: 240px;
  background-color: ${palette.color_background};
  border-radius: 10px;
  padding: 23px 23px 23px 23px;
`;

const BarWrapper = styled.div``;

const ContentsContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${palette.color_white};
`;

export const ContentsBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d5d8dc;
`;

const PageWrapper = styled.div`
  min-width: 1400px;
  overflow-x: auto;
`;
