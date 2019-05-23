import React, {Component} from 'react'
import SimpleSelect from "./SimpleSelect";
import styled from 'styled-components'
import Search from "./SearchComponent";

const SearchStyle = styled.div`
    flex-direction: row
`;

class SearchContent extends Component {

    constructor(props){
        super(props);
    }

    updateBooks = books => {
        this.props.updateBooks(books);
        console.log("SearchContent = "+ books);
    };

    render() {
        return (
            <SearchStyle>
                <Search updateBooks={books => this.updateBooks(books)}/>
                <SimpleSelect>

                </SimpleSelect>
            </SearchStyle>
        );
    }
}

export default SearchContent;