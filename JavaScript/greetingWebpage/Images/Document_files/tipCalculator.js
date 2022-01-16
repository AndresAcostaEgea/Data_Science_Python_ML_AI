function bCalculate(){
    var vAmount = document.getElementById("billAmount").value;
    var rService = document.getElementById("selectServ").value;
    var nPeople = document.getElementById("numPeople").value;
    var tipPerson = (vAmount*rService)/nPeople

    document.getElementById("tipCal").innerHTML="The tip <br>" +"per person is: <br>" +"$"+tipPerson;

}