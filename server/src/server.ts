import fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";


const app = fastify()



// método http: get, post, put, patch e delete

app.register(cors)
app.register(appRoutes)
app.listen({port: 3333,
}).then(() => {
    console.log('http server running !')
})