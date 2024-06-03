import "./App.scss";
import Footer from "./pages/components/footer/Footer";
import Header from "./pages/components/header/Header";
import Advertisement from "./pages/components/main-content/Advertisement";
import BottomSection from "./pages/components/main-content/BottomSection";
import LatestNews from "./pages/components/main-content/LatestNews";
import MainContent from "./pages/components/main-content/MainContent";
import Pagination from "./pages/components/main-content/Pagination";
import PopularPosts from "./pages/components/main-content/PopularPosts";
import TopColumnist from "./pages/components/main-content/TopColumnist";
import TopVideos from "./pages/components/main-content/TopVideos";
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
