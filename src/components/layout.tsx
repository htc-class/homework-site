import React from "react";
import "./tailwind.css";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10 max-w-3xl">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
