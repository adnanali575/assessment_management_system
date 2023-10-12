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
    bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded active:scale-95 flex justify-center items-center`}
    >
      {isLoading ? <div className="loading-spinner "></div> : <>{title}</>}
    </button>
  );
};

export default BaseButton;
