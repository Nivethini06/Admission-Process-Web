fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
});
function generateCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var captchaLength = 6; // Change the length of the CAPTCHA as needed
    var captcha = "";
    for (var i = 0; i < captchaLength; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars.charAt(randomIndex);
    }
    document.getElementById("captcha").innerHTML = captcha;
  }

  // Verify CAPTCHA
  function verifyCaptcha() {
    var userInput = document.getElementById("userInput").value;
    var generatedCaptcha = document.getElementById("captcha").innerHTML;
    if (userInput === generatedCaptcha) {
      alert("CAPTCHA matched!");
    } else {
      alert("CAPTCHA does not match. Please try again.");
    }
  }
  /*VALIDATION*/
  // Function to validate name (alphabets only)
function validateName() {
  const nameInput = document.getElementById('name-1');
  const nameError = document.getElementById('name-1-error');
  const name = nameInput.value.trim();
  if (!name) {
      nameError.textContent = 'Please enter your name.';
      return false;
  } else if (!validateNameFormat(name)) {
      nameError.textContent = 'Please enter a valid name.';
      return false;
  } else {
      nameError.textContent = '';
      return true;
  }
}

// Function to validate name format (alphabets only)
function validateNameFormat(name) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name);
}

// Function to validate email
function validateEmail() {
  const emailInput = document.getElementById('emailid');
  const emailError = document.getElementById('emailid-error');
  const email = emailInput.value.trim();
  if (!email) {
      emailError.textContent = 'Please enter your email address.';
      return false;
  } else if (!validateEmailFormat(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      return false;
  } else {
      emailError.textContent = '';
      return true;
  }
}

// Function to validate email format
function validateEmailFormat(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to validate mobile number
function validateMobile() {
  const mbnoInput = document.getElementById('mbno');
  const mbnoError = document.getElementById('mbno-error');
  const mbno = mbnoInput.value.trim();
  if (!mbno) {
      mbnoError.textContent = 'Please enter your mobile number.';
      return false;
  } else if (!validateMobileFormat(mbno)) {
      mbnoError.textContent = 'Please enter a valid mobile number (10 digits).';
      return false;
  } else {
      mbnoError.textContent = '';
      return true;
  }
}

// Function to validate mobile number format
function validateMobileFormat(mbno) {
  const regex = /^\d{10}$/;
  return regex.test(mbno);
}

// Function to check if all fields are filled
// Function to check if all fields are filled
// Function to check if all fields are filled
function checkForm() {
  // Trigger validation for all fields
  const nameValid = validateName();
  const emailValid = validateEmail();
  const mobileValid = validateMobile();

  // Check if all fields are valid
  if (nameValid && emailValid && mobileValid) {
      // Redirect to pay-3.html if all validations pass
      window.location.href = "pay3.html";
  } else {
      alert('Please fill all details');
  }
}



// Event listeners for input fields to trigger validation on blur
document.getElementById('name-1').addEventListener('blur', validateName);
document.getElementById('emailid').addEventListener('blur', validateEmail);
document.getElementById('mbno').addEventListener('blur', validateMobile);

// Event listener for pay button click
document.getElementById('back-4').addEventListener('click', checkForm);
