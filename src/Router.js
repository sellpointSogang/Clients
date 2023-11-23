import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import StockInfo from "./pages/Stock/StockInfo";
import AnalystInfo from "./pages/Analyst/AnalystInfo";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/stock:id" element={<StockInfo />} />
        <Route path="/analyst/:id" element={<AnalystInfo />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
