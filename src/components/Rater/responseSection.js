import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { ResponseContainer, ResponseTitleRow, ResponseAnswerRow } from './style';
const ResponseSection = (props) => {
    const { visionValue, extractedValue } = props;
    console.log(visionValue)
    console.log(extractedValue)
    return (
        <ResponseContainer>
            <ResponseTitleRow>
                <Container className="text-center">
                    <Row>
                        <Col className="response-title-text">Vision Output</Col>
                        <Col className="response-title-text response-desktopview">Extracted Raw Data</Col>
                    </Row>
                </Container>
            </ResponseTitleRow>
            <ResponseAnswerRow>
                <Container>
                    <Row>
                        <Col className="pl-5 d-flex justify-content-center">
                            {
                                Object.keys(visionValue).length > 0 &&
                                    <pre>{JSON.stringify(visionValue, null, 2) }</pre>
                            }
                        </Col>
                        <Col className="pl-5 d-flex justify-content-center response-desktopview">
                            {
                                extractedValue?.length > 0 &&
                                    <pre>{JSON.stringify(extractedValue, null, 2) }</pre>
                            }
                        </Col>
                    </Row>
                </Container>
            </ResponseAnswerRow>
            <ResponseTitleRow className="response-mobileview">
                <Container className="text-center">
                    <Row>
                        <Col className="response-title-text">Extracted Raw Data</Col>
                    </Row>
                </Container>
            </ResponseTitleRow>
            <ResponseAnswerRow  className="response-mobileview">
                <Container>
                    <Row>
                        <Col className="pl-5 d-flex justify-content-center">
                            {
                                extractedValue?.length > 0 &&
                                    <pre>{JSON.stringify(extractedValue, null, 2) }</pre>
                            }
                        </Col>
                    </Row>
                </Container>
            </ResponseAnswerRow>
        </ResponseContainer>
    )
}
ResponseSection.propTypes = {
    visionValue: PropTypes.array,
    extractedValue: PropTypes.array,
}

export default ResponseSection;