'use strict';

import React from 'react'
import {render} from 'react-dom'

export default class Panel extends React.Component{
  //show the current number
  // showNum(){
  //   alert()
  // }


  // clearBeads(){
  //   console.log(this.props)
  // }


  render(){
    return (
      <div id="pannel" className = "pannel">
        <button {...this.props} onClick={this.props.clearAll} className='control clear'>Clear beads</button>
        <button onClick={this.props.showNum} className='control show'>Show value</button>
        <div ref="result"></div>
      </div>
    )

  }
}


