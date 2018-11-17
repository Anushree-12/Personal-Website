import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';
import { Grid, Row } from 'react-flexbox-grid';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv("data/projects.csv").then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data)
        return <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <div style={{ fontSize: 40, fontWeight: 'bold', color: '#960056' }}>
                            Class Projects
                    </div>
                    </Row>

                    {this.state.data.map((d, i) => {
                        return <Col xs={12} key={"project" + i}>
                            <Card className="project">
                                <CardBody>
                                    <CardTitle className="card-title">
                                        <h5 className='card-title' style={{ color: '#c95169', fontWeight: 'bold' }}> {d.name} </h5>
                                    </CardTitle>
                                    
                                    <CardText className="card-text" style={{ color: '#d27b8d' }}>
                                        <p>{d.cls} {d.quarter}</p>
                                    </CardText>

                                    <CardText className="card-text">
                                        <p>{d.desc}</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <br />
                        </Col>
                    })}
                </Col>
            </Row>
        </Grid >
    }
}