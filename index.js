// Requiring necessary modules
const express = require('express');
const fs = require('fs');
const app = express();

// Defining get request at '/' route
app.get('/get', function(req, res) {
  // Read JSON data from file
  fs.readFile('data.json', 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    
    // Send the JSON response
    res.json(jsonData);
  });
});

// Setting the server to listen at port 3000
app.listen(3000, function(req, res) {
  console.log("Server is running at port 3000");
});
