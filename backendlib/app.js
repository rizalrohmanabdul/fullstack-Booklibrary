require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 3333

const categoryRoute = require('./src/routes/category')
const borrowerRoute = require('./src/routes/borrower')
const bookRoute     = require('./src/routes/book')
const borrowingRoute = require('./src/routes/borrowing')

app.listen(port, () => {
  console.log(`\n App ini berjalan di port/ App listening on port ${port} \n `)
})

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use(`/book`, bookRoute)
app.use(`/category`, categoryRoute)
app.use(`/borrower`, borrowerRoute)
app.use('/borrowing', borrowingRoute)