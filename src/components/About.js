import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return(
    <div className="row">
    <div className="card app-body offset col-lg-10 col-lg-offset-4">
      <div className="card">
        <img className="card-img-top" src="https://avatars3.githubusercontent.com/u/29993968?v=4" alt=""/>
        <div className="card-block">
          <h4 className="card-title">Bethany Priode</h4>
          <h4 className="card-subtitle mb-2 text-muted">Lover of Language and Critical Thinking</h4>
          <p className="card-text">After teaching middle school for 4 years in Knoxville, TN, life is moving me to Chattanooga, TN. I thought a move was the perfect chance to try somthing new, something challenging. My deep love for language and solving complex problems, led me to web development. The Iron Yard gave me the opportunity to pusue my intrest experience during a three month coding bootcamp. I studied both Front-End and Back-End fundamentals, as well as a specilization in React. </p>
          <a href="https://www.linkedin.com/in/bethany-priode/" className="card-link"><i className="fa fa-linkedin fa-2x"></i></a> |
          <a href="https://bethanypriode.wordpress.com/" className="card-link"><i className="fa fa-wordpress fa-2x"></i></a> |
          <a href="mailto:bpriode@gmail.com" className="card-link"><i className="fa fa-envelope-o fa-2x" ></i></a> |
          <a href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x" ></i></a>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
