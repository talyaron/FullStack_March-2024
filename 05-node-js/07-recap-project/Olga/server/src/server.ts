import express from 'express'
import petsRoutes from './routes/petsRoutes'
const app = express()
const port = 3000

app.use(express.json())

app.use('/api/pets', petsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})