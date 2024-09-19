const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

class pet{
  id: string;
  name: string;
  species:string;
  age:number;
  price: number;
  constructor(id: string, name: string, species:string, age:number, price: number){
    this.id = `id-${crypto.randomUUID()}`;
    this.name = name;
    this.species = species;
    this.age = age;
    this.price = price;
  }
}