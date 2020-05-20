import React from "react";
import add from "../icon/mdi_add.svg";

function AddButton() {
  return (
    <button className="add-task-fab">
      <img src={add} alt="Add Task" />
    </button>
  );
}

export default AddButton;
