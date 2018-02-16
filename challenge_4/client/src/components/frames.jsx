import React from 'react'
import REACTDOM from 'react-dom'
import Pin from './pins.jsx'

var Frame = function (props) {
  return (
  	<div>
  	<div className="set">
  	  <Pin 
  	    pinNumber={props.pinNumber}
  	    bowl={props.bowl}
  	    turn={props.turn}
  	    round={props.round}
  	  />
  	</div>
    <div className="frame">
      <span className="first-bowl">{props.rolls[0]}</span>
      <span className="second-bowl">{props.rolls[1]}</span>
      <div className="total-score">{props.score}</div>
    </div>
    </div>
  );
}









export default Frame