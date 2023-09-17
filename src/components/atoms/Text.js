import styled from "styled-components";

export const Text = ({
  size = 10,
  weight = 500,
  color = "black",
  children,
  variant,
  spacing = "-0px",
  font = "Noto Sans KR",
  cursor = "auto",
  lineHeight = "120%",
  align = "center",
  isCut = false,
  cutLine = 1,
  onClick = () => {
    return;
  },
  ...rest
}) => {
  return (
    <StyledText
      size={size}
      font={font}
      align={align}
      weight={weight}
      color={color}
      onClick={onClick}
      isCut={isCut}
      spacing={spacing}
      cursor={cursor}
      lineHeight={lineHeight}
      cutLine={cutLine}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  word-wrap: break-word;
  font-family: ${({ font }) => font};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  ${({ isCut, cutLine }) =>
    isCut
      ? `
    overflow : hidden;
    text-overflow : ellipsis;
    display : -webkit-box;
    -webkit-line-clamp: ${cutLine};
    -webkit-box-orient: vertical;
  `
      : ""}
  letter-spacing: ${({ spacing }) => spacing};
  cursor: ${({ cursor }) => cursor};
`;
