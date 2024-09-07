const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'admission_web', // Change this to your actual database name
    user: 'sqluser', // Change this to your actual database user
    password: 'password' // Change this to your actual database password
});

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'pay2.html'));
});

app.post('/pay2', function(req, res) {
    const { name_1, dob,mbno,emailid,dep,batch } = req.body;

    // Insert form data into the MySQL database
    const sqlQuery = "INSERT INTO payment_info(name_1, dob, mbno,emailid,dep,batch) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(sqlQuery, [name_1, dob,mbno,emailid,dep,batch], function(error, results, fields) {
        if (error) {
            console.error('Error inserting data into MySQL:', error);
            res.send('Error submitting form data');
            return;
        }
        console.log('Form data submitted successfully');
        res.send('Form data submitted successfully');
    });
});




// Serve static files
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});