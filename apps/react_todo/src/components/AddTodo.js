import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const INITIAL_TASK = {
  id: 0, task: '', important: false, complete: false
};

const generateId = () => +`${Math.random()}`.substr(2);

class AddTodo extends PureComponent {
  constructor() {
    super();
    this.state = {todo: INITIAL_TASK};
  }

    handleChange = (event) => {
      const {target: {value}} = event;

      this.setState(({todo}) => ({
        todo: {
          ...todo,
          task: value
        }
      }));
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const {todo} = this.state;

      const {addTodo} = this.props;

      addTodo({
        ...todo,
        id: generateId()
      });
      this.setState(() => ({todo: INITIAL_TASK}));
    };

    render() {
      const {todo: {task}} = this.state;

      return (
        <section>
          <form name="addTodo" onSubmit={this.handleSubmit}>
            <span>New Task</span>
            <textarea
              name="newTodo"
              placeholder="Write new task."
              value={task}
              onChange={this.handleChange}
            />
            <input type="submit" disabled={!task} value="Add" />
          </form>
        </section>
      );
    }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
