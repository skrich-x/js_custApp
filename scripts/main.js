(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());

    $('rsvp-form').on("submit",function(e){
      e.preventDefault();

      console.log("Handling Submit");

      var data = {};
      data.name = $("#full-name").val();
      data.company = $("#company-name").val();
      data.attending = $("#attending").val();
      data.phone = $("#phone").val();

    })
  });
})();
//
// $(document).ready(function() {
//
// 	$("#commentForm").on("submit", function(e) {
// 		e.preventDefault();
//
// 		console.log("Handling the submit");
// 		//add error handling here
// 		//gather the form data
//
// 		var data = {};
// 		data.name = $("#name").val();
// 		data.email = $("#email").val();
// 		data.area = $("#area option:selected").val();
// 		data.comments = $("#comments").val();
//
// 	});
//
// });
// <script>
//         Parse.initialize("API KEY", "JAVASCRIPT KEY");
//
//         var ParseObj = Parse.Object.extend('myClass'); //create local parse object from your Parse class
//
//         $('#contact-form').submit(function(e) {
//         //on form submit
//             e.preventDefault();
//
//             //get data from form
//             var data = {
//                 fname: $("#fname").val(),
//                 lname: $("#lname").val(),
//                 email: $("#email").val()
//             };
//
//             //create new Parse object
//             parseObj = new ParseObj();
//
//             //match the key values from the form, to your parse class, then save it
//             parseObj.save(data, {
//                     //if successful
//                     success: function(parseObj) {
//                             alert(parseObj.get('fname') + " " + parseObj.get('lname') + " " + parseObj.get('email') + " saved to Parse.")
//                         }
//                     ,
//                     error: function(parseObj, error) {
//                         console.log(parseObj);
//                         console.log(error);
//                     }
//                 }
//             );
//         });
//     </script>
