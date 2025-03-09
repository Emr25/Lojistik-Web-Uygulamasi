import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="dark" fixed="top">
        <Container>
        <Navbar.Brand href="#home" >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Bollore_Logistics_Logo.png'
              width="150px"
              height="90px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" style={{color:"black"}}>Anasayfa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"black"}}>Hizmetler</Nav.Link>
            <Nav.Link href="#features" style={{color:"black"}}>Tarihimiz</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"black"}}>Lojistik destek başvuru</Nav.Link>
            <Nav.Link href="#pricing" style={{color:"black"}}>İletişim</Nav.Link>

          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Nav style={{margin:"20px"}}>
         <Nav.Link style={{color:"black"}} href='/signup'>Üye Ol</Nav.Link>
         <Nav.Link  style={{color:"black"}} href='/login'>Giriş Yap</Nav.Link>
            </Nav>
        
        </Navbar.Collapse>
        </Container>
        
      </Navbar>
  )
}

export default Header