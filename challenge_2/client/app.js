/*
I need to get values form my search bar. 
I need to put it in JSON
I need to then make a post request to my json 

*/

//get the value from inputbar

$('.send').on('click', function (event){
	var input = $('#input-json').val()
  // input = JSON.stringify(input); 
  event.preventDefault();
  $.ajax({
	   url: 'http://127.0.0.1:3000/',
	   type:'POST',
	   data: input,
	   contentType:'application/json',
	   success: function(data) {
	     $('.csv-output').text(data);
	   },
	   error: function() {
	      $('body').html('<p>An error has occurred</p>');
	      alert('refresh page and edit your input to match the required JSON format')
	   }
  });
})

$('.history').on('click', function (event){
  $.ajax({
    url: 'http://127.0.0.1:3000/history',
    type: 'GET',
    dataType:'text',
    success: function (data) {
      $('.cache').text(data);
    },
    error: function () {
      alert('send better data and maybe you would have a history!')	
    }

  })	
})

// $.ajax({
//       url: app.server,
//       type: 'POST',
//       data: message,
//       success: function (data) {
//         // Clear messages input
//         app.$message.val('');

//         // Trigger a fetch to update the messages, pass true to animate
//         app.fetch();
//       },
//       error: function (error) {
//         console.error('chatterbox: Failed to send message', error);
//       }
//     });
//   },