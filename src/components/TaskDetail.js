import React from "react";
import { withRouter } from "react-router-dom";

class TaskDetail extends React.Component {
  state = {
    task: this.getTaskFromList(),
  };
  // handleDeleteTask = () => {props.onDeleteTask(props.task.id);}

  getTaskFromList() {
    const taskId = this.props.match.params.taskId;
    return this.props.todoList.find((task) => task.id === taskId) || {};
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ task: this.getTaskFromList() });
    }
  }
  handleDeleteTask = (id) => {
    this.setState((state) => {
      let newTodoList = state.todoList.filter((task) => {
        return task.id !== id;
      });
      return {
        todoList: newTodoList,
      };
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.task.title}</h1>
        <button onClick={() => this.props.history.push("/todolist")}>
          back
        </button>
      </>
    );
  }
}

export default withRouter(TaskDetail);
