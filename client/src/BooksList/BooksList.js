import React, {Component} from 'react'
import BookCard from "../BookCard/BookCard";


class BooksList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("books list");
        console.log(this.props.books);
        return (
            <div>
                {
                    this.props.books.map(item => (
                            <BookCard key={new Date()} book={item}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default BooksList;