import React, {PureComponent} from 'react';


class AddTodo extends PureComponent {
    constructor() {
        super();
        this.state = {todo: null};
    }


    render() {
        return (
            <section>
                <form name="addTodo">
                    <label htmlFor="newTodo">New Task</label>
                    <textarea name="newTodo" placeholder="Write new task."/>
                    <input type="submit" disabled={!this.state.todo} value="Add"/>
                </form>
            </section>
        )
    }
}


export default AddTodo;