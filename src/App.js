import GlobalStyle from "./Style/GlobalStyle";
import Router from "./Router";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  max-width: 1920px;
`;

export default App;
