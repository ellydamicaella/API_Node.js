import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users',(req,res) =>{

    users.push(req.body)

    res.status(201).json(req.body)
})


app.get('/users',(req, res) =>{
    res.status(200).json(users)
})

app.listen(3000)
 
/*

    1) tipo de rota/ metodo HTTP
    2) Endereço



    Criar nossa API de usuarios
        - criar usuarios
        - listar usuarios
        - editar usuarios
        - deletar usuarios

    Mongodb
        usuario:ellydamicaella
        Senha: 124578



*/
