const express = require('express');
//const path = require("path");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create an express server and set port 
const app = express();
const port = process.env.PORT || 3001

// Set up body parsing, static and route middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes );
app.use('/', htmlRoutes);


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });

require("./routes/apiRoutes");
require("./routes/htmlRoutes");


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});