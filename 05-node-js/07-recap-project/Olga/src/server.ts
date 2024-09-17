// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

const usersRoutes = require('./routes/petsRoutes')
app.use('/api/pets', usersRoutes)



app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})