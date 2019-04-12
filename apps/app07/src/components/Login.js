import React, {PureComponent} from 'react';
import {withRouter} from 'react-router-dom';

const INIT = {
  time: 3
};

class Login extends PureComponent {
  interval;
  timer;

  constructor() {
    super();
    this.state = {time: 0}
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  }

  seconds = () => {
    this.setState({time: this.state.time - 1});
  };

  redirectUser = (location) => {
    this.interval = setInterval(this.seconds, 1000);
    this.timer = setTimeout(() => {
      clearInterval(this.interval);
      this.props.history.push(location);
    }, this.state.time * 1000);
  };


  handleLogin = () => {
    this.setState({...INIT},()=>{
      this.redirectUser('/');
      this.props.handleLogin();
    });
  };

  render() {
    return (<>
      <h1>Login Page</h1>
      <p>
        <b>You are {this.props.isLogin ? 'in the system.' : 'not in the system.'}&nbsp;</b>
        <button
          className={!this.state.time ? 'visible' : 'not-visible'}
          onClick={this.handleLogin}
        >
          {this.props.isLogin ? 'Logout?' : 'Login?'}
        </button>
      </p>
      <p><b className={this.state.time ? 'visible' : 'not-visible'}>Redirect to "Home Page"
        in {this.state.time} seconds.</b></p>
    </>);
  }
}

export default withRouter(Login);