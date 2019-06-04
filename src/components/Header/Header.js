import React from "react";

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
  DropdownItem
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/hello/">Hello</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/toast/">toast</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/redux/">redux</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hlášky
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/ceske_hlasky/">české filmy</DropdownItem>
                  <DropdownItem href="/api/">Fetching API</DropdownItem>
                  <DropdownItem href="/form/">Form</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  scrimba-tutorial
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/cond/">Conditional rendering</DropdownItem>
                  <DropdownItem href="/api/">Fetching API</DropdownItem>
                  <DropdownItem href="/form/">Form</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Axios (api)
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/axios_get/">GET</DropdownItem>
                  <DropdownItem href="/axios_post/">POST</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        {/* ------------------------------------------------------- */}

        {/* jednoduchá react komponenta */}
        {/* <ShoppingList name="Mark" /> */}

        {/* ------------------------------------------------------- */}

     
      </div>
    );
  }
}

export default Header;
