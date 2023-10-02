import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@components/atoms/Text";

const HoverDescription = ({ description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FontAwesomeIcon
        icon={faInfoCircle}
        style={{ fontSize: "10px", color: "#aeaeae", marginLeft: "7px" }}
      />
      {isHovered && <Description>{description}</Description>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Description = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: #fff;
  padding: 9px 9px 9px 11px;
  border-radius: 5px;
  visibility: visible;
  opacity: 1;
  transition:
    visibility 0.3s,
    opacity 0.3s;
  z-index: 1;
  width: 200px;
  line-height: 19px;
  font-size: 12px;
  font-family: "Pretendard";
  text-align: left;
  white-space: pre-wrap;

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }

  ${Wrapper}:not(:hover) & {
    visibility: hidden;
    opacity: 0;
  }
`;

export default HoverDescription;
