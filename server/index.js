import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=>{
    res.send("Login page ghjs");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
