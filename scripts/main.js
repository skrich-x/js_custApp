(function(){
  'use strict';

  $(document).ready(function(){

  Parse.initialize("4GMr1b28Ptvx5QTqIffextxYstz416ZgjERoSiAC", "mTAhdElptaebxLTH82h41WUUUwJgVOou3JCec6kr");

  var Attendee = Parse.Object.extend("Attendee");

  $("#rsvp-form").submit(function(event){
      event.preventDefault();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var company = $("#company-name").val();
        var guests = $("#attending").val();
        var phone = $("#customer-phone").val();

        var newAttendee = new Attendee();
        newAttendee.set("firstName", firstName);
        newAttendee.set("lastName", lastName);
        newAttendee.set("company", company);
        newAttendee.set("guests", guests);
        newAttendee.set("phone", phone);

        newAttendee.save({
          success: function (){
            console.log("saved");
          }, error: function(error){
            console.log("Error:"+error.message);
          }
        });
    });
