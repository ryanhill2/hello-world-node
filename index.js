const express = require('express');
const app = express();
const port = 4000;

app.get('/ryan', (req, res) => {
    res.send('Something else');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
