import "./assets/App.scss";
import "./assets/App.js";
import { Route, Routes } from "react-router";
import NewsCategory from "./page/news/NewsCategory.jsx";
import HomePage from "./page/HomePage.jsx";
import BusinessCategory from "./page/news/BusinessCategory.jsx";
import PoliticCategory from "./page/news/PoliticCategory.jsx";
import MarketCategory from "./page/news/MarketCategory.jsx";
import TechCategory from "./page/news/TechCategory.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/homepage" Component={HomePage} />
        <Route path="/newscategory" Component={NewsCategory} />
        <Route path="/techcategory" Component={TechCategory} />
        <Route path="/businesscategory" Component={BusinessCategory} />
        <Route path="/politiccategory" Component={PoliticCategory} />
        <Route path="/marketcategory" Component={MarketCategory} />
      </Routes>
    </div>
  );
}

export default App;
