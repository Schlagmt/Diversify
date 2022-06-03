import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import { Recommend } from './Recommend';

export class Recommendation extends Component {
    constructor(props) {
        super(props)

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
                <Recommend term={this.state.term}></Recommend>
            </Container>
        );
    }
}
