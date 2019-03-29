import React, {PureComponent} from 'react';
import Task from './Task';


class Tasks extends PureComponent {
    constructor({tasks, deleteTask, updateTask}) {
        super();
        this.state = {tasks, deleteTask, updateTask};
    }

    componentWillReceiveProps({tasks}) {
        this.setState({tasks});
    }

    render() {
        return (
            <article>
                <ul>
                    {this.state.tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={this.state.deleteTask}
                            updateTask={this.state.updateTask}
                        />
                    ))}
                </ul>
            </article>
        )
    }
}


export default Tasks;