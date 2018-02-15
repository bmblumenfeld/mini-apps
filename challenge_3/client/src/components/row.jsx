import React from "react";
import ReactDOM from "react-dom";
import Col from './col.jsx';



var Row = function (props) {
  return (
  	<tr className="row">
  	  {
        props.table.map(function (column,index) {
          return (
  	        <Col key={index}
      	      row={props.row}
      	      col={index}
      	      onClick={props.handleClick.bind(this)}
            />
    	    );
    	  })
      }
  	</tr>
	);
}

export default Row;

// <td className="col 0">x</td>
//   	<td className="col 1">x</td>
//   	<td className="col 2">x</td>
//   	<td className="col 3">x</td>
//   	<td className="col 4">x</td>
//   	<td className="col 5">x</td>
//   	<td className="col 6">x</td>