onload = function(){
    var second = 00;
    var milisecond = 00;

    var buttonSecond = document.getElementById("seconds");
    var buttonMillisecond = document.getElementById("miliseconds");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var abd;

    buttonStart.onclick = function(){
        clearInterval(abc);
        abc = setInterval(settime,10);
    }

    buttonStop.onclick = function(){
        clearInterval(abc);
    }

    buttonReset.onclick = function(){
        clearInterval(abc);
        Second = "00";
        millisecond ="00";
        buttonSecond.innerHTML = second;
        buttonMillisecond.innerHTML =milisecond;
    }

    function settime(){
        milisecond++;

        if(milisecond < 9) {
            buttonMillisecond = "0" + milisecond;
        }
        if(milisecond > 9){
            buttonMillisecond = milisecond;
        }

        if( milisecond > 99) {
            console.log("seconds");
            second++;
            buttonSecond.innerHTML = "0" + second;
            milisecond = 0;
            buttonMillisecond.innerHTML ="0" + 0;

        }

        if(second > 9){
            buttonSecond.innerHTML = second;
        }
    }

}

var i = 1;
var sum= 0;

for (i = 1; i <= 10; i++){
    sum = sum + i;
}

document.write(sum);