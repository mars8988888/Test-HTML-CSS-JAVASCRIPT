
                    function check(){
                        var reEmail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
                        var sEmail = reg.txtEmail.value;
                        if (!reEmail.test(sEmail)) {
                            alert("Email is invalid");
                            reg.txtEmail.focus();
                            return false;
                        }

                        var sreEmail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
                        var CEmail =reg.txtCEmail.value;
                            if(!sreEmail.test(CEmail)){
                                alert("You must enter confirm email");
                                reg.txtCEmail.focus();
                                return false;
                        } else if (CEmail!= sEmail){
                            alert("Your confirm email doesnt match ");
                            reg.txtCEmail.focus();
                            return false;
                        }

                        var rePassword = /^\w{6,12}$/;
                            var sPassword = reg.txtPassword.value;
                            if (!rePassword.test(sPassword)) {
                                alert("Password cant be blank and must 6 to 12 characters");
                                reg.txtPassword.focus();
                                return false
                            }    

                        var reMobile = /^\d{7,12}/;
                            var sMobile = reg.txtMobile.value;
                                if (!reMobile.test(sMobile)) {
                                    alert("Mobile is invalid");
                                    reg.txtMobile.focus();
                                    return false;
                                }     
                        
                    alert("Congratulation!! Your account has been created successfully")
                    return true;
                        }
