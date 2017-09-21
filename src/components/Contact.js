import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return(
    <div className='home'>
      <div className=" col-lg-12 header">
      <h3 className="header-text">
        I'd Love to Connect With You!
      </h3>
      <a href="https://www.linkedin.com/in/bethany-priode/" className="card-link"><i className="fa fa-linkedin fa-4x"></i></a> |
      <a href="https://bethanypriode.wordpress.com/" className="card-link"><i className="fa fa-wordpress fa-4x"></i></a> |
      <a href="mailto:bpriode@gmail.com" className="card-link"><i className="fa fa-envelope-o fa-4x" ></i></a> |
      <a href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-4x" ></i></a>
      </div>
    </div>
    )
  }
}
