import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
    return response.send('Hello World')
})

app.listen(3333);