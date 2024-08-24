const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.post('/receive', (req, res) => {

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Requisição recebida de IP: ${ip}`);

    res.json({ message: 'Requisição recebida', ip: ip });
});

app.listen(port, () => {
console.log(`API de destino rodando em httplocalhost:${port}`);
});