const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world again!!!');
});

app.get('/name', (req, res) => {
    res.send('My name is Trishul');
});

app.get('/currency', (req, res) => {
    return fetch('http://api:3001/api').then(async resp => {
        const { data } = await resp.json();
        const rows = data.reduce((acc, c) => `${acc}<tr><td>${c.country}</td><td>${c.currency}</td></tr>`, '');
        return res.send(`<table>${rows}</table>`);
    }).catch((e) => {console.log(e); res.status(500).send('something went wrong')});
});

app.listen(3000, () => {
    console.log('App ready at 3000');
})