import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Logo } from "./Logo.svg";
import Flex from "../../components/atoms/Flex";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SearchResults from "./SearchResults";

const Search = () => {
  const API_URL = `https://port-0-server-51ih2alrhinkm9.sel5.cloudtype.app/`;
  /* 주식 리스트를 생성하기 위함 */
  const [stockList, setStockList] = useState([]);
  /* 애널리스트 리스트를 생성하기 위함 */
  const [anList, setAnList] = useState([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchBoxRef = useRef(null);

  // Function to handle outside click
  const handleClickOutside = (e) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
      setSearchFocused(false);
    }
  };

  /* search api와 통신하는 함수 */
  const getData = () => {
    axios
      .get(`${API_URL}search/?query=${searchText}`)
      .then((response) => {
        console.log(response.data);
        setStockList([...response.data.stocks]);
        setAnList([...response.data.analysts]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setStockList([]);
    setAnList([]);
    getData();
  }, [searchText]);

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

  return (
    <Flex>
      <div style={{ marginTop: "220px" }} />
      <Logo width={280} height={49} />
      <SearchContainer focused={searchFocused}>
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
            <SearchInput
              onClick={handleSearchInputClick}
              value={searchText}
              onChange={handleInputChange}
              placeholder="종목 명, 애널리스트 명을 검색해 보세요."
            />
          </div>
          {searchFocused ? (
            <SearchResultsContainer>
              <SearchResults stockList={stockList} anList={anList} />
            </SearchResultsContainer>
          ) : null}
        </SearchBox>
      </SearchContainer>
    </Flex>
  );
};

const SearchContainer = styled.div`
  position: relative;
  width: 500px;
  height: ${(props) => (props.focused ? "auto" : "50px")};
  max-height: ${(props) => (props.focused ? "400px" : "50px")};
  margin-top: 50px;
  transition: height 0.3s ease-in-out;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #d5d8dc; /* Add border */
  border-radius: 10px;
  color: ${(props) => (props.focused ? "#000" : "#8c8c8c")};
  display: flex;
  justify-content: left;
  box-shadow: ${(props) =>
    props.focused ? "2px 2px 20px -5px rgba(0, 0, 0, 0.25)" : "none"};
`;

const SearchInput = styled.input`
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

const SearchResultsContainer = styled.div`
  max-height: 350px; /* Set a max height for SearchResultsContainer */
  overflow-y: auto; /* Add scrollbar when content exceeds max height */
`;

export default Search;
