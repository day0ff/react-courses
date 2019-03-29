import React, {PureComponent} from 'react';

const INITIAL_TASK = {id: 0, task: '', important: false, complete: false};

class AddTask extends PureComponent {
    constructor({addTask}) {
        super();
        this.state = {task: INITIAL_TASK, addTask};
    }

    handleChange = event => {
        const task = {
            ...this.state.task,
            task: event.target.value
        };
        this.setState(() => ({task}))
    };

    handleSubmit = event => {
        event.preventDefault();
        const task = {
            ...this.state.task,
            id: generateId()
        };
        this.state.addTask(task);
        this.setState(() => ({task: INITIAL_TASK}));
    };

    render() {
        return (
            <section>
                <form name="addTodo" onSubmit={this.handleSubmit}>
                    <label htmlFor="newTodo">New Task</label>
                    <textarea
                        name="newTodo"
                        placeholder="Write new task."
                        value={this.state.task.task}
                        onChange={this.handleChange}
                    />
                    <input type="submit" disabled={!this.state.task.task} value="Add"/>
                </form>
            </section>
        )
    }
}

const generateId = () => {
    return +`${Math.random()}`.substr(2);
};

export default AddTask;