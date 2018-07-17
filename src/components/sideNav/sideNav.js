import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import profile_pic from "../../img/profile.jpg";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.scroll_to = this.scroll_to.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    // if (event) this.scroll_to(event);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // scroll_to(element) {
  //   if (this.state.hash !== "") {
  //     event.preventDefault();
  //     var elm = document.getElementByid(hash);
  //     elm.scrollIntoView({behavior: 'smooth'});
  //     var hash = element.hash;
  //     window.location.hash = hash;
  //   }
  // }

  render() {
    return (
      <Nav
        toggleable
        className="navbar navbar-expand-lg sideNav-container bg-primary navbar-dark fixed-top"
        vertical
        expand="md"
        id="sideNav"
        navbar
      >
      <Navbar>
        <NavbarBrand href="/" className="ml-auto d-block d-lg-none">
          jetsquared
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <NavItem>
          <NavLink className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={profile_pic}
                alt=""
              />
            </span>
          </NavLink>
        </NavItem>
        </Navbar>
        <Collapse isOpen={this.state.isOpen} className="pl-3 mr-auto">
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#about"
              onClick={this.toggle}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#experience"
              onClick={this.toggle}
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#education"
              onClick={this.toggle}
            >
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#skills"
              onClick={this.toggle}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#interests"
              onClick={this.toggle}
            >
              Interests
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="js-scroll-trigger"
              href="#work"
              onClick={this.toggle}
            >
              Work
            </NavLink>
          </NavItem>
        </Collapse>
        <Nav className="d-none d-lg-block">
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#experience">
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#education">
              Education
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#skills">
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#interests">
              Interests
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="js-scroll-trigger" href="#work">
              Work
            </NavLink>
          </NavItem>
        </Nav>
      </Nav>
    );
  }
}

export default SideNav;
