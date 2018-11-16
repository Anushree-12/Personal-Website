import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv("./projects-data.csv").then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Class Projects
                 {this.state.data.map((d, i) => {
                return <Col sm="6" key={"project" + i}>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                {d.name}
                            </CardTitle>
                            <CardText>
                                {d.cls}
                            </CardText>
                        </CardBody>
                    </Card>
                    <br />
                </Col>

            })}
        </div>
    }
}