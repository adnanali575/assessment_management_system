import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DefaultLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen pt-[76px] bg-gray-50">
        <Header />
        <div className="flex">
          <SideBar />
          <div className="ps-0 md:ps-[280px] h-full w-full flex justify-center">
            <div className="p-0 sm:p-4 lg:p-8 w-full h-full">
              {children || <Outlet />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
