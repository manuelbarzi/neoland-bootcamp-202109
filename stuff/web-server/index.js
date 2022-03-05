const express=require('express')

const app=express()

app.use(express.static('public'))//middleware

app.listen(8000)