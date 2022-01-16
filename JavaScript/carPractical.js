var carModel = ['Audi', 'Ferrari', 'Lamborgini', 'Lotus', 'Aston Martin', 'Mercedes'];

var dispCars = '';

function carMod(){
    for (i=0; i<carModel.length; i++){
        dispCars += carModel[i] + ' <br>';
        document.getElementById("carList").innerHTML = dispCars;
    }

}