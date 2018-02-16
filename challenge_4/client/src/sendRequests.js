import Axios from 'axios'

export var getScores = function () {
  Axios.get('http://127.0.0.1:3000/')
  .then(function (response){
    console.log(response)	
  })


}