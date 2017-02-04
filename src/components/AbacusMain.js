/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";
import AbacusItem from "./AbacusItem.js"


export default class AbacusMain extends React.Component{
    // 循环渲染每组
    render(){
        let items = [];
        for(let i=0;i<7;i++){
            items.push(<AbacusItem />);
        }

        return (
            <ul className="abacus-list">
                {items}
            </ul>   
        )
    }
}