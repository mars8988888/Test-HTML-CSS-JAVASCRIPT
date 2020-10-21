// function kiemtra(){
//     //1.doc kieu du lieu
//     var reData = /^[A-Za-z]/; // Alphabet
//     var sData = reg.data.value;   
//     //var sData = document.getElementById(id).value;
//     //2.kiem tra loi
   
//     if //(sData.lenghth == 0)
//         (!reData.test(sData)) //(reData.test(sData) == false) 
//         {
//         //3. Thoi coi
//         alert("data khong cho bo trong");
//         //4.phat
//         return false;
//     }
// }

Username

function kiemtra(){
    //1.doc kieu du lieu txtUser
    var reUser = /^\w/; // /^[A-Za-z0-9]/;            // Alphanumeric
    var sUser = reg.txtUser.value;   //object.property
    if (!reUser.test(sUser)) {
        alert("User chua dung");
        reg.txtUser.focus();        //object.method
        return false;
    }
}

Email 


function kiemtra(){
    //1.doc kieu du lieu txtUser
    var reEmail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;     // /^[A-Za-z0-9]/;            // Alphanumeric
    var sEmail = reg.txtEmail.value;                //object.property
    if (!reEmail.test(sEmail)) {
        alert("email khong hop le");
        reg.txtEmail.focus();                        //object.method
        return false;
    }
}