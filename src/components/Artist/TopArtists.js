import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { Artists } from './Artists';

export class TopArtists extends Component {
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
                            <Button outline
                            color="primary"
                            onClick={() => this.setState({term: 'short_term'})}
                            >
                                Last Month
                            </Button>
                            <Button outline
                            color="primary"
                            onClick={() => this.setState({term: 'medium_term'})}
                            >
                                Last 6 Months
                            </Button>
                            <Button outline
                            color="primary"
                            onClick={() => this.setState({term: 'long_term'})}
                            >
                                All Time
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Artists term={this.state.term}></Artists>
            </Container>
        );
    }
}
