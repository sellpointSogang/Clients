import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import styled from "styled-components";
import Flex from "@components/atoms/Flex";
import Header from "@components/organisms/Header";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
import SearchInput from "@components/molecules/SearchInput";
import Filter from "../Stock/components/Filter/index";
import HoverDescription from "@components/organisms/HoverDescription";
import Bar from "@components/molecules/Bar";
import Chart from "@components/organisms/Chart";
import DropdownSelector from "@components/organisms/ChartMenu";
import dataSet from "@/utils/ChartData";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
  analystId,
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
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const API_URL = `https://port-0-server-bkcl2bloy31e46.sel5.cloudtype.app/`;

  const [pointList, setPointList] = useState([]);
  useEffect(() => {
    setPointList([...listItems]);
  }, []);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const getFullPoints = (id) => {
    axios
      .get(`${API_URL}reports/${id}/points`)
      .then((response) => {
        // console.log(response.data);
        setPointList([...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    setPointList([]);
    getFullPoints(id);
  }, [isExpanded]);

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
            {title}
          </Text>
          <ul>
            {listItems
              .slice(0, isExpanded ? pointList.length : 3)
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
            {price}
          </Text>
        </Flex>
        <Flex width="70px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            {date}
          </Text>
        </Flex>
        <Flex width="92px" direction="row">
          <Flex>
            <Text size={12} color={palette.color_subText} weight={600}></Text>
            <Text
              size={16}
              color={palette.color_mainText}
              weight={500}
              cursor="pointer"
              textDecoration="underline"
              onClick={() => {
                if (analystname != null) {
                  navigate(`/analyst/${analystId}`);
                }
              }}
            >
              {analystname}
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
              percentage={`${one}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {one == null ? `준비중` : `${one}%`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${two}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {`${two}일`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${three}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {`${three}일`}
            </Bar>
          </Flex>
        </Flex>
        <Flex width="150px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 적중일
            </Text>
            <Bar
              height="26.5px"
              percentage={`${four}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {four == `준비중` ? `준비중` : `${four}일`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${five}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {five == `준비중` ? `준비중` : `${five}일`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={13} color={palette.color_mainText}>
              평균 첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${six}%`}
              width="150px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {six == `준비중` ? `준비중` : `${six}일`}
            </Bar>
          </Flex>
        </Flex>
      </Flex>
    </ContentsBox>
  );
};

const StockInfo = () => {
  const API_URL = `https://port-0-server-bkcl2bloy31e46.sel5.cloudtype.app/`;
  const STOCK_PRICE_SERVICE_KEY = `CA1zwv3I4OWtM+mg9/8gPEgF+MwCgX+v1RhvZHq1SGNvSj/cw9P2XqrLCwvohtCiIbTu3rCDVRV+2yZmV9mIpg==`;
  const STOCK_PRICE_API_BASE_URL = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo`;

  let params = useParams();

  const [pageIndex, setPageIndex] = useState(1);
  /* 아래 state와 setState를 Filter에 prop으로 전달하여  */
  const [orderMode, setOrderMode] = useState("Date");
  /* 아래 searchText와 setSearchText를 SearchInput에 prop으로 전달 */
  const [searchText, setSearchText] = useState("");
  /* 검색 기능을 위해 엔터 키인지 판별, searchInput에 prop으로 전달 */
  const [isEnter, setIsEnter] = useState(false);
  const [Points, setPoints] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [stockProfile, setStockProfile] = useState([]);
  const getStockProfile = () => {
    axios
      .get(`${STOCK_PRICE_API_BASE_URL}`, {
        params: {
          serviceKey: `${STOCK_PRICE_SERVICE_KEY}`,
          resultType: `json`,
          itmsNm: `${params.name}`,
          numOfRows: "365",
        },
      })
      .then((response) => {
        // console.log(response.data.response.body.items.item);
        setStockProfile((prevData) => [
          ...prevData,
          ...response.data.response.body.items.item,
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getStockProfile();
  }, []);

  // useEffect(() => {
  //   console.log(stockProfile);
  // }, [stockProfile]);

  /* 날짜 정렬 버전 받아오는 함수 */
  const getDateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/${params.id}/reports?page=${pageIndex}&page_size=4&ordering=-publish_date&query=${searchText}`
      )
      .then((response) => {
        console.log(response.data);
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /* 날짜 역순 데이터 받아오는 함수*/
  const getReverseDateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/${params.id}/reports?page=${pageIndex}&page_size=4&ordering=publish_date&query=${searchText}`
      )
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /* 리포트 적중률 순 데이터 받아오는 함수 */
  const getHitrateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/${params.id}/reports?page=${pageIndex}&page_size=4&ordering=-hit_rate&query=${searchText}`
      )
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /* 리포트 적중률 역순 데이터 받아오는 함수 */
  const getReverseHitrateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/${params.id}/reports?page=${pageIndex}&page_size=4&ordering=hit_rate&query=${searchText}`
      )
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /* 평균 적중률 순 데이터 받아오는 함수 -> 수정 필요 */
  const getAvgHitrateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/2/reports?page=${pageIndex}&page_size=4&ordering=min_analyst_hit_rate&query=${searchText}`
      )
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  /* 평균 적중률 역순 데이터 받아오는 함수 -> 수정 필요 */
  const getAvgReverseHitrateOrderedData = () => {
    axios
      .get(
        `${API_URL}stocks/${params.id}/reports?page=${pageIndex}&page_size=4&ordering=-min_analyst_hit_rate&query=${searchText}`
      )
      .then((response) => {
        setPoints((prevData) => [...prevData, ...response.data.results]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  /* 무한 스크롤 부분, 페이지가 교차될 때 pageIndex를 1씩 높여주도록 함 */
  const ref = useRef(null);
  useEffect(() => {
    const options = { root: null, threshold: 0.5 };
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

  /* pageIndex가 변할 때 정보를 받아오도록 함.*/
  useEffect(() => {
    console.log(pageIndex);
    if (orderMode == "Date") {
      getDateOrderedData();
    } else if (orderMode == "ReverseDate") {
      getReverseDateOrderedData();
    } else if (orderMode == "Hitrate") {
      getHitrateOrderedData();
    } else if (orderMode == "ReverseHitrate") {
      getReverseHitrateOrderedData();
    } else if (orderMode == "AvgHitrate") {
      getAvgHitrateOrderedData();
    } else if (orderMode == "AvgReverseHitrate") {
      getAvgReverseHitrateOrderedData();
    }
  }, [pageIndex]);
  /* order가 바뀔 때 Points를 비워주고 pageIndex를 초기화해주기 위함 */
  useEffect(() => {
    setPoints([]);
    setPageIndex(1);
    console.log(orderMode);
    // if (orderMode == "Date") {
    //   getDateOrderedData();
    // } else if (orderMode == "ReverseDate") {
    //   getReverseDateOrderedData();
    // } else if (orderMode == "Hitrate") {
    //   getHitrateOrderedData();
    // } else if (orderMode == "ReverseHitrate") {
    //   getReverseHitrateOrderedData();
    // }
  }, [orderMode]);

  /* isEnter가 바뀔 때를 검색으로 가정하고 Points를 비워줌 */
  useEffect(() => {
    if (isEnter == true) {
      setPoints([]);
      setIsEnter(false);
      setPageIndex(1);
    }
  }, [isEnter]);

  const [tabs, setTabs] = useState("sell");

  /* 차트 부분 */
  const Analytics = () => {
    const classes = useStyles();
    const [data, setData] = useState(stockProfile);

    // const fetchCustomData = (key) => {
    //   setData(dataSet[key]);
    // };

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
                    {stockProfile.length === 0
                      ? ``
                      : `${stockProfile[0].srtnCd}`}
                  </Text>
                  <Text weight={800} size={36} color={palette.color_mainText}>
                    {params.name}
                  </Text>
                  <Flex direction="row" gap={6} justify="left">
                    <Text weight={600} size={24}>
                      {stockProfile.length === 0
                        ? `₩`
                        : `₩ ${stockProfile[0].clpr}`}
                    </Text>
                    {stockProfile.length === 0 ? (
                      <></>
                    ) : (
                      <PercentageBox sign={stockProfile[0].fltrt}>
                        <Flex justify="center" align="center" height="100%">
                          {stockProfile[0].fltrt >= 0 ? (
                            <Text
                              weight={600}
                              size={16}
                              color={palette.color_plus}
                            >
                              +
                              {(
                                ((stockProfile[1].clpr - stockProfile[0].clpr) /
                                  stockProfile[1].clpr) *
                                100
                              ).toFixed(2)}
                              %
                            </Text>
                          ) : (
                            <Text
                              weight={600}
                              size={16}
                              color={palette.color_minus}
                            >
                              -
                              {(
                                ((stockProfile[1].clpr - stockProfile[0].clpr) /
                                  stockProfile[1].clpr) *
                                100
                              ).toFixed(2)}
                              %
                            </Text>
                          )}
                        </Flex>
                      </PercentageBox>
                    )}
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
                searchText={searchText}
                setSearchText={setSearchText}
                isEnter={isEnter}
                setIsEnter={setIsEnter}
              />
              <Filter
                width="700px"
                height="50px"
                insideWidth="670px"
                insideHeight="29px"
                First="날짜"
                Second="리포트 적중률"
                Third="평균 적중률"
                OrderMode={orderMode}
                SetOrder={setOrderMode}
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
                <List>
                  {Points.map((el, idx) => {
                    if (el.analyst_data == null) {
                      return (
                        <ContentBox
                          id={el.id}
                          analystId={-1}
                          title={el.title}
                          listItems={el.points}
                          price={el.target_price}
                          date={el.publish_date}
                          analystname="준비중"
                          one={Math.round(el.hit_rate * 100)}
                          two={el.days_to_first_hit}
                          three={el.days_to_first_miss}
                          four="준비중"
                          five="준비중"
                          six="준비중"
                        />
                      );
                    } else if (
                      el.analyst_data.name != null &&
                      (el.analyst_data.history.avg_days_hit == null ||
                        el.analyst_data.history.avg_datys_to_first_hit ==
                          null ||
                        el.analyst_data.history.avg_days_to_first_miss == null)
                    ) {
                      return (
                        <ContentBox
                          id={el.id}
                          analystId={el.analyst_data.id}
                          title={el.title}
                          listItems={el.points}
                          price={el.target_price}
                          date={el.publish_date}
                          analystname={el.analyst_data.name}
                          one={Math.round(el.hit_rate * 100)}
                          two={el.days_to_first_hit}
                          three={el.days_to_first_miss}
                          four="준비중"
                          five="준비중"
                          six="준비중"
                        />
                      );
                    } else if (
                      el.analyst_data.name != null &&
                      el.analyst_data.history.avg_days_hit != null &&
                      el.analyst_data.history.avg_datys_to_first_hit != null &&
                      el.analyst_data.history.avg_days_to_first_miss != null
                    ) {
                      return (
                        <ContentBox
                          id={el.id}
                          analystId={el.analyst_data.id}
                          title={el.title}
                          listItems={el.points}
                          price={el.target_price}
                          date={el.publish_date}
                          analystname={el.analyst_data.name}
                          one={Math.round(el.hit_rate * 100)}
                          two={el.days_to_first_hit}
                          three={el.days_to_first_miss}
                          four={el.analyst_data.history.avg_days_hit}
                          five={el.analyst_data.history.avg_days_to_first_hit}
                          six={el.analyst_data.history.avg_days_to_first_miss}
                        />
                      );
                    }
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
  background: ${(props) =>
    props.sign >= 0 ? `  rgba(255, 59, 48, 0.1)` : `rgba(49, 130, 246, 0.10)`};
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
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const VisuallyHidden = styled.div`
  width: 1px;
  height: 1px;
  display: hidden;
`;
