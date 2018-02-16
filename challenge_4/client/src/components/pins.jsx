import React from 'react'
import REACTDOM from 'react-dom'

var Pin = function (props) {
  return (
    <button
    onClick={()=>props.bowl(props.pinNumber,props.round,props.turn)} 
    className="pins">
      {props.pinNumber}
    </button>	
  );
}









export default Pin