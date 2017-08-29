import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import CloseIcon from 'material-ui-icons/Close';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import HomeIcon from 'material-ui-icons/Home';
import EventNoteIcon from 'material-ui-icons/EventNote';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {BrowserHistory} from 'react-router-dom';


const styles = {
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
    drawer:{
        backgroundColor:'red'
    }
};

class LeftDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.drawer
        }
        this.handleLeftOpen = this.handleLeftOpen.bind(this);
        this.handleLeftClose = this.handleLeftClose.bind(this);
        this.handleRoute=this.handleRoute.bind(this);

    }
    componentWillReceiveProps(nextProps){
        this.setState({open:nextProps.drawer})
    }



    handleLeftOpen() {
       this.setState({open:true})
    }

    handleLeftClose() {
        this.setState({open:false})
    }
    handleRoute(e){
       console.log(this.ref)
    }


    render() {
        console.log("Inside render method, drawer status is :")

        const classes = this.props.classes;

        const mailFolderListItems = (
            <div>
                <div style={{height: 39, backgroundColor: 'grey'}}>
                    <ArrowBackIcon style={{color:'white'}} className="pull-right" onClick={this.handleLeftClose}/>
                </div>
                <Link to="home">
               <ListItem button value="home" ref="homeRoute" onClick={this.handleRoute}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                </Link>

                <Link to="news"><ListItem button>
                    <ListItemIcon>
                        <EventNoteIcon/>
                    </ListItemIcon>
                    <ListItemText primary="News"/>
                </ListItem></Link>
                <Link to="inbox"><ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                </ListItem>
                </Link>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Send mail"/>
                </ListItem>

            </div>
        );

        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="All mail"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ReportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Spam"/>
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                {/*<List className={classes.list} disablePadding>*/}
                    {/*{otherMailFolderListItems}*/}
                {/*</List>*/}
            </div>
        );

        const fullList = (
            <div>
                <List className={classes.listFull} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.listFull} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );

        return (
            <div >


                <Drawer
                    open={this.state.open}
                    onRequestClose={this.handleLeftClose}
                    onClick={this.handleLeftClose}

                >
                    {sideList}
                </Drawer>

            </div>
        );
    }
}

LeftDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftDrawer);
{/*<Button onClick={this.handleLeftOpen}>Open Left</Button>*/
}
{/*<Button onClick={this.handleRightOpen}>Open Right</Button>*/
}
{/*<Button onClick={this.handleTopOpen}>Open Top</Button>*/
}
{/*<Button onClick={this.handleBottomOpen}>Open Bottom</Button>*/
}
// https://github.com/callemall/material-ui/issues/4752