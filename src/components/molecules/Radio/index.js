import React from "react";
import styled from "styled-components";
import { Text } from "../../atoms/Text";
import { palette } from "@styles/palette";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Radio = ({
  children,
  value,
  name,
  selected,
  onChange,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(value);
    }
  };

  return (
    <RadioLabel onClick={handleClick}>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        checked={selected === value}
        disabled={disabled}
        onChange={() => {}}
      />
      <RadioSquare selected={selected === value}>
        {selected === value && (
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              fontSize: "10px",
              color: "white",
            }}
          />
        )}
      </RadioSquare>
      <LabelText
        size={12}
        weight={500}
        color={palette.color_mainText}
        cursor={disabled ? "not-allowed" : "pointer"}
      >
        {children}
      </LabelText>
    </RadioLabel>
  );
};

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 9px;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioSquare = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: ${(props) => (props.selected ? "none" : "1px solid #8c8c8c")};
  background: ${(props) => (props.selected ? "#717FFE" : "#FFF")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const LabelText = styled(Text)`
  user-select: none;
`;
