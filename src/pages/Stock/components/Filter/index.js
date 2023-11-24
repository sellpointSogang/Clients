import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp, // Import the caret up icon
  faCalendar,
  faMagnifyingGlassDollar,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import styled from "styled-components";
import SortingPopup from "@components/organisms/SortingPopup";

const Filter = ({
  width,
  height,
  insideWidth,
  insideHeight,
  OrderMode,
  SetOrder,
}) => {
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setCaretIcon1(faCaretDown);
        setCaretIcon2(faCaretDown);
        setCaretIcon3(faCaretDown);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setselectedOption1] = useState(null);
  const [caretIcon1, setCaretIcon1] = useState(faCaretDown); // State to manage the caret icon
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setselectedOption2] = useState(null);
  const [caretIcon2, setCaretIcon2] = useState(faCaretDown);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption3, setselectedOption3] = useState(null);
  const [caretIcon3, setCaretIcon3] = useState(faCaretDown);

  const options1 = [
    "선택 안 함",
    "이번 주 내",
    "이번 달 내",
    "3개월 내",
    "6개월 내",
    "1년 내",
    "1년 이후",
  ];

  const options2 = ["선택 안 함", "70% 이상", "50% 이상"];

  const options3 = ["선택 안 함", "70% 이상", "50% 이상"];

  const toggleDropdown = (filter) => {
    if (filter === 1) {
      setIsOpen1(!isOpen1);
      // Toggle the caret icon
      setCaretIcon1(isOpen1 ? faCaretDown : faCaretUp);
    } else if (filter === 2) {
      setIsOpen2(!isOpen2);
      setCaretIcon2(isOpen2 ? faCaretDown : faCaretUp);
    } else if (filter === 3) {
      setIsOpen3(!isOpen3);
      setCaretIcon3(isOpen3 ? faCaretDown : faCaretUp);
    }
  };

  const handleOptionSelect = (option, filter) => {
    if (filter === 1) {
      setselectedOption1(option);
      setIsOpen1(false);
      setCaretIcon1(faCaretDown); // Reset the caret icon to down when an option is selected
    } else if (filter === 2) {
      setselectedOption2(option);
      setIsOpen2(false);
      setCaretIcon2(faCaretDown);
    } else if (filter === 3) {
      setselectedOption3(option);
      setIsOpen3(false);
      setCaretIcon3(faCaretDown);
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
            {/* Filter 1 */}
            <FilterSection
              isOpen={isOpen1}
              selectedOption={selectedOption1}
              toggleDropdown={() => toggleDropdown(1)}
              handleOptionSelect={(option) => handleOptionSelect(option, 1)}
              options={options1}
              filterName="날짜"
              filterIcon={faCalendar}
              caretIcon={caretIcon1} // Pass the caret icon state
            />

            {/* Filter 2 */}
            <FilterSection
              isOpen={isOpen2}
              selectedOption={selectedOption2}
              toggleDropdown={() => toggleDropdown(2)}
              handleOptionSelect={(option) => handleOptionSelect(option, 2)}
              options={options2}
              filterName="리포트 적중률"
              filterIcon={faMagnifyingGlassDollar}
              caretIcon={caretIcon2}
            />

            {/* Filter 3 */}
            <FilterSection
              isOpen={isOpen3}
              selectedOption={selectedOption3}
              toggleDropdown={() => toggleDropdown(3)}
              handleOptionSelect={(option) => handleOptionSelect(option, 3)}
              options={options3}
              filterName="평균 적중률"
              filterIcon={faFile}
              caretIcon={caretIcon3}
            />

            <Flex direction="row" justify="flex-end">
              <SortingPopup OrderMode={OrderMode} SetOrder={SetOrder} />
            </Flex>
          </Flex>
        </InsideContainer>
      </Flex>
    </FilterContainer>
  );
};

const FilterSection = ({
  isOpen,
  selectedOption,
  toggleDropdown,
  handleOptionSelect,
  options,
  filterName,
  filterIcon,
  caretIcon, // Receive the caret icon from props
}) => {
  return (
    <Flex
      direction="row"
      height="100%"
      gap={10}
      justify="center"
      align="center"
    >
      <FontAwesomeIcon
        icon={filterIcon}
        style={{
          fontSize: "20px",
          color: "#8C8C8C",
        }}
      />
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {selectedOption === "선택 안 함" || !selectedOption
            ? filterName
            : selectedOption}
          <FontAwesomeIcon
            icon={caretIcon} // Use the caret icon from props
            style={{ marginLeft: "5px" }}
            color="#8c8c8c"
          />
        </DropdownButton>
        {isOpen && (
          <DropdownList>
            {options.map((option, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </Flex>
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

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  width: 120px;
  height: 29px;
  border-radius: 20px;
  border: 1px solid #d5d8dc;
  background-color: white;
  padding: 5px 10px;
  cursor: pointer;
  text-align: left;
  padding: 0 10px;
  display: flex;
  align-items: center; /* Center the icon vertically */
  justify-content: space-between; /* Add space between text and icon */
  font-family: "Pretendard";
  font-size: 14px;
  color: #8c8c8c;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  top: 120%;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  font-family: "Pretendard";
  text-align: left;
  z-index: 3;
`;

const DropdownItem = styled.li`
  padding: 10px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
