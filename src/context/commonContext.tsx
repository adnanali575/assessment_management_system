// MyContext.tsx
import React, { createContext, useState } from "react";

// Define the context type
interface MyContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

// Create a context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a context provider component
const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
