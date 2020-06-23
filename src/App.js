import React from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import TodoList from "./components/TodoList";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Header from "./components/Header";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
