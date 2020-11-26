import React, { useState } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row
} from 'reactstrap';
import { HeaderContainer } from './style';
const HeaderLayout = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <HeaderContainer fluid={true}>
            <Container>
                <Row>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Logo</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar >
                                <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                    Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    Reset
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                            <NavbarText>Simple Text</NavbarText>
                        </Collapse>
                    </Navbar>
                </Row>
            </Container>            
        </HeaderContainer>
    )
}

export default HeaderLayout;