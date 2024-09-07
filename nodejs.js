const express = require('express');
const mysql = require('mysql');
const path = require('path');
const multer = require('multer');
const app = express();
const pdf = require('html-pdf');
const fs = require('fs');

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
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the MySQL database
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Route to serve the HTML form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/home.html');
});

// Route to serve the HTML form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/contact_us.html');
});

// Route to handle contact form submission
app.post('/submit', function(req, res) {
    const { name, email, message } = req.body;

    // Insert form data into the MySQL database
    const sqlQuery = "INSERT INTO contact_us (name, email, message) VALUES (?, ?, ?)";
    connection.query(sqlQuery, [name, email, message], function(error, results, fields) {
        if (error) {
            console.error('Error inserting data into MySQL:', error);

            // Send error response with a single script block
            return res.send(`
                <script>
                    alert("Error submitting form data");
                    window.location.href = "contact_us.html";
                </script>
            `);
        }

        console.log('Form data submitted successfully');

        // Send success response with a single script block
        res.send(`
            <script>
                alert("Form data submitted successfully");
                window.location.href = "contact_us.html";
            </script>
        `);
    });
});



// Route for user signup
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Insert new user into the database
    const sqlQuery = "INSERT INTO signup(email, password) VALUES (?, ?)";
    connection.query(sqlQuery, [email, password], function(error, results, fields) {
        if (error) {
            console.error('Error executing MySQL query:', error);

            // Ensure only one response is sent
            return res.status(500).send('<script>alert("Internal Server Error");</script>');
        }

        console.log('Form data submitted successfully');

        // Ensure only one response is sent
        res.send('<script>alert("User created successfully");</script><script>window.location.href = "navbar.html";</script>');
    });
});



// Route for user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Check if the user exists
    connection.query('SELECT * FROM signup WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.send('<script>alert("Internal Server Error");</script><script>window.location.href = "home.html";</script>');
            return;
        }
        if (results.length === 0) {
            res.send('<script>alert("Invalid email or password");</script><script>window.location.href = "home.html";</script>');  
           
            return;
        }
        
        res.send('<script>alert("Login successful");</script><script>window.location.href = "home.html";</script>');  
    });
});

// Route to serve the HTML form
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/Registration_form.html'); // Change this to the path of your HTML file
});

// Route to handle form submission
app.post('/submit1', function(req, res) {
    // Handle form submission here
    // Extract form data from req.body and insert into MySQL database

    // Example code:
    const { appno, admno, name, fname, occ, ainc, mname, addr, gender, dob, nat, rel, community, com, nd, io, ior, iname, mi, be, tc, tcd, first_graduate, special_quota, mobile, aadhar, plus_two_cutoff, overall_rank, community_rank, allotment_category, admission_date } = req.body;

    // Insert form data into the MySQL database
    const sqlQuery = "INSERT INTO admission_form(appno, admno, name, fname, occ, ainc, mname, addr, gender, dob, nat, rel, community, com, nd, io, ior, iname, mi, be, tc, tcd, first_graduate, special_quota, mobile, aadhar, plus_two_cutoff, overall_rank, community_rank, allotment_category, admission_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)";
    connection.query(sqlQuery, [appno, admno, name, fname, occ, ainc, mname, addr, gender, dob, nat, rel, community, com, nd, io, ior, iname, mi, be, tc, tcd, first_graduate, special_quota, mobile, aadhar, plus_two_cutoff, overall_rank, community_rank, allotment_category, admission_date], function(error, results, fields) {
        if (error) {
            console.error('Error inserting data into MySQL:', error);
            res.send('<script>alert("Error submitting form data");</script>');  
            
            return;
        }
        console.log('Form data submitted successfully');
        
        res.send('<script>alert("Form submitted successfully");</script><script>window.location.href = "upload.html";</script>');
    });
});


//payment_details

// Route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'pay2.html'));
});




// Serve static files
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});

// Set up multer for file upload

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to serve the upload page
app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

// Route to handle file upload
app.post('/upload', upload.fields([
    { name: 'allotment', maxCount: 1 },
    { name: 'Transfer_Certificate', maxCount: 1 },
    { name: 'Conduct', maxCount: 1 },
    { name: '10th_marksheet', maxCount: 1 },
    { name: '12th_marksheet', maxCount: 1 },
    { name: 'Community', maxCount: 1 },
    { name: 'First_graduate', maxCount: 1 },
    { name: 'Medical_fitness', maxCount: 1 },
    { name: 'Aadhar', maxCount: 1 },
    { name: 'Birth', maxCount: 1 },
    { name: 'Nativity', maxCount: 1 },
    { name: 'Income', maxCount: 1 },
    { name: 'Physically_disabled', maxCount: 1 },
    { name: 'Bank_passbook', maxCount: 1 },
    { name: 'Ration', maxCount: 1 },
    { name: 'Sign', maxCount: 1 },
    { name: 'Passportsize_photo', maxCount: 1 }
]), (req, res) => {
    const files = req.files;

    // Array to hold promises for each file insertion
    const insertPromises = [];

    // Iterate over each file and insert it into the database
    for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
            const file = files[key][0];
            const insertPromise = new Promise((resolve, reject) => {
                const insertQuery = 'INSERT INTO files (filename, filedata) VALUES (?, ?)';
                connection.query(insertQuery, [file.originalname, file.buffer], (err, result) => {
                    if (err) {
                        console.error('Error inserting file into database:', err);
                        reject(err);
                    } else {
                        console.log('File inserted into database:', result);
                        resolve(result);
                    }
                });
            });
            insertPromises.push(insertPromise);
        }
    }

    // Wait for all promises to resolve or reject
    Promise.all(insertPromises)
        .then(() => {
            res.redirect('/pay2.html'); // Redirect to pay2.html after successful upload
        })
        .catch(error => {
            console.error('Error inserting files into database:', error);
            res.status(500).send('Error inserting files into database');
        });
});

