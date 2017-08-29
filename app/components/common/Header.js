import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import '../../resources/css/header.css';

import styled from 'styled-components';


const styles = {
    root: {
        marginTop: -6,
        width: '100%',
        height:45,
        backgroundColor:'grey'
    },
    flex: {
        flex: 1,
    },
    buttonn:{
        marginBottom:18
    },
    login:{
        marginBottom:18
    }
};

function ButtonAppBar(props) {
    const classes = props.classes;
    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {props.children}
                    <IconButton className={classes.buttonn}  onClick={props.handleOpenDrawer} color="contrast" aria-label="Menu">
                        <ArrowForwardIcon className={classes.menu}/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>

                    </Typography>
                    <Button  className={classes.login} color="contrast">Login</Button>
                </Toolbar>

            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);