import React, { Component } from 'react';
// eslint-disable-next-line
import { Router, browserHistory, Route, Link } from 'react-router';
// eslint-disable-next-line
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Table, ListGroup, ListGroupItem, PageHeader, Panel, PanelGroup, Glyphicon, ButtonGroup, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';


// update here and in Routes
var links = [
  {link: '/', text: 'Home'},
  {link: '/tokensale', text: 'TokenSale'},
  {link: '/terms', text: 'Terms'},
]


export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // some functions
  updateMenu(links) {
    var arr = []
    links.map((currentValue, index, array) => {
      arr.push(
        <NavItem key={"link_"+index} href="#">
          <Link key={index} to={currentValue.link}>{currentValue.text}</Link>
        </NavItem>
      )
      return
    })
    this.setState({menuList:arr})
  }
  //
  componentWillMount() {
    this.updateMenu(links)
  }
  // result
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Icareum</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.state.menuList}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
