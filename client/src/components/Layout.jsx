import Navbar from "./Navbar";
import Footer from "./Footer";
import content from "../data/content.json";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer content={content?.footer} />
    </div>
  );
};

export default Layout;
