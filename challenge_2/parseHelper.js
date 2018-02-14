var parseHelper = function (dataObj) {
  var keyLine = [];
  var body = [];
  var csv = '';
  for(var key in dataObj) {
  	if (key.toString() === 'children') {
  	  break;	
  	}
    keyLine.push(key.toString())  
  }
  var trav = function (node) {
  	var line = [];
    if (node['children']) {
      for (var key in node) {
        if (key.toString() === 'children') {
          node[key].forEach(function(child){
            trav(child);	
          })
          break;	
        }
        line.push(node[key]);	
      }    	
    } else {
      for (var key in node) {
        if (key.toString() === 'children') {
          break;	
        }
        line.push(node[key]);	
      }	
    }
    body.push(line);
  }
  trav(dataObj);
  csv+=keyLine.join(',') + '\n';
  body.forEach(function(element){
    csv+=element.join(',') + '\n';	
  })
  return csv;
}





module.exports = parseHelper
