//Only one line
/* 1.declare variable
    s =??? / value also type/ vd:300 number also integer
*/ 
//var s = 300;
//alert(s);
/* 
    2.Primirity Data type
    -literal declaration
    -Contructor declaration
*/ 
//var literaldec = "test literal declaration"; 
//var objectdec = new String("test literal declaration")
/* 
    3.advance data type gioi thieu
    -Array,Date..
    -function
    -Object
*/ 
/*
var number = new Array(1,2,3,4,5);
var homay = new Date();
var gio = homay.getHours();
var phut = homnay.getminutes();
var thoigian = gi o + " : "+ phut();
alert(number[0]);
document.write(thoigian);*/

/* 
    4.Buil-in =system function
    - alert()- confirm ()- promot () ---- Day la doi tuong cua window, vd vuet day du window.alert("test")
    -parseInt() / parseFloat()
    -eval()
    -IsNan()
*/
// alert("test");
// var ans = confirm("ban dong y hay khong");
// if(ans == true){     // true la mac dinh . Co the viet la if(ans)
//     //document.write("cam on ban da dong y")
//     location.href="http://www.google.com"
// } 
// else {
//     document.write("tam biet");
// }

// var username = prompt("Vui long nhap username");
// document.write(username)

// var bieuthuc="10/2 + 3^2"
// tinhtoan = eval(bieuthuc);
// alert(tinhtoan);

/* // var phone = "12313"
// if(isNaN(phone)){ //   NaN = not a number
//     alert("So dien thoai phai la ky so")
// }
 */
// var n1 = "11";
// var n2 = "10";
// var sum = parseInt(n1) + parseInt(n2); // chuyen 1 chuoi thanh so. 
// alert(sum);

// var dk = 10, test;
// test = (dk >= 10)? "co hai chu so": "chi co 1 chu so"
// document.write(test)

// var p1 = '<hr align="left" width="'
// var p2 = '%">'

// for(var i=5; i<100; i++){
//     document.write(p1 + i + p2)
// }

function kiemtra(){
    //1.doc kieu du lieu
    var sData = reg.data.value;   
    //var sData = document.getElementById(id).value;
    //2.kiem tra loi
   
    if //(sData.lenghth == 0)
        (sData=="") 
        {
        //3. Thoi coi
        alert("data khong cho bo trong");
        //4.phat
        return false;
    }
    return true;
}

