import React, { useState } from "react";
import styled from "styled-components";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
import { ContentsBox } from "@pages/Analyst/AnalystInfo";
import SkeletonItem from "./SkeletonItem";

const SkContentBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ContentsBox>
      <Flex direction="row" gap={20}>
        <Flex width="500px" direction="column" align="flex-start">
          <SkeletonTitle />
          <SkeletonSummary />
          <SkeletonSummary />
          <SkeletonSummary />
          <SkeletonSummary />
          <SkeletonSummary />
        </Flex>
        <Flex width="86.25px" direction="row">
          <SkeletonElement />
        </Flex>
        <Flex width="86.25px" direction="row">
          <SkeletonElement />
        </Flex>
        <Flex width="86.25px" direction="row">
          <SkeletonElement />
        </Flex>
        <Flex width="86.25px" direction="row">
          <SkeletonElement />
        </Flex>
        <Flex width="185px" gap={15}>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              리포트 적중률
            </Text>
            <SkeletonBar />
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 적중 소요 기간{" "}
            </Text>
            <SkeletonBar />
          </Flex>
          <Flex align="start" gap={5}>
            <Text size={14} color={palette.color_mainText}>
              첫 예측 실패 소요 기간{" "}
            </Text>
            <SkeletonBar />
          </Flex>
        </Flex>
      </Flex>
    </ContentsBox>
  );
};

const SkeletonTitle = styled(SkeletonItem)`
  width: 60%;
  height: 20px;
  margin-bottom: 16px;
  border-radius: 3px;
`;

const SkeletonSummary = styled(SkeletonItem)`
  width: 99%;
  height: 14px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const SkeletonElement = styled(SkeletonItem)`
  width: 80%;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const SkeletonBar = styled(SkeletonItem)`
  width: 185px;
  height: 26.5px;
`;

export default SkContentBox;
