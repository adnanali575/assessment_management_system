import React from "react";

interface BaseButton {
  title: string;
  isLoading?: boolean;
  className?: string;
}
const BaseButton: React.FC<BaseButton> = ({ title, isLoading, className }) => {
  return (
    <button
      className={`${className} bg-blue-600 text-white flex justify-center items-center px-4 py-2 rounded-md hover:bg-blue-500 active:scale-95`}
    >
      {isLoading ? <div className="loading-spinner "></div> : <>{title}</>}
    </button>
  );
};

export default BaseButton;
