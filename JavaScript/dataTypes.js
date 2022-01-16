function pOne(){
    var eatVeg = 100

    if (eatVeg >= 20){
        document.getElementById("parOne").innerHTML= "It is too much!";
        document.body.style.backgroundColor="green";
    }else if(eatVeg <= 5){
        document.getElementById("parOne").innerHTML="It is too few!";
        document.body.style.backgroundColor="red";
    } else {
        document.getElementById("parOne").innerHTML="That is healthy!";
        document.body.style.backgroundColor="blue";
    }
}

function mOne(){
    var exercise = 50;

    if (exercise > 30){
        document.getElementById("parOne").innerHTML= "You are healthy!";
        document.body.style.backgroundColor="green";
    } else{
        document.getElementById("parOne").innerHTML= "You will gain weight.";
        document.body.style.backgroundColor="red";
    }
    
}

