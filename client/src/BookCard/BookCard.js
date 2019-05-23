import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

function BookCard(props) {
    const { classes } = props;
    const { book } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title={book.data.title}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.data.title}
                    </Typography>
                    <Typography component="p">
                       מחיר: {book.data.price}
                    </Typography>
                    <Typography component="p">
                       סופר: {book.data.author}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default withStyles(styles)(BookCard);