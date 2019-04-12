import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const INIT_Time = {
  time: 3
};

class Cart extends Component {
  interval;
  timer;

  constructor() {
    super();
    this.state = {...INIT_Time}
  }

  componentDidMount() {
    if (!this.props.isLogin) {
      this.redirectUser();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
  }

  seconds = () => {
    this.setState({time: this.state.time - 1});
  };

  redirectUser = () => {
    this.interval = setInterval(this.seconds, 1000);
    this.timer = setTimeout(() => {
      clearInterval(this.interval);
      this.props.history.push('/login');
    }, this.state.time * 1000);
  };


  render() {
    const message = this.props.isLogin ? <p>There are no purchases in your shopping cart.</p> :
      <p>You are not in the system. Redirect in {this.state.time} seconds</p>;
    return (
      <>
        <h1>Cart Page</h1>
        {message}
      </>
    )
  }
}

export default withRouter(Cart);