import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))

class Pet{
  id:string;
  name:string;
  species:string;
  age:number;
  price:number;

  constructor(name:string,species:string,age:number,price:number){
    this.id=crypto.randomUUID();
    this.name = name;
    this.species = species;
    this.age = age;
    this.price = price;
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})