const express = require('express')
const {write,read}=require('./write')
const path=require('path')

const app = express()

const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).json({message:"HELLO WORLD"})
})
app.post('/post',(req,res)=>{
    const {name,age}=req.body
    if(name && age){
        const file=path.join(__dirname,'./public/user.json')
        write(file,{name,age})
        return res.status(200).json(read(file))
    }
})

app.listen(process.env.PORT, () =>
    console.log(`run server http://localhost:${process.env.PORT}`))

