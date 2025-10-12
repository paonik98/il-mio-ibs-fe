import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
        {children}
      </main>
    </>
  );
};

export default Layout;
