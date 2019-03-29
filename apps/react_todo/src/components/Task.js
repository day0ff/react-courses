import React, {PureComponent} from 'react';

const INITIAL_TASK = {
    id: 1,
    task: 'Do more tasks.',
    important: true,
    complete: true
};

class Task extends PureComponent {
    constructor(props) {
        super();
        const {id, task, important, complete} = props;
        // this.state = {id, task, important, complete};
        this.state = INITIAL_TASK;
    }

    paragraphClasses = () => {
        let className = '';
        className += this.state.important ? 'important ' : '';
        className += this.state.complete ? 'complete ' : '';
        return className
    };

    markLabel = () => {
        return this.state.important ? 'not important' : 'mark important';
    };

    render() {
        return (
            <li key={this.state.id}>
                <button id="mark" className={!this.state.important && 'important'}>{this.markLabel()}</button>
                <button id="delete" />
                <span className={this.paragraphClasses()}>{this.state.task}</span>
            </li>
        )
    }
}


export default Task;