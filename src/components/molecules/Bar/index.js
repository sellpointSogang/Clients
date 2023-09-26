import styled from "styled-components";
import { palette } from "@styles/palette";
import Flex from "../../atoms/Flex";
import { Text } from "../../atoms/Text";
const Bar = ({
  percentage,
  height,
  width,
  progressHeight,
  progressWidth,
  progressLeft,
  progressTop,
  children,
}) => {
  return (
    <BarBase height={height} width={width}>
      <BarFill percentage={percentage}>
        <Progress
          progressHeight={progressHeight}
          progressWidth={progressWidth}
          progressTop={progressTop}
          progressLeft={progressLeft}
        >
          <Flex height="100%">
            <Text color={palette.color_white}>{children}</Text>
          </Flex>
        </Progress>
      </BarFill>
    </BarBase>
  );
};

export default Bar;

const BarBase = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 5px;
  background-color: ${palette.color_barBack};
  position: relative;
`;

const BarFill = styled.div`
  width: ${({ percentage }) => percentage};
  height: 100%;
  background-color: ${palette.color_barFill};
  border-radius: 5px 0px 0px 5px;
`;

const Progress = styled.div`
  width: ${({ progressWidth }) => progressWidth};
  height: ${({ progressHeight }) => progressHeight};
  position: absolute;
  left: ${({ progressLeft }) => progressLeft};
  top: ${({ progressTop }) => progressTop};
  background-color: ${palette.color_barInside};
  border-radius: 3px;
`;
