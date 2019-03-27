import React, {PureComponent} from 'react';

// import PropTypes from 'prop-types';

const INITIAL_FRUIT = {id: '', name: '', cost: ''};

class FruitForm extends PureComponent {
  constructor(props) {
    super(props);
    const {addFruit} = props;
    this.state = {fruit: INITIAL_FRUIT, addFruit};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.addFruit({...this.state.fruit});
    this.setState({fruit: INITIAL_FRUIT});
  };

  handleChange = (event) => {
    const fruit = {...this.state.fruit};
    fruit[event.target.name] = event.target.value;
    this.setState({fruit});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="id">id:</label>
        <input name="id" type="text" placeholder="id" value={this.state.fruit.id} onChange={this.handleChange}/>
        <label htmlFor="name">name:</label>
        <input name="name" type="text" placeholder="name" value={this.state.fruit.name} onChange={this.handleChange}/>
        <label htmlFor="cost">cost:</label>
        <input name="cost" type="text" placeholder="cost" value={this.state.fruit.cost} onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    );
  }
}

export default FruitForm;