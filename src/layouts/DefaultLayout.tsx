import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen pt-[76px] flex flex-col justify-between bg-gray-50 space-y-5">
        <Header />

        {children || <Outlet />}
      </div>
    </>
  );
};

export default DefaultLayout;
