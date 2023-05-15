const XLSX = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = XLSX.readFile('path/to/your/excel/file.xlsx');

// Get the first sheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the sheet data to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Save the JSON data to a file
fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));

