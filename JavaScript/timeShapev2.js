var t0=performance.now()

var rNum=Math.floor((Math.random()*300)+100)
var rNumTwo=Math.floor((Math.random()*800)+1)


var shapes=["shapeOne","shapeTwo","shapeThree"]
var rShape=Math.floor((Math.random()*3)+0)
var rOneShape= shapes[rShape]


var shapePos=document.getElementById(rOneShape);
shapePos.style.position='absolute';
shapePos.style.top=rNum+"px";
shapePos.style.left=rNumTwo+"px";






for (i=0;i<10;i++){

    function clickOne(rOneShape){

    document.getElementById(rOneShape).style.display="block";

    var t1=performance.now();
    var tr=(t1-t0)*0.001;
    document.getElementById("reactionTime").innerHTML="Your reaction time is: "+(tr)+" seconds";


    }

}    




