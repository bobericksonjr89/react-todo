import React from "react";
import EditTask from "./EditTask";

class Overview extends React.Component {
  render() {
    const { tasks, onDeleteTask, onEditTask, onResubmitTask } = this.props;
    return (
      <ul className="class-list">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="class-list__item">
              {task.isEditing ? (
                <EditTask task={task} onResubmitTask={onResubmitTask} />
              ) : (
                <div>
                  <li>
                    {task.number}. {task.text}
                  </li>
                  <button
                    className="class-list__button"
                    data-key={task.id}
                    onClick={onEditTask}
                  >
                    Edit
                  </button>
                </div>
              )}
              <div className="class-list__button-group">
                <button
                  className="class-list__button"
                  data-key={task.id}
                  onClick={onDeleteTask}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
