import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";
import styled from "styled-components";
import AppContainer from "@components/templates/AppContainer";
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

export default App;
