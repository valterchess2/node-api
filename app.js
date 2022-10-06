const express = require('express');
const app = express();
const port = 3000;
const service = require('./services/services')
app.use(express.json());
app.listen(port);

app.get('/', (req, res) => res.status(404));

app.get('/eventos', (req, res) => {
    service.getEventos(req, res);
});

app.get('/eventos/:id?', (req, res) => {
    service.getEventoPorId(req, res);
});

app.delete('/eventos/:id', (req, res) => {
    service.deletePorId(req, res);
    res.status(204);
});

app.post('/eventos', (req, res) => {
    service.postEvento(req, res);
    res.status(201);
});

app.put('/eventos/:id', (req, res) => {
    service.update(req, res);
} );