import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Row,Col} from 'react-bootstrap';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

function NewsLetter(props) {
    const classes = props.classes;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Row style={{marginTop:3}}>
            <Col sm={3} className="pull-right">
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="body1" className={classes.title}>
                        Word of the Day
                    </Typography>
                    <Typography type="headline" component="h2">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography type="body1" className={classes.pos}>
                        adjective
                    </Typography>
                    <Typography component="p">
                        well meaning and kindly.<br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense>Learn More</Button>
                </CardActions>
            </Card>
            </Col>
        </Row>
    );
}

NewsLetter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsLetter);
