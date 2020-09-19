import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="container-fluid">
                <Navbar.Brand href="#home">Online tools</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Other tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Word counter</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar