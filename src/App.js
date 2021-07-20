//import logo from './logo.svg';
//import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //const t ="Welcome"
  //  let x =50;
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create/:id">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="/create/update/:id">
              <Create update={true}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
