import { useState } from "react";
import BaseButton from "./BaseButton";
import { Link } from "react-router-dom";

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "Add Assessment", path: "add-assessment" },
    { title: "Previous Assessments", path: "/" },
    { title: "Time Table", path: "/time-table" },
  ];

  return (
    <header className="px-6 py-2 items-center fixed inset-0 bg-white h-fit shadow-md">
      <div className="w-full h flex items-center justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/dc/KIU-Logo.jpg"
          className="h-[60px]"
        />
        <div
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="md:hidden cursor-pointer"
        >
          Toggle
        </div>
        <div
          onClick={() => setSideBarOpen(false)}
          className={`fixed md:hidden top-[76px] bottom-0 left-0 bg-black bg-opacity-40 transition-all duration-200 cursor-pointer w-screen
            ${sideBarOpen ? `opacity-100` : `opacity-0 pointer-events-none`}`}
        ></div>
        <div
          className={`${`fixed flex items-center flex-col p-6 w-[250px] border-t z-40 gap-3 md:gap-0 top-[76px] left-0 bottom-0 transition-all duration-200 bg-white`}
                        ${`md:flex-row md:gap-2 md:p-0 md:static md:border-none md:w-fit`}
                        ${
                          sideBarOpen
                            ? `sidebar-translation-reset`
                            : `sidebar-translation`
                        }`}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`${`p-3 w-full shadow-custom transition-all duration-200 rounded-md text-gray-600`}
              ${`md:w-fit md:shadow-none md:hover:bg-gray-100`}`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/login" className="w-full md:w-fit ms-2">
            <BaseButton title="Sign In" className="w-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
