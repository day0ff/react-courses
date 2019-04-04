import React, {PureComponent} from 'react';
import Search from './Search';
import Filters from './Filters';
import AddTodo from './AddTodo';
import Tasks from './Tasks';

const INITIAL_TASK = [];

const INITIAL_BUTTONS = [
  {id: 0, label: 'All', active: true},
  {id: 1, label: 'Active', active: false},
  {id: 2, label: 'Done', active: false}
];

const INITIAL_FILTER = value => value;
const INITIAL_SEARCH = value => value;

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      tasks: INITIAL_TASK, buttons: INITIAL_BUTTONS, filter: INITIAL_FILTER, search: INITIAL_SEARCH
    };
  }

  componentDidMount() {
    const loadTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    this.setState({tasks: loadTasks});
    window.addEventListener('beforeunload', () => {
      const {tasks} = this.state;

      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

    search = (search) => {
      this.setState(() => ({search}));
    };

    filter = (filter) => {
      this.setState(() => ({filter}));
    };

    addTodo = (task) => {
      this.setState(({tasks}) => ({tasks: [task, ...tasks]}));
    };

    deleteTask = (id) => {
      this.setState(({tasks}) => ({tasks: [...tasks.filter(task => task.id !== id)]}));
    };

    updateTask = (task) => {
      this.setState(({tasks}) => ({
        tasks: [...tasks.map(value => (value.id === task.id ? task : value))]
      }));
    };

    render() {
      const {
        buttons, tasks, filter, search
      } = this.state;

      return (
        <div className="app-container">
          <Search search={this.search} />
          <Filters buttons={buttons} filter={this.filter} />
          <AddTodo addTodo={this.addTodo} />
          <Tasks
            tasks={tasks.filter(filter).filter(search)}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
          />
        </div>
      );
    }
}

export default App;
