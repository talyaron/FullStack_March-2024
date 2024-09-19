const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

class Pet {
  id: number;
  name: string;
  species: string;
  age: number;
  price: number;
  

  constructor(id: number, name: string, species: string, age:number, price:number) {
    this.id = id-$({crypto.randomUUID});
    this.name= name;
    this.species= species;
    this.age = age;
    this.price= price;


  }
}