fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
});
// JavaScript to redirect after 5 seconds
 // 5000 milliseconds = 5 seconds
