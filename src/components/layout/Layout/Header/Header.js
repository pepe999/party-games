import React from "react";

// import { connect } from 'react-redux'
// import { compose } from 'redux'

import MenuItems from '../../../../constants/menu-items'

import { withRouter } from 'react-router-dom'

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

const { hlaskyLinks } = MenuItems


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

  renderHlaskyLinks = () => {
      const { history } = this.props

      return hlaskyLinks.map((menuItem: MenuItem) => {
        const { to, label } = menuItem
        const handleOnClickLink = () => history.push(to)

        const item = 
            <DropdownItem
              onClick={handleOnClickLink}
              key={to}>
              {label}
            </DropdownItem>
        return item
      })
    }

  render() {

    const { history } = this.props

    const handleOnClickLink2 = () => (history.push("hello"))
    
    const {
      renderHlaskyLinks,
    } = this

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={handleOnClickLink2}>Hello</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/toast/">toast</NavLink>
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
                {renderHlaskyLinks()}
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

// const mapStateToProps = (state: State) => ({

// })

// const mapDispatchToProps = {

// }

export default withRouter(Header)

