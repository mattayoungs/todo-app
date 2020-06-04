import React from "react";
import arrow from "../icon/mdi_keyboard_arrow_down.svg";

function Task(props) {
  const handleCheck = () => props.onCheck;
  return (
    <div className="task">
      <input
        onClick={handleCheck}
        className="task__checkbox"
        type="checkbox"
        name=""
        id={props.task.id}
      />
      <label className="task__title" for={props.task.id}>
        {props.task.title}
      </label>
      <img className="task-drop-icon" src={arrow} alt="" />
    </div>
  );
}

export default Task;
