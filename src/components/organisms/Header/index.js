import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "@components/atoms/Flex";
import smallLogo from "@assets/smallLogo.svg";
import { palette } from "@styles/palette";

export const Header = () => {
  return (
    <StyledHeader>
      <Flex
        direction="row"
        justify="start"
        align="center"
        height="100%"
        width="80%"
      >
        <Link to={"/"}>
          <img src={smallLogo} />
        </Link>
      </Flex>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  height: 67px;
  border-bottom: 1px solid ${palette.color_margin};
`;
