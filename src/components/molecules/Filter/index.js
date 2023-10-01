import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCaretDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import styled from "styled-components";
import {
  FilterDate,
  FilterReport,
  FilterReportRate,
} from "@components/organisms/FilterRadio";
import SortingPopup from "@components/organisms/SortingPopup";

const Filter = ({
  width,
  height,
  insideWidth,
  insideHeight,
  First,
  Second,
  Third,
}) => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenThird, setIsOpenThird] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpenFirst(false);
        setIsOpenSecond(false);
        setIsOpenThird(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (option) => {
    setSelectedOption(option);
    setIsOpenFirst(false);
    setIsOpenSecond(false);
    setIsOpenThird(false);

    switch (option) {
      case "First":
        setIsOpenFirst(true);
        break;
      case "Second":
        setIsOpenSecond(true);
        break;
      case "Third":
        setIsOpenThird(true);
        break;
      default:
        break;
    }
  };

  return (
    <FilterContainer width={width} height={height} ref={filterRef}>
      <Flex height="100%">
        <InsideContainer width={insideWidth} height={insideHeight}>
          <Flex
            direction="row"
            height="100%"
            align="center"
            width={insideWidth}
            justify="space-between"
          >
            <Flex
              direction="row"
              height="100%"
              gap={10}
              justify="center"
              align="center"
            >
              <FontAwesomeIcon
                icon={faFilter}
                style={{
                  fontSize: "20px",
                  color: "#8C8C8C",
                }}
              />
              <FilterBtn onClick={() => toggleDropdown("First")}>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {selectedOption === "First" ? First : "날짜"}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "10px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
                {isOpenFirst && (
                  <FilterDate
                    selectedDate={selectedOption === "First"}
                    onSelect={(date) => {
                      setSelectedOption("First");
                      setIsOpenFirst(false);
                    }}
                  />
                )}
              </FilterBtn>
              <FilterBtn onClick={() => toggleDropdown("Second")}>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {selectedOption === "Second" ? Second : "리포트 적중률"}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "10px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
                {isOpenSecond && (
                  <FilterReportRate
                    selectedReportRate={selectedOption === "Second"}
                    onSelect={(reportRate) => {
                      setSelectedOption("Second");
                      setIsOpenSecond(false);
                    }}
                  />
                )}
              </FilterBtn>
              <FilterBtn onClick={() => toggleDropdown("Third")}>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {selectedOption === "Third" ? Third : "리포트 종류"}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "10px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
                {isOpenThird && (
                  <FilterReport
                    selectedReport={selectedOption === "Third"}
                    onSelect={(report) => {
                      setSelectedOption("Third");
                      setIsOpenThird(false);
                    }}
                  />
                )}
              </FilterBtn>
            </Flex>
            <Flex direction="row" justify="flex-end">
              {/* <ArrangeBtn>
                <Flex direction="row" gap={6}>
                  <Text
                    weight={600}
                    size={14}
                    color={palette.color_mainText}
                    cursor="pointer"
                  >
                    최신 순
                  </Text>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{
                      fontSize: "10px",
                      color: "black",
                    }}
                  />
                </Flex>
              </ArrangeBtn> */}
              <SortingPopup />
            </Flex>
          </Flex>
        </InsideContainer>
      </Flex>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${palette.color_white};
  border-radius: 5px;
`;

const InsideContainer = styled.div`
  width: ${({ insideWidth }) => insideWidth};
  height: ${({ insideHeight }) => insideHeight};
`;

const FilterBtn = styled.div`
  width: 115px;
  height: 29px;
  border-radius: 20px;
  border: 1px solid #d5d8dc;
  padding: 5px 10px;
  cursor: pointer;
`;

const ArrangeBtn = styled.div`
  cursor: pointer;
`;
