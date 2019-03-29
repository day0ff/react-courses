import React, {PureComponent} from 'react';

class Task extends PureComponent {
    constructor({task, deleteTask, updateTask}) {
        super();
        this.state = {task, deleteTask, updateTask};
    }

    paragraphClasses = () => {
        let className = '';
        className += this.state.task.important ? 'important ' : '';
        className += this.state.task.complete ? 'complete ' : '';
        return className
    };

    handleImportant = () => {
        const task = {...this.state.task, important: !this.state.task.important};
        this.setState({task});
        this.state.updateTask(task);
    };

    handleComplete = () => {
        const task = {...this.state.task, complete: !this.state.task.complete};
        this.setState({task});
        this.state.updateTask(task);
    };

    render() {
        return (
            <li id={this.state.task.id}>
                <button
                    id="mark"
                    className={!this.state.task.important ? 'important' : null}
                    onClick={this.handleImportant}
                >
                    {this.state.task.important ? 'not important' : 'mark important'}
                </button>
                <button id="delete" onClick={() => this.state.deleteTask(this.state.task.id)}/>
                <span className={this.paragraphClasses()} onClick={this.handleComplete}>{this.state.task.task}</span>
            </li>
        )
    }
}


export default Task;