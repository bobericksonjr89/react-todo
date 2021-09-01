import uniqid from "uniqid";
import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        number: 1,
        isEditing: false,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.task.number,
        isEditing: false,
      },
    });
    console.log(this.state);
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.counter++;
    this.setState((prevState) => {
      return {
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: "",
          id: uniqid(),
          number: prevState.task.number + 1,
          isEditing: false,
        },
      };
    });
    console.log(this.state);
  };

  onDeleteTask = (e) => {
    const taskKey = e.target.dataset.key;
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskKey);
    console.log(updatedTasks);
    this.setState({
      tasks: updatedTasks,
    });
  };

  onEditTask = (e) => {
    const taskKey = e.target.dataset.key;
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskKey) {
        task.isEditing = true;
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks,
    });
  };

  onResubmitTask = (task) => {
    const taskKey = task.id;
    const newTaskText = task.text;
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === taskKey) {
        task.text = newTaskText;
        task.isEditing = false;
      }
      return task;
    });

    this.setState({
      tasks: updatedTasks,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="body">
        <header className="header">
          <h1>React Task App</h1>
        </header>
        <main className="main">
          <form className="add-task" onSubmit={this.onSubmitTask}>
            <label className="add-task__label" htmlFor="taskInput">
              Enter task:
            </label>
            <input
              className="add-task__input"
              onChange={this.handleChange}
              value={task.text}
              type="text"
              id="taskInput"
            />
            <button className="add-task__button" type="submit">
              Add Task
            </button>
          </form>
          <Overview
            state={this.state}
            tasks={tasks}
            onDeleteTask={this.onDeleteTask}
            onEditTask={this.onEditTask}
            handleEdit={this.handleEdit}
            onResubmitTask={this.onResubmitTask}
          />
        </main>
      </div>
    );
  }
}

export default App;
