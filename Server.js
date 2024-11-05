import express from 'express'
import { PrismaClient } from '@prisma/client'
/*

    1) tipo de rota/ metodo HTTP
    2) Endereço



    Criar nossa API de usuarios
        - criar usuarios
        - listar usuarios
        - editar usuarios
        - deletar usuarios


*/
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users', async (req,res) =>{

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.put('/users/:id', async (req,res) =>{

    await prisma.user.update({
        where: {

            id:req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})


app.get('/users',async(req, res) => {
    let users = []
    
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        })
    }else{
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.delete('/users/:id', async (req, res) =>{
    await prisma.user.delete({
        where: {
            id:req.params.id
        }
    })

    res.status(200).json({message:' usuario deletado com Sucesso'})
})

app.listen(3000)
 

