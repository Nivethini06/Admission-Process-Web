const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// Ensure the 'transactions' directory exists
const transactionsDir = path.join(__dirname, 'transactions');
if (!fs.existsSync(transactionsDir)) {
    fs.mkdirSync(transactionsDir);
}

// MySQL database connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'admission_web', // Change this to your actual database name
    user: 'sqluser', // Change this to your actual database user
    password: 'password' // Change this to your actual database password
});

// Function to fetch and handle file from database
function fetchFileFromDatabase(fileId, callback) {
    // SQL query to select file data based on ID
    const query = 'SELECT file_name, file_data FROM transaction_files WHERE id = 11';

    connection.query(query, [fileId], (err, results) => {
        if (err) {
            console.error('Error fetching file from database:', err);
            callback(err, null);
            return;
        }

        if (results.length > 0) {
            const file = results[0];
            const filename = file.file_name; // Updated to match correct column name
            const filedata = file.file_data; // Updated to match correct column name

            // Save file to disk
            const savePath = path.join(transactionsDir, filename);
            fs.writeFile(savePath, filedata, (err) => {
                if (err) {
                    console.error('Error saving file:', err);
                    callback(err, null);
                } else {
                    console.log(`File saved to: ${savePath}`);
                    callback(null, savePath);
                }
            });
        } else {
            callback(new Error('File not found'), null);
        }
    });
}

// Example usage: Fetch file with ID 1
const fileId = 1;
fetchFileFromDatabase(fileId, (err, filePath) => {
    if (err) {
        console.error('Failed to fetch file:', err);
    } else {
        console.log('File fetched successfully:', filePath);
        // Handle file as needed (e.g., render, serve to client)
    }
});
