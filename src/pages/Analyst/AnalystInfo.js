import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "@components/organisms/Header/index";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
import Bar from "@components/molecules/Bar";
import SearchInput from "@components/molecules/SearchInput";
import Filter from "@pages/Analyst/components/Filter";
import HoverDescription from "@components/organisms/HoverDescription";

import PointData from "../../utils/SellPointData";
import { Content } from "antd/es/layout/layout";
import ContentBox from "@components/organisms/ContentBox";
import axios from "axios";

const AnalystInfo = () => {
  const API_URL = `https://port-0-server-bkcl2bloy31e46.sel5.cloudtype.app/`;
  const [pageIndex, setPageIndex] = useState(1);
  const [Points, setPoints] = useState([]);
  const [profile, setProfile] = useState({
    avg_days_hit: 0,
    avg_days_missed: 0,
    avg_days_to_first_hit: 0,
    avg_days_to_first_miss: 0,
    company: "",
    hit_rate: 0,
    id: -1,
    name: "",
  });
  const [nextPage, setNextPage] = useState("");

  /* axis를 통해 정보를 성공적으로 받아오면, Points에 추가적으로 저장하게 됨. */
  const getData = () => {
    axios
      .get(`${API_URL}/analysts/1/reports/?page=${pageIndex}&page_size=4`)
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
        setNextPage(`${response.data.next}`);
        console.log("done");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getProfile = () => {
    axios
      .get(`${API_URL}/analysts/analyst/1`)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  /* 이름, 회사명 등 상단에 띄울 내용 렌더링 */
  useEffect(() => {
    getProfile();
  }, []);

  /* 무한 스크롤 부분, 페이지가 교차될 때 pageIndex를 1씩 높여주도록 함 */
  const ref = useRef(null);
  useEffect(() => {
    const options = { root: null, threshold: 0 };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entries[0].isIntersecting);
        if (!entries[0].isIntersecting) {
          return;
        } else if (nextPage !== null) {
          console.log(nextPage);
          setPageIndex((prev) => prev + 1);
        }
      });
    };
    const io = new IntersectionObserver(handleIntersection, options);
    if (ref.current) {
      io.observe(ref.current);
    }
    return () => io && io.disconnect;
  }, [ref]);

  /* pageIndex가 변할 때 getData()를 통해 정보를 받아오도록 함.*/
  useEffect(() => {
    console.log(pageIndex);
    getData();
  }, [pageIndex]);

  return (
    <PageWrapper>
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
                    {profile.name}
                  </Text>
                  <Text weight={600} color={palette.color_mainText} size={24}>
                    {profile.company}
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
                        percentage={`${profile.hit_rate * 100}%`}
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        {profile.hit_rate * 100}%
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
                        percentage={`${profile.avg_days_to_first_hit}%`}
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        {profile.avg_days_to_first_hit}일
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
                        percentage={`${profile.avg_days_to_first_miss}%`}
                        width="354px"
                        progressHeight="18px"
                        progressWidth="28px"
                        progressLeft="5px"
                        progressTop="3.97px"
                      >
                        {profile.avg_days_to_first_miss}일
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
                <Wrapper>
                  <Flex gap={20} direction="row" height="40px">
                    <Flex width="500px" direction="row" justify="flex-start">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        Point 요약
                      </Text>
                    </Flex>
                    <Flex width="86.25px" direction="row">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        타겟 주가
                      </Text>
                    </Flex>
                    <Flex width="86.25px" direction="row">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        날짜
                      </Text>
                    </Flex>
                    <Flex width="86.25px" direction="row">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        종목
                      </Text>
                    </Flex>
                    <Flex width="86.25px" direction="row">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        리포트 종류
                      </Text>
                    </Flex>
                    <Flex width="185px" direction="row" justify="flex-start">
                      <Text
                        size={16}
                        color={palette.color_subText}
                        weight={800}
                      >
                        리포트 평가 수치
                      </Text>
                      <HoverDescription
                        description={
                          "리포트 적중률\n특정 리포트의 예측이 얼마나 정확했는지를 나타내는 지표입니다. 이는 특정 리포트의 예측과 실제 시장의 움직임을 비교하여 산출됩니다.\n\n첫 예측 적중 기간\n특정 리포트 예측이 실제 시장에서 처음으로 맞을 때까지의 소요 시간을 나타냅니다.\n\n첫 예측 실패 기간\n특정 리포트 예측이 실제 시장에서 처음으로 틀릴 때까지의 소요 시간을 나타냅니다."
                        }
                      />
                    </Flex>
                  </Flex>
                </Wrapper>
                <List>
                  {Points.map((el, idx) => {
                    return (
                      <ContentBox
                        title={el.title}
                        listItems={el.points}
                        price={el.target_price}
                        date={el.publish_date}
                        code={el.code}
                        stockname={el.stock.name}
                        reportTye={el.hidden_sentiment}
                        one={el.hit_rate * 100}
                        two={el.days_to_first_hit}
                        three={el.days_to_first_miss}
                      />
                    );
                  })}
                  <VisuallyHidden ref={ref} />
                </List>
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

const Wrapper = styled.div`
  border-bottom: 1px solid #d5d8dc;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const VisuallyHidden = styled.div`
  width: 1px;
  height: 1px;
  display: hidden;
`;
