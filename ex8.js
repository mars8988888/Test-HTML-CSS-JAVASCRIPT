// ---------------------------------------------------------------1.Date doi tuong array-----------------

// var homnay = new Date(); //gan bien bang constructor, gia tri gan co san
// var ngay = homnay.getDate();
// var thang = homnay.getMonth();
// var nam = homnay.getFullYear();
// var thoigian = ngay + " / " + thang + " / " + nam;
// document.write(thoigian);

var homnay = new Date(); //gan bien bang constructor, gia tri gan co san
var gio = homnay.getHours();
var phut = homnay.getMinutes();
var giay = homnay.getSeconds();
giay =(giay < 10)? "0" + giay : giay
var thoigianhour = gio + " : " + phut + " : " + giay;
document.write(thoigianhour + "<br>");

// -----------------------------------------------------------------2. doi tuong Array-----------------

var number = new Array(4,3,2,1,5);
document.write("So phan tu truoc add " + number.length + "<br>");
number.push(100);
document.write("So phan tu sau add " + number.length +"<br>");
for(var i= 0; i< number.length; i++){
    document.write(number[i] + "<br>");
}

//-------------------------------------------------------------------3. doi tuong trinh duyet Browser-----------------

//3.1 window
//3.2 document.
with(document){  // gom chung nhung lenh co bat dau bang document. 
    write();
    writeln();
}

//3.3 Event handler
    //3.3.1 onclick
        function testing(s){
            alert(s);
        }
        // onchange
        // onblur
        // onmouseover