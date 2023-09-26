import styled from "styled-components";

const AppContainer = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

const StyledApp = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default AppContainer;
