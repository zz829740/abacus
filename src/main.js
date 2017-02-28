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
        clearAll: false
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
    // console.log(array)
    var weishu = array[array.length-1]-array[0];
    console.log('位数：'+weishu)

    // if(res.length==0&&f.length==0){
    //   total = 0;
    // }else if(res.length == 0 && f.length>0){

    // }else if(res.length>0&&f.length==0){

    // }else{

    // }







    // for(let [k,v] of f.entries()){
    //   // console.log(head)
    //   // console.log(v)
    //   // console.log(array.indexOf(v))

    //   // var g = weishu+fs-v
    //   // console.log(v)

    //   // g = g-1<0?g:g-1
    //   total+=Math.pow(10,g)*5;
    // }

    // var obj = {};

    var start = res[0][0];

    for(let [index,item] of res.entries()){
      // obj[item[0]]=item[1]

      var weight = weishu - (item[0]-start);

      total+=Math.pow(10,weight)*(parseInt(item[1])+1)
      // total+=weight*10*(parseInt(item[1])+1);
      // total+=weight*10*(item[1]+1)

      // alert(parseInt(item[0]*(weight*100)))
    }


    // for(var i=0;i<f.length;i++){
    //   var weight = weishu - (i-start);
    //   alert(weight)
    //   total+=Math.pow(10,weight)*5;
    // }


        // var fs = f[0];

        document.getElementById('result').innerHTML = ''+total;

    // console.log(f)
    //上边的
    //??????????????一大堆问题
    // for(var i=0;i<f.length;i++){
    //   var g = 2*weishu-f[i] +1;
    //   g<0?g=0:g;
    //   total += parseInt(Math.pow(10,g)*5)
    // }

    // console.log('total:'+total);





    //polyfill
    // for(var s=res[0][0];s<res[res.length-1][0];s++){
    //   if(head.indexOf(s)){

    //     console.log(obj[res[0][0]]);
    //   }else{
    //     str+=0;
    //   }
    // }
    // console.log('00000000')
    // console.log(str)

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
  						return <AbacusItem ref='item' clearAll={this.state.clearAll} {...this.props} changeUpState={::this.changeUpState} key={index} index={index} down={this.state.downs[index]} up={this.state.ups[index].isUp} />
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
