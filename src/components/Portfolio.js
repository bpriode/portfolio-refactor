import React, { Component } from 'react';


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      git:{},
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/bpriode')
    .then(r => r.json()
    .then((data) => {
      this.setState({git: data.results})
    })
  )
}
  render() {

    let portfolio = {
      "backgroundColor": "#5D576B",
      "width": "50%",
      "color": "#B3B5BB",
      "marginTop": '100px',
      "fontSize": '2rem'
    }

    let titleStyle = {
      "fontSize": '6rem',
      "textAlign": "center"
    }
    return(
      <div className="card app-body offset col-lg-10 col-lg-offset-3" style={portfolio}>
        <div className="card-block">
          <h4 className="card-title" style={titleStyle}>Portfolio</h4>
          <p className="card-text">Full Stack Web Developer | React | Node.js Fan | Mongo DB Lover</p>
          <a id="git" href="https://github.com/bpriode" className="card-link"><i className="fa fa-github fa-2x"></i></a>
        </div>
      </div>
    )
  }
}
