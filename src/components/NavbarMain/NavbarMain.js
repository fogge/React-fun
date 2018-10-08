@withRouter @observer export default class NavbarMain extends Component {
  

  @observable isopen = false;

  toggler() {
    this.isopen = !this.isopen;
  }

  render() {
    return (
      <Fragment>
        <div className="bg-light mb-3">
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light container">
            <NavbarBrand to="/">Navbar</NavbarBrand>
            <NavbarToggler onClick={() => this.toggler()}/>
            <Collapse isOpen={this.isopen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink exact to="/" activeClassName = "active">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/blogpost"v activeClassName = "active">Skriv inlägg</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/blogposts"v activeClassName = "active">Blogginlägg</NavLink>
                  </NavItem>
                </Nav>
            
            </Collapse>
    
          </Navbar>
        </div>
      </Fragment>
    )

  }

}
