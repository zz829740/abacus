'use strict';
import React from "react";
import AbacusMain from "./components/AbacusMain.js"
import './main.scss'

class Main extends React.Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className="container">
				<AbacusMain />
			</div>
		)
	}
}

React.render(<Main/>, document.getElementById("app"));