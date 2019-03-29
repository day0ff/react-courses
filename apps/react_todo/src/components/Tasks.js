import React, {PureComponent} from 'react';
import Task from './Task';

class Tasks extends PureComponent {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <article>
                <ul>
                    <Task/>
                </ul>
            </article>
        )
    }
}


export default Tasks;