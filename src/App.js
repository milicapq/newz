import "./App.scss";
import Footer from "./pages/components/footer/Footer";
import Header from "./pages/components/header/Header";
import Advertisement from "./pages/components/main-content/Advertisement";
import BottomPart from "./pages/components/main-content/BottomPart";
import LatestNews from "./pages/components/main-content/LatestNews";
import MainContent from "./pages/components/main-content/MainContent";
import Pagination from "./pages/components/main-content/Pagination";
import PopularPosts from "./pages/components/main-content/PopularPosts";
import TopColumnist from "./pages/components/main-content/TopColumnist";
import TopVideos from "./pages/components/main-content/TopVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <MainContent />
      <Advertisement />
      <LatestNews />
      <PopularPosts />
      <TopVideos />
      <TopColumnist />
      <Advertisement />
      <BottomPart />
      <Footer />
    </div>
  );
}

export default App;
