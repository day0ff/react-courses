import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const FILTERS = [
  value => value,
  value => !value.complete,
  value => value.complete
];

class Filters extends PureComponent {
  constructor({buttons}) {
    super();
    this.state = {buttons};
  }

    handleClick = (event) => {
      const buttonId = event.target.id;

      this.setState(({buttons}) => ({
        buttons: buttons.map(button => ({
          ...button,
          active: button.id === +buttonId
        }))
      }));
      const {filter} = this.props;

      return filter(FILTERS[buttonId]);
    };

    render() {
      const {buttons} = this.state;

      return (
        <nav>
          {
            buttons
              .map(button => (
                <button
                  key={button.id}
                  id={button.id}
                  className={button.active ? 'active' : undefined}
                  onClick={this.handleClick}
                  type="button"
                >
                  {button.label}
                </button>
              ))
          }
        </nav>
      );
    }
}

Filters.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
    })
  ).isRequired,
  filter: PropTypes.func.isRequired
};

export default Filters;
