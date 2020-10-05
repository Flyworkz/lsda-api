const express = require('express');
const router = require('./router');
const app = express();
const port = process.env.PORT || 8080;

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

module.exports = app;