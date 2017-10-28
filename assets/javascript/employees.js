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

 /* $("#add-employee-btn").on("click", function(event){ //
    event.preventDefault();
    var nameInput = $("#employee-name-input").val();
    $("table").append(`<tr>
    <td>${nameInput}</td>
    <td></td>
    </tr>`);
*/

    var employeeName = "";
  var role = "";
  var startDate = "";
  var monthlyRate = 0;

 
  $('#add-employee-btn').on("click", function(event){
    event.preventDefault();
    employeeName = $('#employee-name-input').val().trim();
        $('#employee-name-input').val("");
    role = $('#role-input').val().trim();
        $('#role-input').val("");
    startDate = $('#start-input').val().trim(); 
        $('#start-input').val("");
    monthlyRate = $('#rate-input').val().trim();
        $('#rate-input').val("");
    database.ref().push({
        employeeName: employeeName,
        employeeRole: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
    });

  /*  $("table tbody").append(`<tr>
    <td>${employeeName}</td>
    <td>${role}</td>
    <td>${startDate}</td>
    <td>Months Worked placeholder</td>
    <td>${monthlyRate}</td>
    <td>Total billed placeholder</td>
    </tr>`);*/
    database.ref().on("child_added", function(snapshot, prevChildKey){
        var newName = snapshot.val().employeeName;
        var newRole = snapshot.val().employeeRole;
        var newDate = snapshot.val().startDate;
        var newRate = snapshot.val().monthlyRate;
        console.log( snapshot.val().employeeName );
        $("table tbody").append(`<tr>
        <td>${newName}</td>
        <td>${newRole}</td>
        <td>${newDate}</td>
        <td>Months Worked</td>
        <td>${newRate}</td>
        <td>Total Billed</td>
        </tr>`);
    });

  });



 