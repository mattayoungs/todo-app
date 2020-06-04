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
    user: { name: "Matt", avatarImg: { avatar } },
    newTask: {
      id: "",
      title: "",
      description: "",
      completed: false,
    },
  };
  handleChangeTask = (event) => {
    this.setState({ title: event.target.value });
  };
  handleCheck = (event) => {
    this.setState({ completed: event.task.checked });
  };
  handleAddNewTask = () => {
    let newTaskObj = {
      id: this.state.newTask.id,
      title: this.state.newTask.title,
      description: this.state.newTask.description,
      completed: this.state.newTask.completed,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newTaskObj],
      title: "",
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
            value={this.state.newTask.title}
          />
          <button onClick={this.handleAddNewTask}>
            <p>ADD</p>
          </button>

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
