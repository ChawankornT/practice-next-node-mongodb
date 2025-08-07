const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); // File System

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/writeFile', (req, res) => {
    fs.writeFileSync('test.txt', 'Hello World');
    res.send('File written');
});

app.get('/readFile', (req, res) => {
    const data = fs.readFileSync('test.txt');
    res.send(`data in file = ${data}`);
});

app.post('/hello', (req, res) => {
    res.send(req.body);
});

app.put('/myPut', (req, res) => {
    res.send(req.body);
});

app.delete('/myDelete/:id', (req, res) => {
    res.send(`id = ${req.params.id}`);
});

app.get('/', (req, res) => {
    res.send('Hello World with Express');
});

app.get('/hello/:name', (req, res) => {
    res.send(`Hello = ${req.params.name}`);
});

app.get('/hello/:name/:age', (req, res) => {
    res.send(`Hello = ${req.params.name} age = ${req.params.age}`);
});

app.listen(3001, () => {
    console.log('Server is running on 127.0.0.1:3001');
});