import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui-icons/Grade';
// import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui-icons/Inbox';
// import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui-icons/Drafts';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui-icons/Send';
// import ContentSend from 'material-ui/svg-icons/content/send'
import Subheader from 'material-ui/Subheader'
// import Toggle from 'material-ui/Toggle'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import classnames from 'classnames'
import './test.css';

export class test extends React.Component {
    constructor(props){
        super(props)
        this.state = {open: true}
        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleToggle() {
        this.setState({open: !this.state.open})
    }

    handleClose() {
        this.setState({open: true})
    }

    render(){
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <AppBar
                            className={classnames('app-bar', {'expanded': this.state.open})}
                            onLeftIconButtonTouchTap={this.handleToggle}
                            title="How long have you been alive?"
                            iconElementRight={<RightBar />}
                        />
                        <Drawer
                            docked={true}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <List>
                                <Subheader>Nested List Items</Subheader>
                                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                                <ListItem
                                    primaryText="Inbox"
                                    leftIcon={<ContentInbox />}
                                    initiallyOpen={true}
                                    primaryTogglesNestedList={true}
                                    nestedItems={[
                                        <ListItem
                                            key={1}
                                            primaryText="Starred"
                                            leftIcon={<ActionGrade />}
                                        />,
                                        <ListItem
                                            key={2}
                                            primaryText="Sent Mail"
                                            leftIcon={<ContentSend />}
                                            disabled={true}
                                            nestedItems={[
                                                <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                            ]}
                                        />,
                                        <ListItem
                                            key={3}
                                            primaryText="Inbox"
                                            leftIcon={<ContentInbox />}
                                            open={this.state.open}
                                            onNestedListToggle={this.handleNestedListToggle}
                                            nestedItems={[
                                                <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                                            ]}
                                        />,
                                    ]}
                                />
                            </List>
                        </Drawer>
                        { this.props.isAuthenticated && <div className={classnames('app-content', {'expanded': this.state.open})}> { this.props.children } </div>}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}


