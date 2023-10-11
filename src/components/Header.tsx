import { useState } from "react";
import BaseButton from "./BaseButton";

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const links = [
    { title: "Add Assessment", path: "#" },
    { title: "Previous Assessments", path: "#" },
    { title: "Time Table", path: "#" },
  ];

  const translation = { transform: "translateX(-100%)" };
  return (
    <div className="h-[76px]">
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
            style={sideBarOpen ? {} : translation}
            className={`p-4 bg-white  fixed top-[76px] w-[300px] border-t bottom-0 left-0 flex items-center gap-3 flex-col transition-all duration-300
            ${`md:w-fit md:p-0 md:border-none md:static md:flex-row`}`}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.path}
                className={`${`p-3 w-full shadow-custom transition-all duration-200 rounded-md  text-gray-700`}
              ${`md:w-fit md:shadow-none`}`}
              >
                {link.title}
              </a>
            ))}
            <BaseButton title="Sign In" className="w-full md:w-fit" />
            <BaseButton title="Sign Up" className="w-full md:w-fit" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
