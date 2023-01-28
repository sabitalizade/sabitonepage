import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Context from "./components/Context";
import SideBar from "./components/SideBar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Cv from "./components/Cv";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row dark:bg-secondarydark">
      <div
        className={
          "flex flex-col transition-all duration-300 w-full lg:w-56 min-w-[190px]"
        }
      >
        <Logo />
        <SideBar />
      </div>
      <div className="flex flex-col w-full">
        <Menu />
        <div className="h-[80vh] overflow-auto scrollbar relative">
          <Routes>
            <Route path="/" element={<Context />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
