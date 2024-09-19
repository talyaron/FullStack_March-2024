const express = require('express')
const app = express()
const port = 3000

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))

class Pets {
  constructor(id:string, name:string, species:string, age:number, price:number) {
    name
    species
    age
    price
  }
}