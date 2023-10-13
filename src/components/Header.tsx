import { useEffect, useContext } from "react";
import BaseButton from "./BaseButton";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../context/commonContext";

const Header = () => {
  const myContext = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    myContext?.setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="px-6 py-2 z-10 items-center fixed inset-0 bg-white h-fit shadow-md"
      style={{ marginTop: "0px" }}
    >
      <div className="w-full h flex items-center justify-between">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/dc/KIU-Logo.jpg"
            className="h-[60px] block md:hidden"
          />
          <img
            src="https://studentaffairs.kiu.edu.pk/wp-content/themes/student-affairs/assets/img/logo-kiu.png"
            className="h-[60px] hidden md:block"
          />
        </Link>
        <div
          onClick={() => myContext?.setIsSidebarOpen(!myContext.isSidebarOpen)}
          className="md:hidden cursor-pointer bg-gray-100 active:bg-gray-200 p-3 rounded-full transition-all duration-200 w-9 h-9 flex items-center justify-center"
        >
          <i className="fa-solid fa-bars text-base"></i>
        </div>
        <Link to="/login" className="hidden md:block">
          <BaseButton title="Sign In" className="w-full" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
