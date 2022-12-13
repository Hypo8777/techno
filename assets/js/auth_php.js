

// // PHP SESSIONS

// function startSession() {
//     $.ajax({
//         type: "php/views/sessions.php?user_sessions",
//         url: "GET",
//         success: function (response) {
//             return response;
//         }
//     });
// }

// // Login
// const submitLogin = document.getElementById('submitLogin');

// var in_username = document.getElementById('in_username');
// var in_password = document.getElementById('in_password');

// submitLogin.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const userInput = {
//         username: in_username.value,
//         password: in_password.value
//     }
//     $.ajax({
//         type: "POST",
//         url: "php/controller/UserController.php?login",
//         data: userInput,
//         success: async function (response) {
//             // console.log(await response);
//             const resp = JSON.parse(await response);
//             const statusResponse = resp.status;
//             const statusMessage = resp.msg;
//             const statusGo = resp.goto;
//             const sessUsername = resp.username;
//             const sessEmail = resp.email;
//             const sessIs_admin = resp.is_admin;
//             const sessPhoneNumber = resp.phone_number;
//             const sessUserId = resp.user_id;
//             if (statusResponse !== 0) {
//                 setTimeout(() => {
//                     sessionStorage.setItem('user_id', sessUserId);
//                     sessionStorage.setItem('username', sessUsername);
//                     sessionStorage.setItem('email', sessEmail);
//                     sessionStorage.setItem('is_admin', sessIs_admin);
//                     sessionStorage.setItem('phone_number', sessPhoneNumber);
//                     swal("Login", statusMessage + " Now logging in.", {
//                         icon: "success",
//                         button: false,
//                         closeOnEsc: true
//                     });
//                     setTimeout(() => {
//                         window.location.href = statusGo;
//                     }, 500);
//                 }, 1000);
//             } else {
//                 swal("Login", statusMessage, {
//                     icon: "error",
//                     button: false,
//                     closeOnEsc: true
//                 });
//             }
//         }
//     });
// });

// // Create
// const submitCreate = document.getElementById('submitCreate');

// var up_username = document.getElementById('up_username');
// var up_email = document.getElementById('up_email');
// var up_phone = document.getElementById('up_phone');
// var up_password = document.getElementById('up_password');


// submitCreate.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const createInput = {
//         up_username: up_username.value,
//         up_email: up_email.value,
//         up_phone: up_phone.value,
//         up_password: up_password.value
//     }
//     $.ajax({
//         type: "POST",
//         url: "php/controller/UserController.php?register",
//         data: createInput,
//         success: async function (response) {
//             // console.log(await response)
//             const resp = JSON.parse(await response);
//             var statusResponse = resp.status;
//             var statusMessage = resp.msg;
//             if (statusResponse !== 0) {
//                 swal("Register", statusMessage, {
//                     icon: "success",
//                     button: false,
//                     closeOnEsc: true
//                 });
//             } else {
//                 swal("Register", statusMessage, {
//                     icon: "error",
//                     button: false,
//                     closeOnEsc: true
//                 });
//             }
//         }
//     });
// });