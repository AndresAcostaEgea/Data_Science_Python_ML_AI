var rightName = "andresAcosta";
var rightPassword = "andres123";
var userBalance = 1000000;

function accessMessage(){
    var nameVar = document.getElementById("userName").value;
    var namePass = document.getElementById("userPassword").value;
    var userAmount = document.getElementById("userBal").value;

    if (nameVar == rightName && namePass == rightPassword && userAmount <= userBalance){
        alert("That is the right name and right password. Welcome!");
    } else{
        alert("Access denied.");
    }

    if (userAmount <= userBalance){
        var newBalance= userBalance-userAmount;
        alert("Withdraw successful. Your new balance is: " +newBalance)
    } else{
        alert("You have insufficient balance.")
    }
}


function calculate(){
    var numOne= document.getElementById("numberOne").value;
    var numTwo= document.getElementById("numberTwo").value;
    var numThree= numOne*numTwo;
    alert("Your number is " +numThree)
}