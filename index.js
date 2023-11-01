const express = require('express')
const app = express()

const routes = require('./routes.js')

app.use('/', routes)

app.listen(5000, () => {
  console.log('Server is running')
})

const var1 = 'hello'

console.log(var1)