const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');



// static path
app.use(express.static(publicPath));


// start up server
app.listen(port, () => {
    console.log("Server started on port: "+port);
})

