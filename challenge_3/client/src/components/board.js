import React from "react";
import ReactDOM from "react-dom";
import Row from './row.jsx'
import Col from './col.jsx'

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board:[
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]],
      player: '1'
    } 
  } 
   handleClick (row,col) {
    var b = this.state.board
    console.log(b);
    console.log(col);
    for (var i = b.length-1 ; i >= 0 ; i ++) {
      debugger;
      if ((!b[i][col]) && (this.state.player ===1)) {
        console.log(i);
        b[i][col] = 1
        this.setState({board:b, player:'2'})
      } else if ((!b[i][col]) && (this.state.player ===1)) {
        b[i][col] = 2
        this.setState({board:b, player:'1'})
      }
    }
    
  }

  // droppingPiece () {
  //   this.state.board.forEach()


  // }

  render() {
		return (
		  <table className="board">
		  <tbody>
  	  {this.state.board.map(function (row, index){
  	    return (
  	      <Row
  	       key = {index}
  	       row={index}
  	       table={row}
  	       handleClick={this.handleClick.bind(this)}/>
  	      )	
  	  },this)}
	  	</tbody>
		  </table>
		)
  }



}



export default Board