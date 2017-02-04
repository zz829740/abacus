/**
 * Created by YikaJ on 15/6/17.
 */
'use strict';
import UpBeads from "./UpBeads.js"
import DownBeads from "./DownBeads.js"

export default class TodoItem extends React.Component{

    // 处理任务是否完成状态
    // handlerChange(){
    //     let isDone = !this.props.isDone;
    //     this.props.changeTodoState(this.props.index, isDone);
    // }

    // // 鼠标移入
    // handlerMouseOver(){
    //     React.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    // }

    // // 鼠标移出
    // handlerMouseOut(){
    //     React.findDOMNode(this.refs.deleteBtn).style.display = "none";
    // }

    // // 删除当前任务
    // handlerDelete(){
    //     this.props.deleteTodo(this.props.index);
    // }

    render(){
        

        return (
            <li className="ab-item"
                // onMouseOver={this.handlerMouseOver.bind(this)}
                // onMouseOut={this.handlerMouseOut.bind(this)}
            >
                <UpBeads />
                <DownBeads />
            </li>
        )
    }
}