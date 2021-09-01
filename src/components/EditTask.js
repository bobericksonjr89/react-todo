import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: props.task.text,
        id: props.task.id,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEdit = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.task);
    this.props.onResubmitTask(this.state.task);
  }

  render() {
    const task = this.props.task;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.handleEdit}
            value={this.state.task.text}
            id={task.id}
            data-number={task.number}
          />
          <button className="class-list__button" type="submit">
            Resubmit
          </button>
        </form>
      </div>
    );
  }
}

export default EditTask;
