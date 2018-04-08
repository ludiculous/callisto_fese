import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Callisto_logo from "assets/img/CallistoLogo.svg"

class Header extends Component{
  constructor(){
    super()
    this.state = {
      backgroundColor: "transparent"
    }
  }

  componentDidMount() {
    document.body.addEventListener("scroll", this.handleHeaderScroll.bind(this), false)
  }

  handleHeaderScroll(){
    let doc = document.documentElement;
    let height = window.innerHeight ;
    //let top = doc.scrollTop - doc.clientTop;
    let top = document.body.scrollTop

    if(top >= height) {
      this.setState({backgroundColor:"rgba(27, 30, 33, 0.3)"});
    } else {
      this.setState({backgroundColor:"transparent"});
    }
  }

  render() {
    return (
      <Navbar fixedTop collapseOnSelect style={{backgroundColor: this.state.backgroundColor}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={Callisto_logo} alt="logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#" className="navItem active">
              Get Involved
            </NavItem>
            <NavItem eventKey={2} href="#" className="navItem">
              Who We Are
            </NavItem>
            <NavItem eventKey={3} href="#" className="navItem">
              What We Do
            </NavItem>
            <NavItem eventKey={4} href="#" className="navItem">
              Work With Us
            </NavItem>
            <NavItem eventKey={5} href="#" className="navItem">
              Donate
            </NavItem>
            <NavItem eventKey={6} href="#" className="navItem">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;