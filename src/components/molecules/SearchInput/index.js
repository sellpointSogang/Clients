import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";

const SearchInput = ({
  width,
  placeholder,
  height,
  searchText,
  setSearchText,
  isEnter,
  setIsEnter,
}) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const searchBoxRef = useRef(null);

  // Function to handle outside click
  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setSearchFocused(false);
    }
  };

  // Add click event listener to the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle search input click
  const handleSearchInputClick = () => {
    setSearchFocused(true);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    let key = e.key || e.keycode;
    console.log(key);
    if (key === "Enter") {
      setIsEnter(true);
      console.log(isEnter);
    }
  };

  return (
    <SearchContainer focused={searchFocused} width={width} height={height}>
      <SearchBox ref={searchBoxRef} focused={searchFocused}>
        <div style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              fontSize: "20px",
              color: "#8C8C8C",
              marginLeft: "20px",
              marginTop: "15px",
            }}
          />
          <StyledInput
            onClick={handleSearchInputClick}
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
          />
        </div>
      </SearchBox>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  // transition: height 0.3s ease-in-out;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  color: ${(props) => (props.focused ? "#000" : "#8c8c8c")};
  display: flex;
  justify-content: left;
  background-color: ${palette.color_white};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  margin-left: 15px;
  color: ${(props) => (props.value ? "#000" : "#8c8c8c")};
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  border: none;
  outline: none;
  background: transparent;
`;

export default SearchInput;
