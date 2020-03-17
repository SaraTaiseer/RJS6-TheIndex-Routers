import React, { Component } from "react";

//Component 
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
    state = {
        filteredBooks: this.props.books
      };
    
      filterBooks = x => {
        x = x.toLowerCase();
        let BooksFilter = this.props.books.filter(book =>
          book.title.toLowerCase().includes(x)
        );
        this.setState({ filteredBooks:BooksFilter });
      };
    
      filterBooks_Color = bookColor => {
        return this.state.filteredBooks.filter(book => book.color === bookColor);
      };
    
      render() {
        const bookColor = this.props.match.params.bookColor;
        let books = this.state.filteredBooks;
    
        if (bookColor) {
          books = this.filterBooks_Color(bookColor);
        }
    
        return (
          <div>
            <h3>Books</h3>
            <SearchBar handleFilter={this.filterBooks} />
            <BookTable books={books} />
          </div>
        );
      }
    }
    
export default BookList;