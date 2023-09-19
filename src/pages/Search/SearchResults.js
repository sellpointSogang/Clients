import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faUser } from "@fortawesome/free-solid-svg-icons";
import Flex from "../../components/atoms/Flex";
const SearchResults = () => {
  return (
    <SearchResultsDiv>
      <Title>
        <FontAwesomeIcon
          icon={faChartLine}
          style={{
            fontSize: "16px",
            color: "#717FFE",
          }}
        />
        종목
      </Title>
      <Result>
        <ResultContents>
          <ResultLeft>삼성전자</ResultLeft>
          <ResultRight>005930</ResultRight>
        </ResultContents>
      </Result>
      <Result>
        <ResultContents>
          <ResultLeft>삼성전자</ResultLeft>
          <ResultRight>005930</ResultRight>
        </ResultContents>
      </Result>
      <Title>
        <FontAwesomeIcon
          icon={faUser}
          style={{
            fontSize: "16px",
            color: "#717FFE",
          }}
        />
        애널리스트
      </Title>
      <Result>
        <ResultContents>
          <ResultLeft>김삼성</ResultLeft>
          <ResultRight>미래투자증권</ResultRight>
        </ResultContents>
      </Result>
      <Result>
        <ResultContents>
          <ResultLeft>김삼성</ResultLeft>
          <ResultRight>미래투자증권</ResultRight>
        </ResultContents>
      </Result>
      <Result>
        <ResultContents>
          <ResultLeft>김삼성</ResultLeft>
          <ResultRight>미래투자증권</ResultRight>
        </ResultContents>
      </Result>
    </SearchResultsDiv>
  );
};

const SearchResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 7px 9px;
  width: fit-content;
  gap: 10px;
  border-radius: 5px;
  background: rgba(113, 127, 254, 0.1);
  color: #717ffe;
  font-family: "Pretendard";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px 16px;
  justify-content: flex-start; /* For other browsers */
  -webkit-box-pack: start; /* For Safari */
`;

const Result = styled.div`
  display: flex;
  padding: 0px 0px 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ResultContents = styled.div`
  display: flex;
  width: 450px;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;

  &:hover {
    background-color: #f5f7f9;
  }
`;

const ResultLeft = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  text-align: right;
`;

const ResultRight = styled.div`
  color: #8c8c8c;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`;
export default SearchResults;
