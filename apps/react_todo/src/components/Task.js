import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Task extends PureComponent {
  constructor({task}) {
    super();
    this.state = {task};
  }

    paragraphClasses = () => {
      const {task: {important, complete}} = this.state;

      let className = '';
      className += important ? 'important ' : '';
      className += complete ? 'complete ' : '';
      return className;
    };

    handleImportant = () => {
      const {task, task: {important}} = this.state;

      const newTask = {
        ...task,
        important: !important
      };

      this.setState({task: newTask});
      const {updateTask} = this.props;

      updateTask(newTask);
    };

    handleComplete = () => {
      const {task, task: {complete}} = this.state;

      const newTask = {
        ...task,
        complete: !complete
      };

      this.setState({task: newTask});
      const {updateTask} = this.props;

      updateTask(newTask);
    };

    render() {
      const {task: {id, task, important}} = this.state;

      const {deleteTask} = this.props;

      return (
        <li id={id}>
          <button
            type="button"
            id="mark"
            className={!important ? 'important' : null}
            onClick={this.handleImportant}
          >
            {important ? 'not important' : 'mark important'}
          </button>
          <button
            type="button"
            id="delete"
            onClick={() => deleteTask(id)}
          />
          <span className={this.paragraphClasses()} onClick={this.handleComplete}>{task}</span>
        </li>
      );
    }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default Task;
