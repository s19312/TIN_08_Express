const express = require('express');
const bodyParser = require('body-parser');
const port = 3456;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'pug');
app.post('/jsondata', function (request, response) {
    response.render(__dirname + '/views/8c.pug', {
        title: '8c',
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
    });
});
app.listen(port, () => {
    console.log('http://localhost:' + port + '/form');
})