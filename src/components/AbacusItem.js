'use strict';

import DownBeads from './DownBeads.js'
import React from 'react'

export default class TodoItem extends React.Component{
//绑定鼠标事件，上下拨动算盘
    handleupClick(){

        this.props.up = !this.props.up
        if(this.props.up){

            React.findDOMNode(this.refs.upbead).className = 'upbeaddown';
        }else{
            React.findDOMNode(this.refs.upbead).className = 'upbead';
        }
    }


    render(){
        this._children = [];

        return (

            <li className="ab-item"
                // onMouseOver={this.handlerMouseOver.bind(this)}
                // onMouseOut={this.handlerMouseOut.bind(this)}
            >   <div className="up-beads-container">
                    <div className="up-vertical-pole"></div>

                    <div ref="upbead" {...this.props} onClick={this.handleupClick.bind(this)} className="upbead"></div>
                </div>

                <DownBeads {...this.props.down} />


            </li>
        )
    }
}
