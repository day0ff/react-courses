import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import withRedirect, {INIT_TIME} from '../HOC/withRedirect';

class Login extends PureComponent {

  componentDidMount() {
    this.props.setTime({time: 0});
  }

  handleLogin = () => {
    this.props.setTime(INIT_TIME, () => {
      this.props.redirectUser();
      this.props.handleLogin();
    });
  };

  render() {
    return (<>
      <h1>Login Page</h1>
      <p>
        <b>You are {this.props.isLogin ? 'in the system.' : 'not in the system.'}&nbsp;</b>
        <button
          className={!this.props.time ? 'visible' : 'not-visible'}
          onClick={this.handleLogin}
        >
          {this.props.isLogin ? 'Logout?' : 'Login?'}
        </button>
      </p>
      <p><b className={this.props.time ? 'visible' : 'not-visible'}>Redirect to "Home" page
        in {this.props.time} seconds.</b></p>
    </>);
  }
}

export default withRouter(withRedirect(Login, '/'));
