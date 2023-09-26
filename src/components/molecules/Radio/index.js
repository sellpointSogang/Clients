import styled from "styled-components";
import { Text } from "../../atoms/Text";
import { palette } from "@styles/palette";
export const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  return (
    <RadioLabel>
      <RadioInput
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <Text
        size={12}
        weight={500}
        color={palette.color_mainText}
        cursor="pointer"
      >
        {children}
      </Text>
    </RadioLabel>
  );
};

const RadioLabel = styled.label``;

const RadioInput = styled.input`
  border-radius: 5px;
`;
