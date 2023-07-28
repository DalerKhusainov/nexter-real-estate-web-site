// COMPONENTS
import Sidebar from "../src/components/Sidebar";
import Header from "../src/components/Header";
import Realtors from "../src/components/Realtors";
import Features from "../src/components/Features";
import StoryPictures from "../src/components/StoryPictures";
import StoryContent from "../src/components/StoryContent";
import Homes from "../src/components/Homes";
import Gallery from "../src/components/Gallery";
import Footer from "../src/components/Footer";

// STYLES
import "./App.scss";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
