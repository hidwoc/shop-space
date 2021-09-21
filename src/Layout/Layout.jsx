import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>Spacestagram</header>
      <div className="layout-children">{children}</div>
      <footer>
        Images brought to you NASA's APOD API 🌙 Created by Heidi Choi
      </footer>
    </div>
  );
};

export default Layout;
