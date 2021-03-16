import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ data: 'Hello World!!' }));

app.listen(3333);
