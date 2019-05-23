import React, {Component} from 'react'
import SimpleSelect from "./SimpleSelect";
import styled from 'styled-components'
import Search from "./SearchComponent";

const SearchStyle = styled.div`
    flex-direction: row
`;

class SearchContent extends Component {

    render() {
        return (
            <SearchStyle>
                <Search />
                <SimpleSelect>

                </SimpleSelect>
            </SearchStyle>
        );
    }
}

export default SearchContent;