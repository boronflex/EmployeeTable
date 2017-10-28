// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
    apiKey: "AIzaSyCL3TIpe4rU6V7P6VX5-2lXPKyKKYaMHLo",
    authDomain: "first-project-7d64a.firebaseapp.com",
    databaseURL: "https://first-project-7d64a.firebaseio.com",
    projectId: "first-project-7d64a",
    storageBucket: "first-project-7d64a.appspot.com",
    messagingSenderId: "69478572084"
  };
  firebase.initializeApp(config);
  // Assign the reference to the database to a variable named 'database'
  //var database = ...
  
  var database = firebase.database();

  $("#submit").on("click", function(){ //
    var nameInput = $("#nameInput").val();
    $("table").append(`<tr>
    <td>${nameInput}</td>
    <td></td>
    </tr>`);
  });