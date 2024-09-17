const express = require('express')
const router = express.Router();


class User {
    constructor(public id: number, public name: string) {
      this.id = id
      this.name = name
  
    }
  }
  
  const users: User[] = [
    new User(1, 'John'),
    new User(2, 'Jane'),
    new User(1234, 'Dan'),
  ]


module.exports = router