import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"

function NavBarMenu(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
				<Navbar.Brand href="#home">Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
            <Nav.Link href="#home"><span className="pink">0.1</span> About</Nav.Link>
            <Nav.Link href="#home"><span className="pink">0.2</span> Experience</Nav.Link>
            <Nav.Link href="#features"><span className="pink">0.3</span> Work</Nav.Link>
            <Nav.Link href="#pricing"><span className="pink">0.4</span> Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
    </div>
  )
}


export default NavBarMenu