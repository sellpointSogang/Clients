import { palette } from "@styles/palette";
import RadioGroup from "@components/molecules/RadioGroup";
import { Radio } from "@components/molecules/Radio";
import styled from "styled-components";
import { Text } from "@components/atoms/Text";
import React, { useState } from "react";
import Flex from "@components/atoms/Flex";

export const FilterDate = ({ selectedDate, onSelect }) => {
  const handleDateChange = (date) => {
    onSelect(date);
  };

  return (
    <FilterContainer>
      <Flex justify={"column"} align={"left"}>
        <Text weight={"700"} size={"13px"}>
          날짜
        </Text>
      </Flex>
      <RadioGroup>
        <Radio
          name="Date"
          value="이번주 내"
          selected={selectedDate === "이번주 내"}
          onChange={() => handleDateChange("이번주 내")}
        >
          이번주 내
        </Radio>
        <Radio
          name="Date"
          value="이번 달 내"
          selected={selectedDate === "이번 달 내"}
          onChange={() => handleDateChange("이번 달 내")}
        >
          이번 달 내
        </Radio>
        <Radio
          name="Date"
          value="3개월 내"
          selected={selectedDate === "3개월 내"}
          onChange={() => handleDateChange("3개월 내")}
        >
          3개월 내
        </Radio>
        <Radio
          name="Date"
          value="6개월 내"
          selected={selectedDate === "6개월 내"}
          onChange={() => handleDateChange("6개월 내")}
        >
          6개월 내
        </Radio>
        <Radio
          name="Date"
          value="1년 내"
          selected={selectedDate === "1년 내"}
          onChange={() => handleDateChange("1년 내")}
        >
          1년 내
        </Radio>
        <Radio
          name="Date"
          value="1년 이후"
          selected={selectedDate === "1년 이후"}
          onChange={() => handleDateChange("1년 이후")}
        >
          1년 이후
        </Radio>
      </RadioGroup>
      <Flex>
        <ApplyButton>
          <Text color={"white"} size={"12"} weight={"700"}>
            적용
          </Text>
        </ApplyButton>
      </Flex>
    </FilterContainer>
  );
};

export const FilterReport = ({ selectedReport, onSelect }) => {
  const handleReportChange = (report) => {
    onSelect(report);
  };

  return (
    <FilterContainer>
      <Flex justify={"column"} align={"left"}>
        <Text weight={"700"} size={"13px"}>
          리포트 종류
        </Text>
      </Flex>
      <RadioGroup>
        <Radio
          name="Report"
          value="Sell"
          selected={selectedReport === "Sell"}
          onChange={() => handleReportChange("Sell")}
        >
          Sell
        </Radio>
        <Radio
          name="Report"
          value="Hold"
          selected={selectedReport === "Hold"}
          onChange={() => handleReportChange("Hold")}
        >
          Hold
        </Radio>
        <Radio
          name="Report"
          value="Buy"
          selected={selectedReport === "Buy"}
          onChange={() => handleReportChange("Buy")}
        >
          Buy
        </Radio>
      </RadioGroup>
      <Flex>
        <ApplyButton>
          <Text color={"white"} size={"12"} weight={"700"}>
            적용
          </Text>
        </ApplyButton>
      </Flex>
    </FilterContainer>
  );
};

export const FilterAverageRate = () => {};

export const FilterReportRate = ({ selectedReportRate, onSelect }) => {
  const handleReportRateChange = (report) => {
    onSelect(report);
  };

  return (
    <FilterContainer>
      <Flex justify={"column"} align={"left"}>
        <Text weight={"700"} size={"13px"}>
          리포트 적중률
        </Text>
      </Flex>
      <RadioGroup>
        <Radio
          name="Report"
          value="Sell"
          selected={selectedReportRate === "Sell"}
          onChange={() => handleReportRateChange("Sell")}
        >
          70% 이상
        </Radio>
        <Radio
          name="Report"
          value="Hold"
          selected={selectedReportRate === "Hold"}
          onChange={() => handleReportRateChange("Hold")}
        >
          50% 이상
        </Radio>
      </RadioGroup>
      <Flex>
        <ApplyButton>
          <Text color={"white"} size={"12"} weight={"700"}>
            적용
          </Text>
        </ApplyButton>
      </Flex>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  border-radius: 5px;
  background: ${palette.color_white};
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.25);
  padding: 17px 14px;
  z-index: 1;
  position: absolute;
`;

const ApplyButton = styled.button`
  height: 30px;
  width: 172px;
  background: ${palette.color_barFill};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;
