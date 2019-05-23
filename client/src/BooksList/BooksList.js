import React, {Component} from 'react'
import BookCard from "../BookCard/BookCard";
import styled from "styled-components";

const BooksListStyle = styled.div`
    display: flex
    flex-direction: row
`;

class BooksList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("books list");
        console.log(this.props.books);
        return (
            <BooksListStyle>
                {
                    this.props.books.map(item => (
                            <BookCard key={new Date()} book={item}/>
                        )
                    )
                }
            </BooksListStyle>
        );
    }
}

export default BooksList;