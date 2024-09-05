import express from 'express';
const app = express()
const port = 3000

app.use(express.static('public')) //serve static files from folder "public"
// Routes
//root route
app.get('/hi', (req, res) => {
  
  res.send('<h1>Hello From Express</h1><p>Express is a web application framework for Node.js</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})