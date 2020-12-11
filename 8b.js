const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3456;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/8b.html');
})
app.post('/formdata', (request, response) => {
    response.end(JSON.stringify(request.body));
})
app.listen(port, () => {
    console.log('http://localhost:' + port + '/form');
})