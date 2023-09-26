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

const Filter = ({
  width,
  height,
  insideWidth,
  insideHeight,
  First,
  Second,
  Third,
}) => {
  return (
    <FilterContainer width={width} height={height}>
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
              <FilterBtn>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {First}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "20px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
              </FilterBtn>
              <FilterBtn>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {Second}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "20px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
              </FilterBtn>
              <FilterBtn>
                <Flex
                  direction="row"
                  justify="space-between"
                  height="19px"
                  width="100%"
                >
                  <Text color={palette.color_subText} size={14} weight={500}>
                    {Third}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{
                      fontSize: "20px",
                      color: "#8C8C8C",
                    }}
                  />
                </Flex>
              </FilterBtn>
            </Flex>
            <Flex direction="row" justify="flex-end">
              <ArrangeBtn>
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
              </ArrangeBtn>
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
