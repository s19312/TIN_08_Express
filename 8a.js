const express = require('express');
const port = 3456;
const app = express();
app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log('http://localhost:' + port);
});