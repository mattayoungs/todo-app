import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div style={styles.clock}>
        <p style={styles.clockWelcome}>Welcome, the Time is:</p>
        <h2 style={styles.clockTime}>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const styles = {
  clock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "20rem",
    height: "15rem",
    borderRadius: "2rem",
    backgroundColor: "white",
  },
  clockWelcome: {
    fontFamily: "Helvetica",
    fontSize: "18px",
    lineHeight: "21px",
  },
  clockTime: {
    fontFamily: "Helvetica",
    fontSize: "48px",
  },
};

export default Clock;
