'use strict';
import React from 'react';
import './main.scss'
import AbacusItem from './components/AbacusItem.js'

class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			 ups: [{isUp:0},{isUp:0},{isUp:0},{isUp:0},{isUp:0},{isUp:0},{isUp:0}],
			 downs: [{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]},
			 		{isDown:1, nums:[120,80,40,0]}
			 	]
		}

	}


	render(){

		return (
			<div className="container">
				<ul className="abacus-list" >
					{this.state.ups.map((up,index)=>{
						return <AbacusItem  key={index} index={index} down={this.state.downs[index]} up={this.state.ups[index].isUp} />
					})}
				</ul>
			</div>
		)
	}

}

React.render(<Main/>, document.getElementById('app'));
