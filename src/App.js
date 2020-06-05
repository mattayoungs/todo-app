import React from "react";
import "./App.scss";
import avatar from "./imgs/useravatar1.JPG";
import Header from "./components/Header";
import ListTitle from "./components/ListTitle";

import Task from "./components/Task";

class App extends React.Component {
  state = {
    todoList: [
      { id: 1, title: "Get Groceries", description: " ", completed: false },
      { id: 2, title: "Walk Dog", description: " ", completed: false },
      { id: 3, title: "Make Dinner", description: " ", completed: false },
      { id: 4, title: "Do Laundry", description: " ", completed: false },
    ],
    user: { name: "Matt", avatarImg: avatar },
    newTask: "",
  };
  handleChangeTask = (event) => {
    console.log(event.target);
    let value = event.target.value;
    this.setState((state) => ({
      newTask: value,
    }));
  };
  handleCheck = (event) => {
    this.setState({ completed: event.task.checked });
  };
  handleAddNewTask = () => {
    let newTaskObj = {
      id: this.state.todoList.length + 1,
      title: this.state.newTask,
      description: "",
      completed: false,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newTaskObj],
      newTask: "",
    }));
  };
  render() {
    return (
      <>
        <Header />
        <div className="app-cont">
          <ListTitle user={this.state.user} />
          <input
            type="text"
            onChange={this.handleChangeTask}
            value={this.state.newTask}
          />
          <button onClick={this.handleAddNewTask}>ADD</button>

          <div className="todo-cont">
            {this.state.todoList.map((taskObject, index) => (
              <Task task={taskObject} key={index} onCheck={this.handleCheck} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
