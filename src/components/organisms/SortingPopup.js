import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@components/atoms/Text";
import Flex from "@components/atoms/Flex";

const SortingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("날짜");
  const [sortOrders, setSortOrders] = useState({
    날짜: "최신 순",
    "평균 적중률": "낮은 순",
    "리포트 적중률": "낮은 순",
  });

  const popupRef = useRef(null);

  const handleCategoryAndSortChange = (category) => {
    handleCategorySelect(category);
    handleSortOrderChange(category);
  };

  const togglePopup = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSortOrderChange = (category) => {
    // Copy the current sortOrders state to avoid mutating it directly
    const newSortOrders = { ...sortOrders };

    if (category === "평균 적중률" || category === "리포트 적중률") {
      // Toggle sorting order between "높은 순" and "낮은 순"
      newSortOrders[category] =
        sortOrders[category] === "높은 순" ? "낮은 순" : "높은 순";
    } else {
      // Toggle sorting order between "최신 순" and "오래된 순"
      newSortOrders[category] =
        sortOrders[category] === "최신 순" ? "오래된 순" : "최신 순";
    }

    // Update the sort orders
    setSortOrders(newSortOrders);
  };

  useEffect(() => {
    // Add a click event listener to the document body
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Container>
      <PopupTrigger onClick={togglePopup}>
        <span>
          <Text size={"14"} weight={"600"}>
            {selectedCategory} {sortOrders[selectedCategory]}
          </Text>
        </span>
        <FontAwesomeIcon icon={faSort} />
      </PopupTrigger>
      {isOpen && (
        <Popup ref={popupRef} onClick={(e) => e.stopPropagation()}>
          <CategoryList>
            <CategoryItem
              onClick={() => handleCategoryAndSortChange("날짜")}
              selected={selectedCategory === "날짜"}
            >
              <Flex direction="row" justify="space-between">
                <Text size={"12"} weight={"600"}>
                  날짜
                </Text>
                {selectedCategory === "날짜" && (
                  <Text size={"12"} weight={"500"}>
                    {sortOrders["날짜"]}
                  </Text>
                )}
              </Flex>
            </CategoryItem>

            <CategoryItem
              onClick={() => handleCategoryAndSortChange("평균 적중률")}
              selected={selectedCategory === "평균 적중률"}
            >
              <Flex direction="row" justify="space-between">
                <Text size={"12"} weight={"600"}>
                  평균 적중률
                </Text>
                {selectedCategory === "평균 적중률" && (
                  <Text size={"12"} weight={"500"}>
                    {sortOrders["평균 적중률"]}
                  </Text>
                )}
              </Flex>
            </CategoryItem>
            <CategoryItem
              onClick={() => handleCategoryAndSortChange("리포트 적중률")}
              selected={selectedCategory === "리포트 적중률"}
            >
              <Flex direction="row" justify="space-between">
                <Text size={"12"} weight={"600"}>
                  리포트 적중률
                </Text>
                {selectedCategory === "리포트 적중률" && (
                  <Text size={"12"} weight={"500"}>
                    {sortOrders["리포트 적중률"]}
                  </Text>
                )}
              </Flex>
            </CategoryItem>
          </CategoryList>
        </Popup>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const PopupTrigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 15px;
`;

const Popup = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.25);
  width: 180px;
  z-index: 1;
  padding: 0px 5px 5px 5px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "transparent")};
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
  margin-top: 5px;
`;

export default SortingPopup;
