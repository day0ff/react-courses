import React, {PureComponent} from 'react';

export const INIT_TIME = {
  time: 3
};

const withRedirect = (WrappedComponent, location) => {


  class WithRedirect extends PureComponent {
    interval;
    timer;

    constructor() {
      super();
      this.state = {
        ...INIT_TIME
      };
    }

    componentWillUnmount() {
      clearInterval(this.interval);
      clearTimeout(this.timer);
    }

    setTime = (time, callback) => {
      this.setState({...time}, callback);
    };

    seconds = () => {
      this.setState({time: this.state.time - 1});
    };

    redirectUser = () => {
      this.interval = setInterval(this.seconds, 1000);
      this.timer = setTimeout(() => {
        clearInterval(this.interval);
        this.props.history.push(location);
      }, this.state.time * 1000);
    };

    render() {
      return <WrappedComponent
        time={this.state.time}
        interval={this.interval}
        timer={this.timer}
        setTime={this.setTime}
        seconds={this.seconds}
        redirectUser={this.redirectUser}
        {...this.props}
      />;
    }
  }

  return WithRedirect;
};

export default withRedirect;
