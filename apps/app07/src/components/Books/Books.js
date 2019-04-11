import React, {PureComponent} from 'react';
import Book from './Book';

const INIT_BOOKS = [
  {
    id: 1,
    title: 'Twenty Thousand Leagues Under the Sea',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg/800px-Houghton_FC8_V5946_869ve_-_Verne%2C_frontispiece.jpg'
  },
  {
    id: 2,
    title: 'The Little Prince',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Antoine_de_Saint-Exup%C3%A9ry_-_Le_Petit_Prince_-_12.jpg/220px-Antoine_de_Saint-Exup%C3%A9ry_-_Le_Petit_Prince_-_12.jpg'
  },
  {
    id: 3,
    title: 'Fahrenheit 451',
    img: 'https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg'
  }
];

class Books extends PureComponent {
  constructor() {
    super();
    this.state = {books: INIT_BOOKS};
  }

  render() {
    return (
      <article>
        <h1>Books</h1>
        <div>
          {this.state.books.map(book => (<Book key={book.id} {...book}/> ))}
        </div>
      </article>
    );
  }
}

export default Books;