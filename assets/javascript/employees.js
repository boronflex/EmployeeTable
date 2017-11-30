// Initialize Firebase

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8vQGsKSlYIl-awwROxPnuWzyB6oRr5vc",
    authDomain: "week7homework-deae3.firebaseapp.com",
    databaseURL: "https://week7homework-deae3.firebaseio.com",
    projectId: "week7homework-deae3",
    storageBucket: "week7homework-deae3.appspot.com",
    messagingSenderId: "535174173216"
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
    startDate = Date.parse($('#start-input').val().trim()); 
    console.log(startDate);
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

        var convertedDate = moment(newDate);
        var monthsWorked = moment(moment()).diff(convertedDate , "months");
        console.log("months worked: " + monthsWorked);
        var billed = monthsWorked * newRate;

        $("table tbody").append(`<tr>
        <td>${newName}</td>
        <td>${newRole}</td>
        <td>${newDate}</td>
        <td>${monthsWorked}</td>
        <td>${newRate}</td>
        <td>${billed}</td>
        </tr>`);
    });

  });


 