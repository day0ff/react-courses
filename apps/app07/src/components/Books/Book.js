import React, {PureComponent} from 'react';

class Book extends PureComponent {
  render() {
    return (
      <div className="list-element">
        <h1>{this.props.title}</h1>
        <img src={this.props.img} alt={this.props.title} width="200" height="300"/>
      </div>
    );
  }
}

export default Book;