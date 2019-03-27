import React, {PureComponent} from 'react';

class ErrorBoundary extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {error: null};
  }

  componentDidCatch(error, info) {
    this.setState({error});
  }

  render() {
    const {error} = this.state;
    const {children} = this.props;
    return (
      error ? <h2 className="error">Something went wrong, sorry.</h2> : children
    )
  }
}

export default ErrorBoundary;