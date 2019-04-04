import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import logoImg from '../images/logo.png';
import searchImg from '../images/Search.png';

class Search extends PureComponent {
  constructor() {
    super();
    this.state = {value: ''};
  }

    handleChange = (event) => {
      const {target: {value}} = event;

      this.setState({value});
      const {search} = this.props;

      return search(variable => variable.task.includes(value));
    };

    render() {
      const {value} = this.state;

      return (
        <header>
          <img src={logoImg} alt="SENLA" />
          <input type="image" name="search" alt="search" src={searchImg} disabled />
          <input
            type="search"
            placeholder="Search task for to do"
            value={value}
            onChange={this.handleChange}
          />
        </header>
      );
    }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
