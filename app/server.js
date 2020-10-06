const express = require('express');
const router = require('./router');
const expressSwagger = require('express-swagger-generator');

const app = express();
const port = process.env.PORT || 8080;
const generator = expressSwagger(app);

app.use('/v1', router);

// On configure les options d'express-swagger-generator
let options = {
    swaggerDefinition: {
        info: {
            description: 'API utilisant une API sur le thème du Seigneur des Anneaux pour récupérer des données en y ajoutant de la valeur',
            title: 'Le Seigneur Des Anneaux - L\'API',
            version: '1.0.0',
        },
        host: `localhost:${port}`,
        basePath: '/v1',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
        securityDefinitions: {}
    },
    basedir: __dirname, //app absolute path
    files: ['./router.js'] //Path to the API handle folder
};

// On génère la doc express-swagger
generator(options);


app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

module.exports = app;