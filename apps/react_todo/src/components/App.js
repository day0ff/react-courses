import React, {PureComponent} from 'react';
import Header from './Header';
import Filters from './Filters';
import AddTodo from './AddTodo';
import Tasks from './Tasks';

class App extends PureComponent {

    render() {
        return (
            <div className="app-container">
                <Header/>
                <Filters/>
                <AddTodo/>
                <Tasks/>
            </div>
        );
    }
}

export default App;
