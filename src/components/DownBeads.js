'use strict';
import React from "react";

export default class DownBeads extends React.Component {

	//绑定鼠标事件，上下拨动算盘
	turnDownBeads(e){

	}

	render(){
		return (
			<div className="down-beads-container">
				
				<div className="downbead"></div>
				<div className="downbead"></div>
				<div className="downbead"></div>
				<div className="downbead"></div>
				<div className="down-vertical-pole"></div>
			</div>
		)
	}
}