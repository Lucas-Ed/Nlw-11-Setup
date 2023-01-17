import fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'


const app = fastify()

const prisma = new PrismaClient({
    log:['query'],
})

// método http: get, post, put, patch e delete

app.register(cors)

app.get('/hello', async ()  =>{
    const habits = await prisma.habit.findMany({
where:{
    title:{
        startsWith:'Beber'
    }
}
})
return habits
})

app.listen({port: 3333,
}).then(() => {
    console.log('http server running !')
})