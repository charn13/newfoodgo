const express = require('express')
const app = express()
const port = 3600
var cors = require('cors')
const mongoDB = require('./db')
 mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
    "Access-Control-Allow-Header",
    "Origin, x-Requsted-With, Content-Type, Accept")
next();
})
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/', require("./Routes/CreatUser"))
app.use('/api/', require("./Routes/OrderData"))
app.use('/api/', require("./Routes/DisplayData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})