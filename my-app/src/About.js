import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export class About extends Component {

    render() {
        return <Grid fluid>
            <Row>
                <div style={{ fontSize: 40, fontWeight: 'bold', color: '#960056' }}>
                    About Me
                        </div>
            </Row>

            <Row>
                <div style={{ fontSize: 20, fontWeight: 'normal' }}>
                    <p>
                        I have been constantly involved on campus in various clubs I have joined such as Tech++, which integrates technology and fashion, and Operation Smile, fundraising for a charity helping kids with cleft/lip palate.
                    </p>
                    <p>
                        I have refined my leadership style during my two years as a Resident Advisor in UW housing and by being a Teaching Assistant for a Leadership Theory class in the Foster Business School.
                    </p>
                    <p>
                        Currently, I'm a Peer Advisor in the iSchool!
                    </p>
                </div>
            </Row>
        </Grid >
    }
}
