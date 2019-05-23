import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        padding: '2px 4px',
        display: 'inline-flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};


class Search extends Component {

    constructor (props){
        super(props);
    }

    handleChange = event => {

    };

    render (){
        return (
            <Paper className={this.props.root} elevation={1}>
                <InputBase className={this.props.input} placeholder="Try Harry Potter" onChange={this.handleChange}/>
                <IconButton className={this.props.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <Divider className={this.props.divider} />
            </Paper>
        );
    }

}

export default withStyles(styles)(Search);