import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class Homepage extends Component {
    render() {
        return <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <div style={{ fontSize: 40, fontWeight: 'bold', color: '#960056' }}>
                            Anushree Gopal
                        </div>
                    </Row>

                    <Row>
                        <div style={{ fontSize: 20, fontWeight: 'normal' }}>
                            <p>
                                I am a senior in Informatics with a focus in cybersecurity. Currently, I am extremely interested by in web application pen-testing and forensics!
                                I love reading and watching movies in my free-time.
                        </p>
                        </div>
                    </Row>

                    <Col xs={3}>
                        <a href='https://github.com/Anushree-12' target="_blank" style={{ textDecoration: 'none', color: '#960056', fontSize: 22 }}>
                            GitHub
                            </a>
                        <br />
                        <a href='https://www.linkedin.com/in/anushreegopal/' target="_blank" style={{ textDecoration: 'none', color: '#960056', fontSize: 22 }}>
                            LinkedIn
                            </a>
                        <br />
                        <a href='https://medium.com/@agopal12' target="_blank" style={{ textDecoration: 'none', color: '#960056', fontSize: 22, }}>
                            Medium
                            </a>
                    </Col>

                </Col>
                <Col className='image' xs={12} md={6}>
                    <img src={'./image.png'} alt={'Anushree Gopal'} />
                </Col>
            </Row>
        </Grid >
    }
}