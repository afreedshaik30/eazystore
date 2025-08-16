import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import NewArrival from "./components/sections/NewArrival";
import content from "./data/content.json";
import Category from "./components/sections/Category";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <NewArrival />
      {content?.pages?.shop?.sections &&
        content?.pages?.shop?.sections?.map((item, index) => (
          <Category key={item?.title + index} {...item} />
        ))}
      {/* <Footer content={content?.footer} /> */}
    </div>
  );
};

export default App;
