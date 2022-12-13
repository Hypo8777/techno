// const in_btn = document.getElementById('in_btn');
const submitLogin = document.getElementById('submitLogin');


var in_username = document.getElementById('in_username');
var in_password = document.getElementById('in_password');

let tbl = {
    username: sessionStorage.getItem('username'),
    email: sessionStorage.getItem('email'),
    phone: sessionStorage.getItem('phone'),
    password: sessionStorage.getItem('password')
}

// submitLogin
// user_signup

submitLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((tbl.username == in_username.value) || (tbl.email == in_username.value) || (tbl.phone == in_username.value)) {
        if (tbl.password == in_password.value) {
            swal({
                title: "Sign In",
                text: "Success!",
                icon: "success",
                closeOnEsc: true,
                button: false
            });
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            swal({
                title: "Sign In",
                text: "Incorrect Password",
                icon: "error",
                closeOnEsc: true,
                button: false
            });
        }
    } else {
        swal({
            title: "Sign In",
            text: "User does not exist",
            icon: "error",
            closeOnEsc: true,
            button: false
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
});

// \|
// const up_btn = document.getElementById('up_btn');
const user_signup = document.getElementById('user_signup');

var up_username = document.getElementById('up_username');
var up_email = document.getElementById('up_email');
var up_phone = document.getElementById('up_phone');
var up_password = document.getElementById('up_password');

user_signup.addEventListener('submit', (e) => {
    sessionStorage.clear();
    e.preventDefault();
    if ((up_username.value.length == 0) || (up_password.value.length == 0) || (up_email.value.length == 0) || (up_phone.value.length == 0)) {
        swal({
            title: "Sign Up",
            text: "Input Fields Cannot be empty",
            icon: "error",
            closeOnEsc: true,
            button: false
        });
    } else {
        sessionStorage.setItem('username', up_username.value);
        sessionStorage.setItem('email', up_email.value);
        sessionStorage.setItem('phone', up_phone.value);
        sessionStorage.setItem('password', up_password.value);
        swal({
            title: "Sign Up",
            text: "Account Creation Success!",
            icon: "success",
            closeOnEsc: true,
            button: false
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
});
