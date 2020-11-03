function check(){
    var FN = document.getElementById("firstname").value;
        if (FN == ""){
        alert (" Can not leave blank on first name");
        document.getElementById("firstname").focus();
        return false;
        }
    
    var LN = document.getElementById("lastname").value;
        if (LN == ""){
            alert (" Can not leave blank on last name");
            document.getElementById("lastname").focus();
            return false;
        }
    var EM = document.getElementById("email").value;
    var reEM = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
        if (EM == ""){
            alert (" Can not leave blank on email");
            document.getElementById("email").focus();
            return false;
        } else if (!reEM.test(EM)){
            alert("Email is not on correcting format");
            return false;
        }

    var TL = document.getElementById("telephone").value;
    var reTL = /^[0-9]/;
        if (TL == ""){
            alert (" Can not leave blank on telephone");
            document.getElementById("telephone").focus();
            return false;
        }else if (!reTL.test(TL)){
            alert("telephone is not on correcting format")
            return false;
        }
    alert ("Congratulation!! Your information has been sent successfully")
    return true;
}
