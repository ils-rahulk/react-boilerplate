import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import LogoCenterImage from 'assets/img/logoDraft1@3x.png'
import { LogoContainer, LogoCenterSection } from './style';
const LogoSection = () => {
    return (
        <LogoContainer>
            <Container>
                <Row>
                    <Col>
                        <LogoCenterSection>
                            <img src={ LogoCenterImage }  alt="logo image" className="center-logo"/>
                            <div className="divider-logo" />
                            <div className="center-logo-text">
                                <p>Vision <br />API</p>
                            </div>
                        </LogoCenterSection>
                    </Col>
                </Row>
            </Container>
        </LogoContainer>
    )
}

export default LogoSection;