import React, { Component } from 'react';
import './index.scss'

class Redux extends Component {
  fGo (event)  {
    event.preventDefault();
    this.props.history.push("/home")

  }
  render () {
    return (
      <div> 
        <h2> This is Redux Page </h2>
        <button onClick={(event) => this.fGo(event)} className="myBackButton"> Go </button>
      </div>
    )
  }
}

export default Redux