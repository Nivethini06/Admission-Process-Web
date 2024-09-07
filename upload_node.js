const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

// MySQL database configuration
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'admission_web', // Change this to your actual database name
    user: 'sqluser', // Change this to your actual database user
    password: 'password'
});

// Set up multer for file upload
const upload = multer();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the upload.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});

// Route for file upload
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
    { name: 'Passportsize_photo', maxCount: 1 },
]), (req, res) => {
  console.log(req.files); 
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

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//res.send('<script>window.location.href = "pay2.html";</script>');