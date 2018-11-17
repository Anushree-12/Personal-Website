import React, { Component } from 'react';
import * as d3 from 'd3';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv("data/resume.csv").then((d) => {
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
                            Work Experience
                    </div>
                    </Row>

                    {this.state.data.map((d, i) => {
                        return <Col xs={12} key={"project" + i}>
                            <Card className="project">
                                <CardBody>
                                    <CardTitle className="card-title">
                                        <h4 className='card-title' style={{ color: '#bd2c49', fontWeight: 'bold' }}> {d.title} </h4>
                                        <h5 className='card-company' style={{ color: '#c95169', fontWeight: 'bold' }}> {d.company} </h5>
                                    </CardTitle>
                                    
                                    <CardText className="card-text" style={{ color: '#d27b8d' }}>
                                        <p>{d.start} {d.end}</p>
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