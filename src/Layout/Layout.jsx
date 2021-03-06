import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Spacestagram</h1>
      </header>
      <div className="layout-children">{children}</div>
      <footer>
        Images brought to you NASA's APOD API 🌙  Created by Heidi Choi
      </footer>
    </div>
  );
};

export default Layout;
