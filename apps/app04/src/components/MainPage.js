import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    const {count} = props;
    this.state = {count};
  }

  handleClick = (event) => {
    console.log(event.target.tagName);
    event.target.id === "increase" && this.setState(state => ({count: ++state.count}));
    event.target.id === "reduce" && this.setState(state => ({count: --state.count}));
  };

  render() {
    return (
      <article onClick={this.handleClick}>
        <h1>Count : {this.state.count}</h1>
        <button id="increase">Increase</button>
        <button id="reduce">Reduce</button>
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