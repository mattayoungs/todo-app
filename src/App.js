import React from "react";
import shortid from "shortid";
import "./App.scss";
import avatar from "./imgs/useravatar1.JPG";
import Header from "./components/Header";
import ListTitle from "./components/ListTitle";

import Task from "./components/Task";

const TODO_LIST_KEY = "myapp_todoList";
// let todoStr = JSON.stringify(this.state.todoList);

class App extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        title: "Get Groceries",
        description: " ",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Walk Dog",
        description: " ",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Make Dinner",
        description: " ",
        completed: false,
      },
      {
        id: shortid.generate(),
        title: "Do Laundry",
        description: " ",
        completed: false,
      },
    ],
    user: { name: "Matt", avatarImg: avatar },
    newTask: "",
  };

  componentDidMount(state) {
    const listStr = localStorage.getItem(TODO_LIST_KEY);
    if (listStr) {
      this.setState((state = { todoList: JSON.parse(listStr) }));
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.todoList !== prevState.todoList) {
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(this.state.todoList));
    }
  }

  handleChangeTask = (event) => {
    let value = event.target.value;
    this.setState((state) => ({
      newTask: value,
    }));
  };

  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleChangeTodo = (event, id) => {
    console.log("check!");
    console.log(event);
    let value = event.target.checked;
    this.setState((state) => {
      let newList = state.todoList.map((task) => {
        if (task.id === id) {
          return Object.assign({}, task, { completed: value });
        } else {
          return task;
        }
      });
      return {
        todoList: newList,
      };
    });
  };

  handleAddNewTask = () => {
    let newTaskObj = {
      id: shortid.generate(),
      title: this.state.newTask,
      description: "",
      completed: false,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newTaskObj],
      newTask: "",
    }));
  };

  handleDeleteTask = (id) => {
    this.setState((state) => {
      let newTodoList = state.todoList.filter((task) => {
        return task.id !== id;
      });
      return {
        todoList: newTodoList,
      };
    });
  };

  render() {
    return (
      <div className="app-cont">
        <Header />
        <div className="list-cont">
          <ListTitle user={this.state.user} />
          <div>
            <input
              type="text"
              onChange={this.handleChangeTask}
              value={this.state.newTask}
              className="add-task-feild"
            />
            <button onClick={this.handleAddNewTask} className="add-task-btn">
              ADD
            </button>
          </div>

          <div className="todo-cont">
            {this.state.todoList.map((taskObject) => (
              <Task
                task={taskObject}
                key={taskObject.id}
                onChangeTodo={this.handleChangeTodo}
                onDelete={this.handleDeleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
