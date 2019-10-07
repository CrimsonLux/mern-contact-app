import React, { Component } from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "";

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <h3><Link to={'/index'} className="navbar-brand">Contact List</Link></h3>
            <button className="navbar-toggler" type="button" onClick={this.toggleMenu} >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse justify-content-end" + show} >
              <ul className="nav navbar-nav">
                <button class="btn btn-success" type="button">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </button>

              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;