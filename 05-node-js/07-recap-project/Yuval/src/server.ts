import express from 'express'
import petRoute from './routes/petsRoutes'
const app = express()
const port = 3000;

app.use(express.static('public'))

app.use('/pets', petRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})