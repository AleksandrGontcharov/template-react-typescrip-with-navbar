import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../logo.svg"

export function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <Logo width="30"
                    height="30"
                    className="d-inline-block align-top" />
                Netflix App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="www.bing.com">Bing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="www.netflix.com">Netflix</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}