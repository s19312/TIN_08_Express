const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3456;
app.set('views', '/views');
app.set('view engine', 'pug');

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/8b.html');
})

app.post('/formdata', function(request, response) {
    response.render(__dirname + '/views/8c.pug', {
        title: '8c',
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email
    });
});
app.listen(port, () => {
    console.log('http://localhost:' + port + '/form');
})