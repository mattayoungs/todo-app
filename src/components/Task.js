import React from "react";
import arrow from "../icon/mdi_keyboard_arrow_down.svg";

function Task(prop) {
  return (
    <div className="task">
      <input
        className="task__checkbox"
        type="checkbox"
        name=""
        id={prop.task.id}
      />
      <label className="task__title" for={prop.task.id}>
        {prop.task.title}
      </label>
      <img className="task-drop-icon" src={arrow} alt="" />
    </div>
  );
}

export default Task;
