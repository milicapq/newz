import "./assets/App.scss";
import "./assets/App.js";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Advertisement from "./components/main-content/Advertisement";
import BottomSection from "./components/main-content/BottomSection";
import LatestNews from "./components/main-content/LatestNews";
import MainContent from "./components/main-content/MainContent";
import Pagination from "./components/main-content/Pagination";
import PopularPosts from "./components/main-content/PopularPosts";
import TopColumnist from "./components/main-content/TopColumnist";
import TopVideos from "./components/main-content/TopVideos";
import { infos } from "./data/LatestNewsData";
import { trendingNews } from "./data/TrendingNewsData";
import { news } from "./data/News";
import { popularPosts } from "./data/PopularPostsData";
import { recentlyPosts } from "./data/RecentlyPostsData.jsx";
import { nextVideos } from "./data/NextVideos";
import { columnists } from "./data/ColumnistsData";

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <MainContent news={news} />
      <Advertisement />
      <LatestNews infos={infos} trendingNews={trendingNews} />
      <PopularPosts popularPosts={popularPosts} recentlyPosts={recentlyPosts} />
      <TopVideos nextVideos={nextVideos} />
      <TopColumnist columnists={columnists} />
      <Advertisement />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
