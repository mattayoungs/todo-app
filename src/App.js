import React from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import TodoList from "./components/TodoList";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route>
            <Header />
            <Switch>
              <Route path="/todolist">
                <TodoList />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
