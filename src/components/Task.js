import React from "react";
import arrow from "../icon/mdi_keyboard_arrow_down.svg";

function Task(props) {
  const handleChangeTodo = () => props.onChangeTodo(props.task.id);
  const handleDeleteTask = () => props.onDelete(props.task.id);
  return (
    <div className="task">
      <input
        onChange={handleChangeTodo}
        defaultChecked={props.task.completed}
        className="task__checkbox"
        type="checkbox"
        name=""
        id={props.task.id}
      />
      <label className="task__title" for={props.task.id}>
        {props.task.title}
      </label>
      <img className="task-drop-icon" src={arrow} alt="" />

      <button onClick={handleDeleteTask} className="destructive-btn">
        Delete Task
      </button>
    </div>
  );
}

export default Task;
