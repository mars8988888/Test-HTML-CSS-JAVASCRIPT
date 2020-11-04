function check(){
    var reFirstName = /^[A-Za-z0-9]+$/;
    var sFirstName = reg.txtFirstName.value;
    if (!reFirstName.test(sFirstName)) {
            alert("First name is invalid");
            reg.txtFirstName.focus();
            return false;   
    }   
    var reLastName = /^[A-Za-z]+$/;
    var sLastName = reg.txtLastName.value;
    if (!reLastName.test(sLastName)) {
            alert("Last name is invalid");
            reg.txtLastName.focus();
            return false;
    }
    var reEmail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
        var sEmail = reg.txtEmail.value;
        if (!reEmail.test(sEmail)) {
            alert("Email is invalid");
            reg.txtEmail.focus();
            return false;
        }
    var reTelephone = /^\d{8,16}$/;
        var sTelephone = reg.txtPhone.value;
        if (!reTelephone.test(sTelephone)) {
            alert("Telephone is invalid");
            reg.txtPhone.focus();
            return false;
        }
        alert("Congratulation!! Your information has been sent successfully")
        return true;
}
