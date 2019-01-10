import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import info from './src/server/info';

const PORT = 8000;
const app = express();

app.use('/_api', morgan('combined'));
app.use('/_api', bodyParser.json());
app.use('/_api/info', info);

app.use('/', express.static('public'));


const server = app.listen(PORT, () => {
    console.log(`Server listening at ${PORT} for connections`);
});

export default server;