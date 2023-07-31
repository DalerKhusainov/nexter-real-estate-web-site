// REACT HOOKS
import React from "react";

// STYLES
import "../styles/sidebar.scss";

// ICONS
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav__btn">
        <AiOutlineMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
