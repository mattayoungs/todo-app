import React from "react";
import { withRouter } from "react-router-dom";

import arrow from "../icon/mdi_keyboard_arrow_down.svg";

function Task(props) {
  const handleChangeTodo = (event) => props.onChangeTodo(event, props.task.id);
  const handleDeleteTask = () => props.onDelete(props.task.id);
  return (
    <div style={styles.taskCont}>
      <div style={styles.task}>
        <input
          onChange={handleChangeTodo}
          defaultChecked={props.task.completed}
          value={props.task.completed}
          type="checkbox"
          name=""
          id={props.task.id}
        />
        <label style={styles.taskTitle} for={props.task.id}>
          {props.task.title}
        </label>
      </div>
      <img
        style={styles.taskDropIcon}
        src={arrow}
        alt=""
        onClick={() => props.history.push("/todolist/" + props.task.id)}
      />
      <button onClick={handleDeleteTask} style={styles.deleteButton}>
        Delete Task
      </button>
    </div>
  );
}

const styles = {
  taskCont: {
    display: "flex",

    width: "300px",
  },
  task: {
    display: "flex",
    alignItems: "center",
    width: "500px",
    marginBottom: "1rem",
  },
  taskTitle: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
  },
  taskDropIcon: {
    justifySelf: "end",
  },
  deleteButton: {
    border: "0",
    borderRadius: "0.25rem",
    background: "#f06868",
    color: "#ffffff",
    fontSize: "1rem",
    lineHeight: "1.2",
    whiteSpace: "nowrap",
    textDecoration: "none",
    padding: "0.25rem 0.75rem",
    margin: "0.25rem",
  },
};

export default withRouter(Task);
