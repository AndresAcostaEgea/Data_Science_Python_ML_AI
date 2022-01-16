/*var hour=new Date().getHours();
*/
hour = 17

if (hour <= 12 && hour >= 3){
    document.getElementById("iOne").innerHTML="Good morning";
    document.body.style.backgroundColor="yellow";
    document.getElementById("imThree").src="morning.jpeg";
} else if (hour >= 15){
    document.getElementById("iOne").innerHTML="Good night";
    document.body.style.backgroundColor="blue";
    document.getElementById("imThree").src="night.jpeg";
} else {
    document.getElementById("iOne").innerHTML="Good afternoon"
    document.body.style.backgroundColor="orange";
    document.getElementById("imThree").src="afternoon.jpeg";
}
