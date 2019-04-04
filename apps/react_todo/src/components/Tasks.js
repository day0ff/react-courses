import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class Tasks extends PureComponent {

  render() {
    const {tasks, deleteTask, updateTask} = this.props;
    return (
      <article>
        <ul>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </ul>
      </article>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(Task.propTypes)
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default Tasks;
