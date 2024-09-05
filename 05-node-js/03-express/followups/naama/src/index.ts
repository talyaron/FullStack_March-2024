import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/oops', (req, res) => {
  res.send('<link rel="stylesheet" href="./dist/styles.css"><h1>oops!</h1><p>this page is not ready!</p><a href="">back</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})