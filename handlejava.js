const express = require('express');
const app = express();
const port = 2000;

app.get('/',  (req, res) => {
    res.send('hello world hehe');
});

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
});
