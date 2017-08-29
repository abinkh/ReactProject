import React from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';

const Home= ()=>{
    return(
        <Row>
            <Col sm={3}>
                <h1>------------------------------------------Home</h1>
            </Col>
            <Col sm={1}>
                <Button bsStyle="danger" bsSize="small">Home</Button>
            </Col>


        </Row>
    )
}
export default Home;