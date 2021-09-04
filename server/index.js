const express = require('express')
const app= express()
const mysql= require('mysql')
const cors= require('cors')





app.use(cors())
app.use(express.json())

const db= mysql.createConnection({
    user : "root",
    host : "localhost",
    password:"12345678",
    database: "new_schema"
})

app.post('/create', (req,res)=>{
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const address=req.body.address
    const emailAddress=req.body.emailAddress
    const password=req.body.password
 

    db.query('INSERT INTO  vikash (First_Name ,Last_Name, Address, Email_Address,Password) VALUES (?,?,?,?,?)',
    [firstName,lastName,address,emailAddress,password],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted Into Database")
        }
    } 
    
    )
})

app.listen(3002, ()=>{console.log('Your server is running at 3002')})