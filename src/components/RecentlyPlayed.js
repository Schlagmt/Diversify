import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { Tracks } from './Tracks';

export class RecentlyPlayed extends Component {
    constructor() {
        super()

        this.state = {
            term: 'short_term'
        }
    }
    
    render() {
        return (
            <Container>
                <Row style={{marginBottom: "2em", marginTop: "2em"}}>
                    <Col>
                        <ButtonGroup style={{width: "100%"}}>
                            <Button
                            color="primary"
                            onClick={() => this.setState({term: 'short_term'})}
                            >
                                Last Month
                            </Button>
                            <Button
                            color="primary"
                            onClick={() => this.setState({term: 'medium_term'})}
                            >
                                Last 6 Months
                            </Button>
                            <Button
                            color="primary"
                            onClick={() => this.setState({term: 'long_term'})}
                            >
                                All Time
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Tracks term={this.state.term}></Tracks>
            </Container>
        );
    }
}