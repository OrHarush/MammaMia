const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.get('/api', (request, response) => {
    response.json({"users": ["1", "2", "3"]})
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
})