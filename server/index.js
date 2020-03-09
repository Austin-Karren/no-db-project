const express = require('express')
const cors = require('cors')
const jc = require('./controllers/jedi_controller');

const app = express();
const PORT = 3434;

app.use(cors());
app.use(express.json());

const baseUrl = '/api/jedi';
app.get(baseUrl, jc.read);
app.post(baseUrl, jc.create);
app.put(`${baseUrl}/:id`, jc.update);
app.delete(`${baseUrl}/:id`, jc.delete);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));