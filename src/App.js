import React from "react";
import "./App.scss";
import add from "./icon/mdi_add.svg";
import list from "./icon/mdi_view_list.svg";
import timer from "./icon/mdi_timelapse.svg";
import settings from "./icon/mdi_settings.svg";
import arrow from "./icon/mdi_keyboard_arrow_down.svg";

function App() {
  return (
    <>
      <header className="navbar">
        <img src={list} alt="" />
        <img src={timer} alt="" />
        <img src={settings} alt="" />
      </header>
      <h1 className="title">To Do App</h1>
      <div className="todo-cont">
        <div className="task">
          <input className="task__checkbox" type="checkbox" name="" id="" />
          <label className="task__title" for="">
            Get Groceries
          </label>
          <img src={arrow} alt="" />
        </div>
        <div className="task">
          <input className="task__checkbox" type="checkbox" name="" id="" />
          <label className="task__title" for="">
            Get Groceries
          </label>
          <img src={arrow} alt="" />
        </div>
        <div className="task">
          <input className="task__checkbox" type="checkbox" name="" id="" />
          <label className="task__title" for="">
            Get Groceries
          </label>
          <img src={arrow} alt="" />
        </div>
      </div>

      <button className="add-task-fab">
        <img src={add} alt="Add Task" />{" "}
      </button>
    </>
  );
}

export default App;
