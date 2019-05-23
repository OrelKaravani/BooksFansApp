import React, {Component} from 'react';
import "./ShellStyle.css";
import SearchContent from "../SearchComponent/SearchContent";
import BookCard from "../BookCard/BookCard";

class Shell extends Component {

    render() {
        return (
          <div className="container">
              <h2> My Future Books!</h2>

              <SearchContent/>

              <BookCard/>

          </div>
        );
    }
}

export default Shell;