import React from 'react';
import {
    Card,
    CardBody,
    CardGroup,
    Col,
    Row
} from 'reactstrap'
import RightAuthSideBar from 'shared/Auth/rightAuthSideBar';
import LogoAuth from 'shared/Auth/logoSpace';
import { FormWraper } from './style'
const AuthHoc = (props) => {
    return (
        <Row className="justify-content-center">
            <Col className="p-0">
                <CardGroup>
                    <Card className="border-0 mobile_main">
                        <CardBody className="d-flex justify-content-center align-items-center">
                            <FormWraper>
                                <LogoAuth />
                                { props.children }
                            </FormWraper>
                        </CardBody>
                    </Card>
                    <Card className="absoluteInMobile border-0">
                        <CardBody className="p-0">
                            <RightAuthSideBar />
                        </CardBody>
                    </Card>                        
                </CardGroup>
            </Col>
        </Row>
    )
}

export default AuthHoc;