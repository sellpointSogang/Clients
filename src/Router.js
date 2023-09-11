import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
