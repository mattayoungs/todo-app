import React from "react";
import Clock from "./clock/Clock";
import "../App.scss";

function Dashboard(props) {
  return (
    <div className="dash-cont">
      <Clock />
    </div>
  );
}

export default Dashboard;
