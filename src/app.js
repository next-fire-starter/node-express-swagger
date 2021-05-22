const express = require('express')
const app = express()
const swaggerJsdoc = require('swagger-jsdoc');

//クロスサイト対応。swagger-uiから見た際、クロスサイトのエラーがでることへの対応。
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./src/app.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.get('/api-docs.json', function(req, res){
  res.setHeader('Content-Type','application/json');
  res.send(openapiSpecification);
});

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
 app.post('/login', function(req, res) {
  res.json(req.body);
});

module.exports = app;
