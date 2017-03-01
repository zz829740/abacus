'use strict';
import React from 'react';
import {render} from 'react-dom'

import './main.scss'
import AbacusItem from './components/AbacusItem.js'
import Pannel from './components/Pannel.js'

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
			 	],
        clearAll: false,
        units: ['百万','十万','万','千','百','十','个']
		}

	}

  showNum(){
    var total = 0;
    var downs = this.state.downs;
    var fives = this.state.ups;
    var res = [];
    var f = [];
    var head = [];
    var str = '';
    for(var i=0;i<7;i++){
      var cur = downs[i].nums;
      var five = fives[i].isUp;
      if(five){
        head.push(i)
        f.push(i)
      }
      for(var j=0;j<4;j++){
        if(cur[j] != 120-j*40){
          if(res[res.length-1] && res[res.length-1][0]== i){

            res.pop();
          }
          head.push(i);
          res.push([i,j])
        }
      }

    }

     let set = new Set(head);

    let array = Array.from(set);

    var weishu = array[array.length-1]-array[0];

    var start = res[0][0];

    for(let [index,item] of res.entries()){
      var weight = weishu - (item[0]-start);
      total+=Math.pow(10,weight)*(parseInt(item[1])+1)

    }

    //此处有bug
    // document.getElementById('result').innerHTML = ''+total;



  }

  changeUpState(index, up){
    this.state.ups[index].isUp = up;

    // alert(this.state.ups[index].isUp)
  }



  clearAll(){
    var up = document.getElementsByClassName('upbead');
    var down = document.getElementsByClassName('down-beads-container');

    for(var i=0;i<7;i++){
      up[i].style.transform = 'translateY(0px)';
      up[i].style.background = '#e0e0e0'
      up[i].style.opacity = '0.9'
      var arr = down[i].getElementsByClassName('downbead')
      for(var j=0;j<4;j++){
        arr[j].style.transform = 'translateY(0px)';
        arr[j].style.background = '#e0e0e0'
        arr[j].style.opacity = '0.9'
      }


    }
  }


	render(){

		return (

			<div className="container">
        <header>
          <h1>Abacus</h1>
          <Pannel recover={this.state} clearAll={::this.clearAll} showNum={::this.showNum}></Pannel>
        </header>
        <div className="content">
  				<ul className="abacus-list" >
  					{this.state.ups.map((up,index)=>{
  						return <AbacusItem ref='item' clearAll={this.state.clearAll} {...this.props} changeUpState={::this.changeUpState} key={index} index={index} down={this.state.downs[index]} unit={this.state.units[index]} up={this.state.ups[index].isUp} />
  					})}
  				</ul>
        </div>
        <footer>
          <h3>Copyright ©Jane Wu -<a id='source' href="https://github.com/WJane/abacus">source</a></h3>
        </footer>
			</div>
		)
	}

}

React.render(<Main/>, document.getElementById('app'));
// React.render(<Main/>, document.getElementById('app'));
// window.calendar = render(
//   <Calendar/>,
//   document.getElementById('calendarContainer')
// )
