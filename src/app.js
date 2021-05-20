const express = require('express')
const app = express()

//-----------------------------------------------------Root
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

module.exports = app;
