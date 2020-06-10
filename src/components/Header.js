import React from "react";
import list from "../icon/mdi_view_list.svg";
import timer from "../icon/mdi_timelapse.svg";
import settings from "../icon/mdi_settings.svg";

function Header(prop) {
  return (
    <header className="navbar">
      <img src={list} alt="" />
      <img src={timer} alt="" />
      <img src={settings} alt="" />
    </header>
  );
}

export default Header;
