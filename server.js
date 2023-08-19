const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/",(req, res) => {
    res.sendfile('public/index.html');
});

app.listen(5500,()=> {
    console.log('listening on port : 8081');
});