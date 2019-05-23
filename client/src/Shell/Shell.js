import React, {Component} from 'react';
import "./ShellStyle.css";
import SearchContent from "../SearchComponent/SearchContent";
import BooksList from "../BooksList/BooksList";

class Shell extends Component {

    constructor(props){
        super(props);

        this.state = {
            booksToShow: []
        }
    }

    updateBooks = books =>{
        this.setState({booksToShow: books});
    };

    showBooks = () => {
        console.log("TEST");
        if (this.state.booksToShow && this.state.booksToShow.length > 0)
            return <BooksList books={this.state.booksToShow}/>
        else
            return <div></div>
    };

    render() {
        return (
          <div className="container">
              <h2> My Future Books!</h2>

              <SearchContent updateBooks = {books => this.updateBooks(books)}/>

              {this.showBooks()}

          </div>
        );
    }
}

export default Shell;