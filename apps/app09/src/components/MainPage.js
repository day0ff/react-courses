import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {loadUsers} from '../actions/userActions';

class MainPage extends PureComponent {

  handleClick = () => {
    this.props.getUsers();
  };

  render() {
    return (
      <article>
        <button onClick={this.handleClick}>Get Users</button>
      </article>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(loadUsers());
    }
  };
};


export default connect(null, mapDispatchToProps)(MainPage);
