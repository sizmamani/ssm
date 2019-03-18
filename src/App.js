import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeContainer from './pages/home/container';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    )
  }
}


export default App;