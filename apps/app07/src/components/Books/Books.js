import React, {PureComponent} from 'react';
import Book from './Book';
import {Link} from 'react-router-dom';
import {books} from '../../data/bookList'

class Books extends PureComponent {
  render() {
    return (
      <div className="Books">
        <h1>Books Page</h1>
        <hr/>
        <ul>
          {books.map(book => (
            <ol key={book.id}>
              <Link to={`/books/${book.id}`}>
                <Book {...book}/>
              </Link>
            </ol>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;