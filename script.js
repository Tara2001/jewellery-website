const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event//
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


//more email validation//
// const isEmail = (emailVal) => {
//     var atSymbol = emailVal.indexof("@");
//     if (atSymbol < 1) return false;

//     var dot = emailVal.Lastindexof('.');
//     if (dot <= atSymbol + 2) return false;

//     if (dot === emailVal.length - 1) return false;

//     return true;
// }

//define the validate function//

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const mobileVal = mobile.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validate username//
    if (usernameVal == "") {
        setErrorMsg(username, 'Username cannot be blank');
        return false;
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username min 3 char');
    } else {
        setSuccessMsg(username);
    }

    // //validate email//
    // if (emailVal == "") {
    //     setErrorMsg(email, 'Email cannot be blank');
    // } else if (isEmail(emailVal)) {
    //     setErrorMsg(email, 'Invalid email');
    // } else {
    //     setSuccessMsg(email);
    // }
    var emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (emailpattern.test(emailVal)) {
        setSuccessMsg(email);
    } else {
        if (emailVal == "") {
            setErrorMsg(email, 'Email cannot be blank');
            return false;
        } else {
            setErrorMsg(email, 'Invalid email');
        }
    }

    //validate mobile//
    if (mobileVal == "") {
        setErrorMsg(mobile, 'Mobile number cannot be blank');
        return false;
    } else if (mobileVal.length != 10) {
        setErrorMsg(mobile, 'Invalid mobile number');
    } else {
        setSuccessMsg(mobile);
    }

    //validate password//
    if (passwordVal == "") {
        setErrorMsg(password, 'Password cannot be blank');
        return false;
    } else if (passwordVal.length <= 7) {
        setErrorMsg(password, 'Minimum 8 characters');
    } else {
        setSuccessMsg(password);
    }

    //validate cpassword//
    if (cpasswordVal == "") {
        setErrorMsg(cpassword, 'Password cannot be blank');
        return false;
    } else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, 'Re-enter your password');
    } else {
        setSuccessMsg(cpassword);
    }

    const sendData = (usernameVal, sRate, count) => {
        if (sRate == count) {
            const username = document.getElementById('username').value;
            alert('Signed up successfully');
            console.log(username);
            swal("Welcome! " + usernameVal, "Registration successful", "success");
            setTimeout(function () {
                // alert("Sup!");
                location.href = 'login.html?username=${usernameVal}'
            }, 500)
        }
    }

    //final data validation//
    const successMsg = (usernameVal) => {
        let formCon = document.getElementById('form-control');
        var count = formCon.length - 1;
        for (var i = 0; i < formCon.length; i++) {
            if (formCon[i].className == "form-control success") {
                var sRate = 0 + i;
                console.log(sRate);
                sendData(usernameVal, sRate, count);
            } else {
                return false;
            }
        }
    }
    console.log(email.value);
    successMsg();
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}