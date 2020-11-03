function check(){
        var reUsername = /^\w{6,12}$/;
            var sUsername = reg.txtUsername.value;
            if (!reUsername.test(sUsername)) {
                alert("Username cant be blank and must 6 to 12 characters");
                reg.txtUsername.focus();
                return false;  
            }
        var rePassword = /^\w{6,12}$/;
            var sPassword = reg.txtPassword.value;
            if (!rePassword.test(sPassword)) {
                alert("Password cant be blank and must 6 to 12 characters");
                reg.txtPassword.focus();
                return false;  
            } else if (sPassword == sUsername){
                alert("Password cant be the same with username");
                reg.txtPassword.focus();
                return false;
            }
        
        var srePassword = /^\w{6,12}$/;
        var Cpassword =reg.txtsPassword.value;
            if(!srePassword.test(Cpassword)){
                alert("You must enter confirm password");
                reg.txtsPassword.focus();
                return false;
        } else if (Cpassword != sPassword){
            alert("Your confirm password doesnt match ");
            reg.txtsPassword.focus();
            return false;
        }

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
        var reMobile = /^[0-9]+$/;
            var sMobile = reg.txtMobile.value;
                if (!reMobile.test(sMobile)) {
                    alert("Mobile is invalid");
                    reg.txtMobile.focus();
                    return false;
                }  
                  
        var reTelephone = /^[0-9]+$/;
        var sTelephone = reg.txtTelephone.value;
            if (!reTelephone.test(sTelephone)) {
                alert("Telephone is invalid");
                reg.txtTelephone.focus();
                return false;
            }
        
        alert("Congratulation!! Your account has been created successfully")
        return true;
}
