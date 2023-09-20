import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "@components/atoms/Flex";
import smallLogo from "@assets/smallLogo.svg";
export const Header = () => {
  return (
    <StyledHeader>
      <Flex>
        <img src={smallLogo} />
      </Flex>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  width: 100%;
`;
