import React from "react";

interface BaseButton {
  title: string;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
}
const BaseButton: React.FC<BaseButton> = ({
  title,
  isLoading,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className}
    bg-sky-600 hover:bg-sky-500 text-white py-2 px-4 rounded active:scale-95 transition-all duration-200 flex justify-center items-center`}
    >
      {isLoading ? <div className="loading-spinner "></div> : <>{title}</>}
    </button>
  );
};

export default BaseButton;
