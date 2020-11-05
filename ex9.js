// window.onload = function(){
//     var second = 00;
//     var milisecond = 00;

//     var buttonSecond = document.getElementById("seconds");
//     var buttonMillisecond = document.getElementById("miliseconds");
//     var buttonStart = document.getElementById("start");
//     var buttonStop = document.getElementById("stop");
//     var buttonReset = document.getElementById("reset");
//     var abc;

//     buttonStart.onclick = function(){
//         clearInterval(abc);
//         var abc;
//         abc = setInterval(settimer,10);
//     }

//     buttonStop.onclick = function(){
//         clearInterval(abc);
//     }

//     buttonReset.onclick = function(){
//         clearInterval(abc);
//         second = "00";
//         milisecond = "00";
//         buttonSecond.innerHTML = second;
//         buttonMillisecond.innerHTML = milisecond;
//     }

//     function settimer(){
//         milisecond++;

//         if(milisecond < 9) {
//             buttonMillisecond.innerHTML = "0" + milisecond;
//         }
//         if(milisecond > 9){
//             buttonMillisecond.innerHTML = milisecond;
//         }

//         if( milisecond > 99) {
//             console.log("seconds");
//             second++;
//             buttonSecond.innerHTML = "0" + second;
//             milisecond = 0;
//             buttonMillisecond.innerHTML ="0" + 0;

//         }

//         if(second > 9){
//             buttonSecond.innerHTML = second;
//         }
//     }

// }

// var i = 1;
// var sum =0;
// for(i=0;i<=10;i++){
//     sum=sum+i;
// }
// alert(sum);

// var abc = "123"
// var cde = parseInt(abc)

// alert(cde + 7);
// var abc = new Date();
// var x = abc.getTime();
// alert(x);

// var abc = document.querySelector("#start.para")
// abc.innerHTML = "Day la nguyen anh tuan"

// var content = abc.innerHTML;
// alert(content);

// var abc = document.getElementById("div1");
// abc.setAttribute("class","ps")
function tinhtoan(){
    var a = parseInt(document.getElementById("haha").value);
    var b = parseInt(document.getElementById("kaka").value);
    
    var tong = a + b;
    alert(tong);
}

