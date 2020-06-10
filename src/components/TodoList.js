// Couldnt make this work how i thought it should

import React from "react";

function TodoList() {
  return (
    <div className="app-cont">
      <div className="title-cont">
        <div className="avatar-img">
          <img src={avatar} alt="{prop.user.name}" />
        </div>
        <h1 className="title">{prop.user.name}'s To Dos</h1>
      </div>
      <div className="todo-cont">
        {prop.todoList.map((taskObject, index) => (
          <Task task={taskObject} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
