const express = require('express')
const app = express()
const port = 3000

import petsRouter from './routes/petsRoutes';


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))

app.use('/pets', petsRouter)