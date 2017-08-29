import React from 'react';
// import {Header} from './common/header';
import LeftDrawer from './common/Drawer';
import {Grid,Row,Col} from 'react-bootstrap';
import ButtonAppBar from './common/Header';
import Routes from '../routes';




export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            drawerStatus:false
        }
        this.openNavigation=this.openNavigation.bind(this);
    }
    openNavigation(){
       this.setState({
           drawerStatus:true
       })
    }
    closeNavigation(){
        this.setState({
            drawerStatus:false
        })
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <ButtonAppBar handleOpenDrawer={this.openNavigation}/>
                </Row>
                <Row>
                    <LeftDrawer drawer={this.state.drawerStatus} />
                    <Grid fluid>
                        <Routes handleCloseDrawer={this.closeNavigation}/>
                    </Grid>
                </Row>
            </Grid>



          )
    }
}