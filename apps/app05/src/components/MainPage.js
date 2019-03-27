import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';
import Fruits from './Fruits';
import ErrorBoundary from "../ErrorBoundary";

class MainPage extends PureComponent {

  constructor(props) {
    super(props);
    const {count} = props;
    this.fruits = [
      {id: 1, name: 'apple', cost: 0.99},
      {id: 2, name: 'orange', cost: 2.15},
      {id: 3, name: 'pineapple', cost: 1.69}
    ];
    this.state = {count};
  }

  handleClick = (event) => {
    console.log(event.target.id);
    event.target.id === "increase" && this.setState(state => ({count: ++state.count}));
    event.target.id === "reduce" && this.setState(state => ({count: --state.count}));
  };

  render() {
    return (
      <article>
        <div onClick={this.handleClick}>
          <h1>Count : {this.state.count}</h1>
          <button id="increase">Increase</button>
          <button id="reduce">Reduce</button>
        </div>
        <hr/>
        <ErrorBoundary>
          <Fruits fruits={this.fruits}/>
        </ErrorBoundary>
      </article>
    );
  }
}

export default MainPage;

MainPage.propTypes = {
  count: PropTypes.number
};

MainPage.defaultProps = {
  count: 0
};