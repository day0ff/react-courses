import React, {PureComponent} from 'react';
import {books} from '../../data/bookList'

class Book extends PureComponent {
  render() {
    const {match} = this.props;
    const book = match ? books.find((book) => book.id === +match.params.id) : {...this.props};
    return (
        <div className="Book">
          <h1><span>{book.title}</span></h1>
          <img src={book.img} alt={book.title} width="200" height="300"/>
        </div>
    );
  }
}

export default Book;