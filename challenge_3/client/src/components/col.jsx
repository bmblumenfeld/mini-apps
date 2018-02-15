import React from "react";
import ReactDOM from "react-dom";

var Col = function (props) {
  return (
    <td 
    className ="col" 
    val={props.val}
    onClick={()=>props.onClick(props.row,props.col)}></td>
  	)

} 

export default Col