import { S } from "vite/dist/node/types.d-aGj9QkWt";

console.log('Hello, TypeScript!');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.get('/', (req:any, res:any) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

class Pet{
Id: String;
species: String
age: number;
price: number;
constructor( species:String, age:number,price:number){
this.Id = Math.random().toString();
  this.species = species;
  this.age = age;
  this.price = price;
}
}