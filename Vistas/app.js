//primero npm init -y
//segundo paquetes  npm i express mysql

const express=require('express')
const app=express()
const mysql=require('mysql')
const {insertar, eliminar}=require("./solicitudes")

const conex=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"prueba"
})
conex.connect((err)=>{
    if(err)throw err;
    console.log("Todo ok")
})
app.use(express.json())

app.get("/insertar",(req,res)=>{
    const {documento,clave}=req.body
    insertar(conex,{documento:documento,clave:clave},(result)=>{
        res.json(result)
    })
})

app.get("/eliminar",(req,res)=>{
    eliminar(conex,{documento:"552211",clave:"123456"},(result)=>{
        res.json(result)
    })
})

app.listen(3000,()=>{
    console.log("Arranca")
})
