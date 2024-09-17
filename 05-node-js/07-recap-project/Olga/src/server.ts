// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

class User {
  name: string;
  mail: string;
  password: string;
  isAdmin: boolean;

  constructor(name: string, mail: string, password: string, isAdmin?: boolean) {
      this.name = name
      this.mail = mail
      this.password = password
      this.isAdmin = isAdmin || false
  }
}

class Pet {
  id: string;
  name: string;
  type: string;
  story: string;
  image: string;
  care: string;
  constructor(name: string, type: string, story: string, image: string, care: string) {
      this.id = `id-${crypto.randomUUID()}`
      this.name = name
      this.type = type
      this.story = story
      this.image = image
      this.care = care
  }
}

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})