app.post('/pay2', (req, res) => {
    const { name_1, dob, mbno, emailid, dep, batch, amount } = req.body;

    // Insert form data into the MySQL database
    const sqlQuery = "INSERT INTO payment_info (name_1, dob, mbno, emailid, dep, batch, amount) VALUES (?, ?, ?, ?, ?, ?, ?)";
    connection.query(sqlQuery, [name_1, dob, mbno, emailid, dep, batch, amount], (error, results, fields) => {
        if (error) {
            console.error('Error inserting data into MySQL:', error);
            return res.status(500).send('Error submitting form data');
        }
        console.log('Form data submitted successfully');
        
        res.send('<script>alert("Form submitted successfully");</script><script>window.location.href = "pay3.html";</script>'); // Redirect to pay3.html after successful form submission
    });
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'pay3.html'));
});




// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));


// Handle POST request for file upload

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/transaction_upload', upload.single('money_transaction'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileData = req.file.buffer;
    const fileName = req.file.originalname;

    const sql = "INSERT INTO transaction_files (file_name, file_data) VALUES (?, ?)";
    connection.query(sql, [fileName, fileData], (err, result) => {
        if (err) {
            console.error('Error inserting file into database:', err);
            return res.status(500).send('Error uploading file');
        }
        
        console.log('File uploaded successfully');
        res.redirect('/receipt');
    });
});

app.get('/receipt', (req, res) => {
    const query = 'SELECT * FROM payment_info ORDER BY id DESC LIMIT 1';

    connection.query(query, (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const paymentInfo = results[0];
            res.render('receipt', { paymentInfo });
        } else {
            res.send('No payment info found');
        }
    });
});

app.get('/download-receipt', (req, res) => {
    const query = 'SELECT * FROM payment_info ORDER BY id DESC LIMIT 1';

    connection.query(query, (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const paymentInfo = results[0];

            const htmlContent = `
      <!DOCTYPE html>
                <html lang="en">
                <head>
                    <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            .rec {
                text-align: center;
                margin-bottom: 20px;
            }
            .con3 {
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
                width: 80%;
            }
            .recdet, .recdect2 {
                width: 45%;
            }
            .recdet {
                float: left;
            }
            .recdect2 {
                float: right;
            }
            .receiptimg {
                width: 150px; /* Adjust image size as needed */
                height: auto;
            }
        </style>
                </head>
               
                <body>
                    <div class="con2">
                        <div class="rec">
                            <img src="/images/clg .png" class="receiptimg">
                            <h1>Government College of Engineering - Salem , 636011</h1>
                            <h4 id="date">${new Date().toLocaleDateString()}</h4>
                        </div>  
                    </div>
                    <div class="con3">
                        <div class="recdet">
                            <h3>PAYMENT CATEGORY  :</h3>
                            <h3>NAME              :</h3>
                            <h3>DATE OF BIRTH     :</h3>
                            <h3>BATCH             :</h3>
                            <h3>DEPARTMENT        :</h3>
                            <h3>MB.NO             :</h3>
                            <h3>AMOUNT IN Rs      :</h3>
                            <h3>TRANSACTION CHARGE:</h3>
                            <h3>TOTAL PAY         :</h3>
                        </div>
                        <div class="recdect2">
                            <h3>Tuition Fee</h3>
                            <h3>${paymentInfo.name_1}</h3>
                            <h3>${paymentInfo.dob}</h3>
                            <h3>${paymentInfo.batch}</h3>
                            <h3>${paymentInfo.dep}</h3>
                            <h3>${paymentInfo.mbno}</h3>
                            <h3>INR ${paymentInfo.amount}</h3>
                            <h3>INR 0.00</h3>
                            <h3>INR ${paymentInfo.amount}</h3>        
                        </div>
                    </div>
                </body>
                </html>
            `;

            const options = { format: 'A4' };

            pdf.create(htmlContent, options).toFile('./transactions/receipt.pdf', (err, result) => {
                if (err) {
                    console.error('Error generating PDF:', err);
                    res.status(500).send('Error generating PDF');
                } else {
                    console.log('PDF generated successfully');
                    res.download(result.filename);
                }
            });
        } else {
            res.send('No payment info found');
        }
    });
});