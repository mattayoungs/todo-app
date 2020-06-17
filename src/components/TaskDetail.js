import React from "react";
import { withRouter } from "react-router-dom";

class TaskDetail extends React.Component {
  state = {
    task: { ...this.getTaskFromList() },
    filterOptions: ["Work", "School", "Life"],
  };
  handleDeleteTask = (state) => {
    this.props.onDeleteTask(state.task.id);
    this.props.history.push("./todolist");
  };

  handleEditTask = (event) => {
    this.props.onEditTask(event, this.state.task.id);
  };

  getTaskFromList() {
    const taskId = this.props.match.params.taskId;
    return this.props.todoList.find((task) => task.id === taskId) || {};
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({ task: { ...this.getTaskFromList() } });
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState((state) => {
      return { task: { ...state.task, [name]: value } };
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    // this.props.onEditTask(event);
    this.handleEditTask(event);
    this.props.history.push("/todolist");
    // alert("dont refresh!");
  }

  render() {
    return (
      <>
        <button onClick={() => this.props.history.push("/todolist")}>
          back
        </button>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <h1>{this.state.task.title}</h1>
          <label>
            <p>Update Title</p>
            <input
              type="text"
              placeholder={this.state.task.title}
              name="title"
              value={this.state.task.title}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            <p>Add description</p>
            <textarea
              col="30"
              row="10"
              placeholder={this.state.task.description}
              name="description"
              value={this.state.task.description}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.task.completed}
              name="completed"
              value={this.state.task.completed}
              onChange={this.handleChange}
            ></input>
            <p>Completed</p>
          </label>

          <label>
            Select Filter
            <select
              name="filter"
              value={this.state.task.filter}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Apply filter
              </option>
              {this.state.filterOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>

          {/* <button
            onClick={(event) => {
              event.preventDefault();
              this.handleDeleteTask();
            }}
          >
            Delete Task
          </button> */}
          <button>Update Task</button>
        </form>
      </>
    );
  }
}

export default withRouter(TaskDetail);
