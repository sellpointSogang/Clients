import { palette } from "@styles/palette";
import RadioGroup from "@components/molecules/RadioGroup";
import { Radio } from "@components/molecules/Radio";
import styled from "styled-components";
export const FilterDate = () => {
  return (
    <FilterContainer>
      날짜
      <RadioGroup>
        <Radio name="Date" value="이번주 내" defaultChecked>
          이번주 내
        </Radio>
        <Radio name="Date" value="이번주 내" defaultChecked>
          이번 달 내{" "}
        </Radio>
        <Radio name="Date" value="이번주 내" defaultChecked>
          3개월 내{" "}
        </Radio>
        <Radio name="Date" value="이번주 내" defaultChecked>
          6개월 내{" "}
        </Radio>
        <Radio name="Date" value="이번주 내" defaultChecked>
          1년 내{" "}
        </Radio>
        <Radio name="Date" value="이번주 내" defaultChecked>
          1년 이후{" "}
        </Radio>
      </RadioGroup>
    </FilterContainer>
  );
};

export const FilterReport = () => {};

export const FilterAverageRate = () => {};

export const FilterReportRate = () => {};

const FilterContainer = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  background: ${palette.color_white};
  box-shadow: 2px 2px 20px -5px rgba(0, 0, 0, 0.25);
  padding: 17px 14px;
`;
