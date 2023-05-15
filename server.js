const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/convert', (req, res) => {
  // Execute the excelToJson.js script using the child_process module
  const child = exec('node excelToJson.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.sendStatus(500); // Return a server error response
    } else {
      console.log('Conversion completed successfully');
      res.sendStatus(200); // Return a success response
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

