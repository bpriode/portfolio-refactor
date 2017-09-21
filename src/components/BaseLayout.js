import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let navTitle = {
      "fontSize": "180%",
    }
    let navBar = {
      "backgroundColor": "#114B5F",
      'margin': "0px",
    }



    return (
      <div className="container-fluid nav">
        <nav className="row navbar" style={navBar}>
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">My Developer Story</NavLink>
                </li>
                <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/references">References</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
