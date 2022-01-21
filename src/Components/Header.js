import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../Images/logo.png'
import search from '../Images/loupe.png'
import shop from '../Images/shop.png'
import { Navbar, Container,  Nav } from 'react-bootstrap'; 

const useStyles = makeStyles((theme) => ({
logo:{
    width: '90px',
    height: '40px',
    marginLeft: '70px',
    marginTop: '-10px'
},
 headerSearch: {
     fontSize:'15px',
     marginRight: '40px',
 },
 search:{
     width:'12px',
     marginTop:'-5px'
 },
 help: {
     marginRight: '40px',
     fontSize:'15px',
 },
 account: {
     marginRight: '40px',
     fontSize:'15px',
 },
 shop: {
     marginRight: '20px'
 },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="none" variant="dark" color="white">
  <Container>
  <Navbar.Brand href="#home"><img className={classes.logo} src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" />
    <Nav>
      <Nav.Link href="#deets" className={classes.headerSearch}><img className={classes.search} src={search} alt="" />    Search</Nav.Link>
      <Nav.Link href="#memes" className={classes.help}> Help </Nav.Link>
      <Nav.Link href="#memes" className={classes.account}> Account </Nav.Link>
      <Nav.Link href="#memes"> <img className={classes.shop} src={shop} alt="" /> </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
