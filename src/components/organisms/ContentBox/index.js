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
import { Content } from "antd/es/layout/layout";

const ContentBox = ({
  title,
  listItems,
  price,
  date,
  code,
  stockname,
  reportType,
  one,
  two,
  three,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
            {title}
          </Text>
          <ul>
            {listItems ? (
              <>
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
              </>
            ) : (
              <></>
            )}
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
            {price}
          </Text>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            {date}
          </Text>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Flex>
            <Text size={12} color={palette.color_subText} weight={600}>
              {code}
            </Text>
            <Text
              size={16}
              color={palette.color_mainText}
              weight={500}
              cursor="pointer"
              textDecoration="underline"
            >
              {stockname}
            </Text>
          </Flex>
        </Flex>
        <Flex width="86.25px" direction="row">
          <Text size={16} color={palette.color_mainText} weight={500}>
            {reportType}
          </Text>
        </Flex>
        <Flex width="185px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              리포트 적중률
            </Text>
            <Bar
              height="26.5px"
              percentage={`${one}%`}
              width="185px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {`${one}%`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 적중 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${two}%`}
              width="185px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {`${two}%`}
            </Bar>
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 실패 소요 기간{" "}
            </Text>
            <Bar
              height="26.5px"
              percentage={`${three}%`}
              width="185px"
              progressHeight="18px"
              progressWidth="28px"
              progressLeft="5px"
              progressTop="3.97px"
            >
              {`${three}일`}
            </Bar>
          </Flex>
        </Flex>
      </Flex>
    </ContentsBox>
  );
};

export default ContentBox;

const ContentsBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d5d8dc;
`;
