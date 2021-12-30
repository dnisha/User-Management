const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const path  = require('path')


dotenv.config({path:"config.env"})
const PORT = process.env.PORT||8080

//log request
app.use(morgan('tiny'))

//pass request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('views','./views')
app.set('view engine', 'ejs');

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/routers'))

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})