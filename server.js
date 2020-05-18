const express = require('express');
const app = express();

const data = [
    {
        _id: 1,
        body: "cy0194rncy01n79"
    },
    {
        _id: 2,
        body: "1d9-n870620916n723"
    }
];

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
});

app.listen(8089, () => {
    console.log('Server started')
});