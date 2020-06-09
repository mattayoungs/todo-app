import React from "react";
import shortid from "shortid";
import "./App.scss";
import avatar from "./imgs/useravatar1.JPG";
import Header from "./components/Header";
import ListTitle from "./components/ListTitle";

import Task from "./components/Task";

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

  // handleCheck = (event, id) => {
  //   const checked = event.target.checked;

  //   this.setState((state) => {
  //     let newTodoList = state.todoList.map((task) => {
  //       if (task.id === id) {
  //         return [...this.state.todoList.task.completed, checked];
  //       } else {
  //         return task;
  //       }
  //     });
  // return {
  //   todoList: Object.assign({}, state.todoList, { completed: checked }),
  //   [task]: [...this.state.todoList[task].completed, checked],
  // };
  //   });
  // };

  //   The handleChangeTodo method should take in the id of the item which has been modified.
  // Then you can .map() through the todo list, find the matching item id, and replace it with the new values.
  // This should work just like the Changing an Item section in the Handling Events reading.

  handleChangeTodo = (event, id) => {
    console.log("check!");
    // const id = event.target.id;
    // const value = event.target.checked;
    this.setState((state) => {
      let newList = state.todoList.map((task) => {
        if (task.id === id) {
          // this.handleChange();
          return Object.assign({}, task, { completed: task.completed });
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
      </>
    );
  }
}

export default App;
