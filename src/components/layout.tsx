import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-10 max-w-3xl">
        <main>{children}</main>
      </div>
      <footer className="text-center text-gray-500 text-sm p-4">
        © {new Date().getFullYear()} | Check out{" "}
        <a href="https://gertrude.app">
          Gertrude, a macOS internet filter app.
        </a>
      </footer>
    </div>
  );
};

export default Layout;
