import React from "react";
import "./App.scss";
import add from "./icon/mdi_add.svg";
import list from "./icon/mdi_view_list.svg";
import timer from "./icon/mdi_timelapse.svg";
import settings from "./icon/mdi_settings.svg";
import arrow from "./icon/mdi_keyboard_arrow_down.svg";
import avatar from "./imgs/useravatar1.JPG";

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
      <header className="navbar">
        <img src={list} alt="" />
        <img src={timer} alt="" />
        <img src={settings} alt="" />
      </header>
      <div className="app-cont">
        <div className="title-cont">
          <div className="avatar-img">
            <img src={avatar} />
          </div>
          <h1 className="title">{user.name}'s To Dos</h1>
        </div>
        <div className="todo-cont">
          {todoList.map((task) => (
            <div className="task">
              <input
                className="task__checkbox"
                type="checkbox"
                name=""
                id={task.id}
              />
              <label className="task__title" for={task.id}>
                {task.title}
              </label>
              <img className="task-drop-icon" src={arrow} alt="" />
            </div>
          ))}
        </div>

        <button className="add-task-fab">
          <img src={add} alt="Add Task" />
        </button>
      </div>
    </>
  );
}

export default App;
