import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button";
import BadButton from "./BadButton";

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
      <div style={styles.formCont}>
        <Button onClick={() => this.props.history.push("/todolist")}>
          Back
        </Button>

        <form
          style={styles.form}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div>
            <label>
              <p style={styles.inputLabel}>Update Title</p>
              <input
                type="text"
                placeholder={this.state.task.title}
                name="title"
                value={this.state.task.title}
                onChange={this.handleChange}
              ></input>
            </label>
          </div>
          <div>
            <label>
              <p style={styles.inputLabel}>Add description</p>
              <textarea
                col="30"
                row="10"
                placeholder={this.state.task.description}
                name="description"
                value={this.state.task.description}
                onChange={this.handleChange}
              ></textarea>
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                defaultChecked={this.state.task.completed}
                name="completed"
                value={this.state.task.completed}
                onChange={this.handleChange}
              ></input>
              <p style={styles.inputLabel}>Completed</p>
            </label>
          </div>
          <div>
            <label>
              <p style={styles.inputLabel}>Select Filter</p>
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
          </div>

          <div>
            <BadButton
              onClick={(event) => {
                event.preventDefault();
                this.handleDeleteTask();
              }}
            >
              Delete
            </BadButton>
            <Button primary>Update</Button>
          </div>
        </form>
      </div>
    );
  }
}
const styles = {
  formCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },

  inputLabel: {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
  },
};
export default withRouter(TaskDetail);
