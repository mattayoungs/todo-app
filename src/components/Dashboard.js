import React from "react";
import Clock from "./clock/Clock";
import "../App.scss";

function Dashboard(props) {
  return (
    <div style={styles.dashCont}>
      <Clock />
    </div>
  );
}

const styles = {
  dashCont: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(137.93deg, #f06868 23.83%, #517ded 98.91%)",
  },
};

export default Dashboard;
