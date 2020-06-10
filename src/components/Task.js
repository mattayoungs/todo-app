import React from "react";

import arrow from "../icon/mdi_keyboard_arrow_down.svg";

function Task(props) {
  const handleChangeTodo = (event) => props.onChangeTodo(event, props.task.id);
  const handleDeleteTask = () => props.onDelete(props.task.id);
  return (
    <div className="task-cont">
      <div className="task">
        <input
          onChange={handleChangeTodo}
          defaultChecked={props.task.completed}
          value={props.task.completed}
          className="task__checkbox"
          type="checkbox"
          name=""
          id={props.task.id}
        />
        <label className="task__title" for={props.task.id}>
          {props.task.title}
        </label>
      </div>
      <img className="task-drop-icon" src={arrow} alt="" />
      <button onClick={handleDeleteTask} className="destructive-btn">
        Delete Task
      </button>
    </div>
  );
}

export default Task;
