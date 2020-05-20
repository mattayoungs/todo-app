import React from "react";
import "./App.scss";
import avatar from "./imgs/useravatar1.JPG";
import Header from "./components/Header";
import AddButton from "./components/AddButton";
import Task from "./components/Task";

const todoList = [
  { id: 1, title: "Get Groceries", description: " ", completed: false },
  { id: 2, title: "Walk Dog", description: " ", completed: false },
  { id: 3, title: "Make Dinner", description: " ", completed: false },
  { id: 4, title: "Do Laundry", description: " ", completed: false },
];
const user = {
  name: "Matt",
  avatarImg: { avatar },
};
function App() {
  return (
    <>
      <Header />
      <div className="app-cont">
        <div className="title-cont">
          <div className="avatar-img">
            <img src={avatar} alt="{prop.user.name}" />
          </div>
          <h1 className="title">{user.name}'s To Dos</h1>
        </div>
        <div className="todo-cont">
          {todoList.map((taskObject, index) => (
            <Task task={taskObject} key={index} />
          ))}
        </div>
      </div>

      <AddButton />
    </>
  );
}

export default App;
