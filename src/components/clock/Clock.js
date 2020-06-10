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
      <div className="clock">
        <p className="clock-welcome">Welcome, the Time is:</p>
        <h2 className="clock-time">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
