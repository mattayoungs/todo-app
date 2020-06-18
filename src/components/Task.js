import React from "react";
import { withRouter } from "react-router-dom";
import arrow from "../icon/mdi_keyboard_arrow_down.svg";
import styled from "styled-components";
import BadButton from "./BadButton";

function Task(props) {
  const handleChangeTodo = (event) => props.onChangeTodo(event, props.task.id);
  const handleDeleteTask = () => props.onDelete(props.task.id);
  return (
    <TaskCont>
      <TaskStyle>
        <input
          onChange={handleChangeTodo}
          defaultChecked={props.task.completed}
          value={props.task.completed}
          type="checkbox"
          name=""
          id={props.task.id}
        />
        <TaskTitle completeStyle={props.task.completed} for={props.task.id}>
          {props.task.title}
        </TaskTitle>
      </TaskStyle>
      <img
        src={arrow}
        alt=""
        onClick={() => props.history.push("/todolist/" + props.task.id)}
      />
      {/* <BadButton onClick={handleDeleteTask}>Delete</BadButton> */}
    </TaskCont>
  );
}

const TaskCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 300px;
  padding: 0rem 1rem;
  &:hover{
    box-shadow 2px 2px 5px #c2c2c2
  }
`;

const TaskStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;
  margin-bottom: 1rem;
`;

const TaskTitle = styled.p`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  padding-left: 0.5rem;
  opacity: ${(props) => (props.completeStyle ? 0.2 : 1)};
`;

export default withRouter(Task);
