import { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import BaseButton from "./BaseButton";
import { MyContext } from "../context/commonContext";

const SideBar = () => {
  const myContext = useContext(MyContext);
  const location = useLocation();

  const links = [
    { title: "Home", path: "/" },
    { title: "Add Assessment", path: "/add-assessment" },
    { title: "Previous Assessments", path: "/previous-assessments" },
    { title: "Time Table", path: "/time-table" },
  ];

  useEffect(() => {
    console.log(myContext?.isSidebarOpen);
  }, [myContext?.isSidebarOpen]);
  useEffect(() => {
    console.log(myContext?.isSidebarOpen);
    myContext?.setIsSidebarOpen(false);
  }, [location.pathname]);
  return (
    <>
      <div
        onClick={() => myContext?.setIsSidebarOpen(false)}
        className={`fixed md:hidden top-[76px] bottom-0 left-0 bg-black bg-opacity-40 transition-all duration-200 cursor-pointer w-screen
            ${
              myContext?.isSidebarOpen
                ? `opacity-100`
                : `opacity-0 pointer-events-none`
            }`}
      ></div>
      <div
        className={`fixed top-[76px] bottom-0 left-0 bg-white transition-all shadow-md border-t z-40 ${
          myContext?.isSidebarOpen
            ? `sidebar-translation-reset`
            : `sidebar-translation`
        }`}
      >
        <div
          className={`${`flex items-center flex-col w-[280px] p-6 gap-2 transition-all duration-200`}`}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`${`p-3 md:mx-1 w-full shadow-custom transition-all duration-200 rounded-md text-gray-600`}
              ${`md:shadow-none md:hover:bg-gray-100`} ${
                location.pathname === link.path && `md:bg-gray-100 text-sky-700`
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/login" className="w-full mt-1 block md:hidden">
            <BaseButton title="Sign In" className="w-full" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
