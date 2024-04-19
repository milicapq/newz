import "./App.scss";
import Header from "./pages/components/header/Header";
import Advertisement from "./pages/components/main-content/Advertisement";
import LatestNews from "./pages/components/main-content/LatestNews";
import MainContent from "./pages/components/main-content/MainContent";
import Pagination from "./pages/components/main-content/Pagination";

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <MainContent />
      <Advertisement />
      <LatestNews />
    </div>
  );
}

export default App;
