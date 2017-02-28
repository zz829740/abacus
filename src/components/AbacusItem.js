'use strict';


import React from 'react'
import {render} from 'react-dom'
import DownBeads from './DownBeads.js'

export default class TodoItem extends React.Component{
//绑定鼠标事件，上下拨动算盘
    handleupClick(){
      this.props.up = !this.props.up
      this.props.changeUpState(this.props.index, this.props.up)

      React.findDOMNode(this.refs.upbead).style.transition = '.5s'
      if(this.props.up){
        //拨动
          React.findDOMNode(this.refs.upbead).style.transform = 'translateY(60px)'
          React.findDOMNode(this.refs.upbead).style.background = 'white'
          React.findDOMNode(this.refs.upbead).style.opacity = '1'
      }else{
          React.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
          React.findDOMNode(this.refs.upbead).style.background = '#e0e0e0'
          React.findDOMNode(this.refs.upbead).style.opacity = '0.9'
      }

    }

    clearUpBeads(){

        React.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
        React.findDOMNode(this.refs.upbead).style.background = '#e0e0e0'
        React.findDOMNode(this.refs.upbead).style.opacity = '0.9'
    }


    render(){
      return (

          <li className="ab-item" >

            <div className="up-beads-container">
              <div className="up-vertical-pole"></div>
              <div ref="upbead" {...this.props}  onClick={this.handleupClick.bind(this)} className="upbead"></div>
            </div>

            <DownBeads {...this.props.down} />
          </li>
      )
    }
}
