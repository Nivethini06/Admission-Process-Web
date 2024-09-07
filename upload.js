fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });
  /*
'
// Function to validate the form before submission
function validateForm() {
    var uploadForm = document.getElementById("uploadForm");
    var inputs = uploadForm.getElementsByTagName("input");
    var isValid = true;

    // Loop through each input element
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.type === "file") {
            var fileName = input.value;
            // Check if file is uploaded
            if (fileName === "") {
                // If required files are not uploaded, set isValid to false
                if (input.id !== "First graduate" && input.id !== "Physically disabled") {
                    isValid = false;
                    break;
                }
            } else {
                // If file is uploaded, display tick mark
                var tickId = input.id + "Tick";
                var tickElement = document.getElementById(tickId);
                if (tickElement) {
                    tickElement.style.display = "inline";
                }
            }
        }
    }

    // If required files are not uploaded, show alert message and return false
    if (!isValid) {
        alert("Please upload all required documents except 'First graduate' and 'Physically disabled'.");
        return false;
    }

    // Form is valid, continue with submission
    return true;
}
'*/
// Function to validate the form before submission
function validateForm() {
  var uploadForm = document.getElementById("uploadForm");
  var inputs = uploadForm.getElementsByTagName("input");
  var isValid = true;

  // Loop through each input element
  for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.type === "file") {
          var fileName = input.value;
          // Check if file is uploaded
          if (fileName === "") {
              // If required files are not uploaded, set isValid to false
              if (input.id !== "First graduate" && input.id !== "Physically disabled") {
                  isValid = false;
                  break;
              }
          } else {
              // If file is uploaded, display tick mark
              var tickId = input.id + "Tick";
              var tickElement = document.getElementById(tickId);
              if (tickElement) {
                  tickElement.style.display = "inline";
              }
          }
      }
  }

  // If required files are not uploaded, show alert message and return false
  if (!isValid) {
      alert("Please upload the documents");
      
  }
  else{
    window.location.href="pay2.html"
  }

  
}

// Function to display tick mark when file is selected
function displayTick(inputId) {
  var tickId = inputId + "Tick";
  var tickElement = document.getElementById(tickId);
  if (tickElement) {
      tickElement.style.display = "inline";
  }
}

// Attach onchange event listener to file input elements
var fileInputs = document.querySelectorAll("input[type=file]");
fileInputs.forEach(function(input) {
  input.addEventListener("change", function() {
      displayTick(this.id);
  });
});
