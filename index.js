const express = require('express')
const bodyParser = require('body-parser')

const app =express()
const port = 5000

//middle
app.get('/:username/:password/:rol',(req,res)=>{
    if(req.params.rol == "1"){
        res.redirect('/dasboard')
        next()
    }
    else{
        if(req.params.rol == "2"){
            res.redirect('/students')
            next()
        }
        else{
            next(new Error("rol invalido.."))
        }
    }
})

//endpoints o rutas

//ingreso al inicio 
app.get('/inicio',(req,res)=>{
    res.send(`ingreso al inicio con exito`)
})

app.get('/dasboard',(req,res)=>{
    res.send(`Bienvendio Admin`)
})

app.get('/students',(req,res)=>{
    res.send(`Bienvendio Estudiante`)
})
app.get('/quienessomos',(req,res)=>{
    res.send(`ingreso aa quienes somos con exito`)
})
app.post('/contacts',(req,res)=>{
    res.send(`ingreso a contacts con exito`)
})

app.put('/',(req,res)=>{
    res.send(`ingreso con exito`)
})

app.delete('/students',(req,res)=>{
    res.send(`Ha ingresado a la ruta delete de estudiantes`)
})


app.listen(port,()=>{
console.log(`server in http://loclhost:${port}`)
})