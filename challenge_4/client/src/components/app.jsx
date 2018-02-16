import React from 'react'
import REACTDOM from 'react-dom'
import Frame from './frames.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      frames: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      pins: [1,2,3,4,5,6,7,8,9,10],
      totalScore: 0,
      rounds: 0,
      turn:0
    }
  }
  bowl (number,round, turn) {
  	var board = this.state.frames;
  	var score = this.state.totalScore;
  	var pins = this.state.pins;
  	var rounds = this.state.rounds;
  	var turns = this.state.turn
    board[rounds][turns] = number;

  
    score+=number
    if (turns === 1) {
      turns = 0;
      rounds++
    } else if (turns === 0){
    	turns = 1;
    }
    if (rounds === 11) {
      document.getElementById('root').text('game over')	
    }
    this.setState({frames:board,pins:pins,totalScore:score,rounds:rounds,turn:turns})

  }
  render () {
    return (
      this.state.frames.map(function (frame,index){
        return (
          <div className="big-frame">
            <Frame 
              key={index}
              rolls={this.state.frames[index]}
              score={this.state.totalScore}
              pinNumber={this.state.pins[index]}
              bowl={this.bowl.bind(this)}
              turn={this.state.turn}
              round={this.state.rounds}
            />
          </div>
        )	
      },this)
    );
  }
}


export default App