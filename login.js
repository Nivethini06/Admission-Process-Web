//SIGNIN FORM VALIDATION
document.getElementById('signinForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    
    emailError.textContent = '';
    passwordError.textContent = '';
    
    if (!email) {
      event.preventDefault(); // Prevent form submission
      emailError.textContent = 'Please enter your email.';
    }

    if (!password) {
      event.preventDefault(); // Prevent form submission
      passwordError.textContent = 'Please enter your password.';
    }
  });

  // SIGNUP FORM VALIDATION
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var cpassword = document.getElementById('cpassword1').value;
    var emailError = document.getElementById('emailError1');
    var passwordError = document.getElementById('passwordError1');
    var cpasswordError = document.getElementById('cpasswordError1');
    emailError.textContent = '';
    passwordError.textContent = '';
    cpasswordError.textContent='';
    
    if (!email) {
      event.preventDefault(); // Prevent form submission
      emailError.textContent = 'Please enter your email.';
    }

    if (!password) {
      event.preventDefault(); // Prevent form submission
      passwordError.textContent = 'Please enter your password.';
    }
    
    if (password !== cpassword) {
      event.preventDefault(); // Prevent form submission
      cpasswordError.textContent = 'Passwords do not match.';
    }
  });

  // to alternate login and signup

  document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('signinForm');
    var loginContainer = document.getElementById('loginContainer');
    var showSignupLink = document.getElementById('showSignup');
    var showLoginLink = document.getElementById('login');
    var signupForm = document.getElementById('signupForm');

    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        loginContainer.style.display = 'none'; // Hide the login container when switching to signup
        signupForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block'; // Display the login form
        loginContainer.style.display = 'block'; // Display the login container
        signupForm.style.display = 'none'; // Hide the signup form
    });

    var showLoginLinkSignupForm = document.getElementById('showLogin');
    showLoginLinkSignupForm.addEventListener('click', function(event) {
        event.preventDefault();
        signupForm.style.display = 'none'; // Hide the signup form
        loginForm.style.display = 'block'; // Display the login form
        loginContainer.style.display = 'block'; // Display the login container
    });
});
/*
//Collect data
let uemail=document.getElementById('email1').value;
console.log(uemail);
let upass=document.getElementById('cpassword1').value;
console.log(upass);
*/


// Get reference to the close image
const closeImage = document.querySelector('.icon-close img');

// Get reference to the login container
const loginContainer = document.getElementById('loginContainer');

// Add click event listener to the close image
closeImage.addEventListener('click', function() {
    // Hide the login container
    loginContainer.style.display = 'none';
});
// Get reference to the close image inside the sign-up form
const closeImageSignup = document.querySelector('.signup .icon-close img');

// Get reference to the sign-up form
const signupForm = document.getElementById('signupForm');

// Add click event listener to the close image in the sign-up form
closeImageSignup.addEventListener('click', function() {
    // Hide the sign-up form
    signupForm.style.display = 'none';
});
