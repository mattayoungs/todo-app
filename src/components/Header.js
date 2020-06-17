import React from "react";
import list from "../icon/mdi_view_list.svg";
import timer from "../icon/mdi_timelapse.svg";
import settings from "../icon/mdi_settings.svg";
import { NavLink, withRouter } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <NavLink to="/todolist">
        <img src={list} alt="" />
      </NavLink>
      <NavLink to="/">
        <img src={timer} alt="" />
      </NavLink>
      <NavLink to="/">
        <img src={settings} alt="" />
      </NavLink>
    </header>
  );
}

export default withRouter(Header);
