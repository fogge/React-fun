@observer export default class App extends Component {

  render(){
    return (
      <Router>
        <Fragment>
          <NavbarMain />


          <Route exact path="/" component={Startpage} />
          <Route path="/blogpost">
            <BlogPost />
          </Route>
          <Route path="/blogposts">
            <BlogPosts />
          </Route>
        </Fragment>
      </Router>


    )
    }
  }