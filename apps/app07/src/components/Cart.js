import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import withRedirect from '../HOC/withRedirect';

class Cart extends PureComponent {

  componentDidMount() {
    if (!this.props.isLogin) {
      this.props.redirectUser();
    }
  }

  render() {
    const message = this.props.isLogin ? <p>There are no purchases in your shopping cart.</p> :
      <p>You are not in the system. Redirect to "Login" page in {this.props.time} seconds</p>;
    return (
      <>
        <h1>Cart Page</h1>
        {message}
      </>
    );
  }
}

export default withRouter(withRedirect(Cart, '/login'));
