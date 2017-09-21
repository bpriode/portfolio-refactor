import React, { Component } from 'react';

export default class Home extends Component {
  render() {


    return(
    <div className='home'>
      <div className=" col-lg-12 header">
        <div className="header-title" id="title">
            Bethany Priode
        </div>
        <h3 className="header-text">
        Former middle school teacher who turned a passion for in-depth challenges and creativity into a passion for web development
      </h3>
      <a href="https://www.linkedin.com/in/bethany-priode/" className="card-link"><i className="fa fa-linkedin fa-2x"></i></a> |
      <a href="https://bethanypriode.wordpress.com/" className="card-link"><i className="fa fa-wordpress fa-2x"></i></a> |
      <a href="mailto:bpriode@gmail.com" className="card-link"><i className="fa fa-envelope-o fa-2x" ></i></a> |
      <a href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x" ></i></a>
      </div>
    </div>
    )
  }
}
