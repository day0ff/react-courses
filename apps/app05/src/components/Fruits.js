import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Fruits.css';
import FruitForm from './FruitForm';

class Fruits extends PureComponent {
  constructor(props) {
    super(props);
    const {fruits} = props;
    this.state = {fruits};
  }

  handleDelete = (event) => {
    const fruits = this.state.fruits.filter(fruit => +fruit.id !== +event.target.parentElement.id);
    this.setState({fruits});
  };

  addFruit = (fruit) => {
    const fruits = this.state.fruits.concat(fruit);
    this.setState({fruits})
  };

  fruitList = () => {
    return this.state.fruits
      .map(fruit =>
        (<li key={fruit.id} id={fruit.id}>
          <span>{fruit.name}</span>
          <span className="cost">{fruit.cost}&nbsp;$</span>
          <span className="delete" onClick={this.handleDelete}>x</span>
        </li>)
      );
  };

  render() {
    return (
      <div className="Fruits">
        <ol>
          {this.fruitList()}
        </ol>
        <FruitForm addFruit={this.addFruit}/>
      </div>
    );
  }
}

export default Fruits;

Fruits.propTypes = {
  fruits: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    cost: PropTypes.number
  }))
};