import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import { FooterContainer } from './style';
const FooterLayout = (props) => {
    return (
        <FooterContainer fluid={true} className="border-top my-md-5 pt-md-5 pb-md-5">
            <Container>
                <Row>
                    <Col md="6">1</Col>
                    <Col md="3">2</Col>
                    <Col md="3">3</Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

export default FooterLayout;