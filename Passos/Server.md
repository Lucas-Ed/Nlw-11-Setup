<!-- <p align="center">
  <img src="../mobile/src/assets/logo.svg" alt="Next Level Week Copa Logo"/>
</p> -->

# Passo a Passo 
### Todos os comandos e instalações necessários para o projeto do server .

# Server-(Backend)
### Setup

- Iniciando um projeto:
```bash
npm init -y
```
- Instalar o pacote fastify:
```bash
npm i fastify
```
criar uma pasta src e dentro por o arquivo server.ts

instalr a bliblioteca do typescript:
```bash
npm i typescript -D
```
rodar o comando:
```bash
npx tsc --init
```
em config.json modificar o "target" para es2020

 Instalação lib tsx:
```bash
npm tsx -D
```
rodar o arquivo do servidor:
```bash
npx tsx src/server.ts
```
no package.json por o código para rodar auomaticamente o servidor:

```bash
"scripts": {
    "dev": "tsx watch src/server.ts"
  }
```
rodar o comando para rodar o script "dev" criado:
```bash
npm run dev
```
## Criar as rotas com fastify

```bash
import fastify from "fastify";


const app = fastify()

// método http: get, post, put, patch e delete

app.get('/', () =>{
    return 'hello world'
})

app.listen({port: 3333,
}).then(() => {
    console.log('http server running !')
})
```
rodar novamente o servidor
e acessa-lo no endereço:
localhost:3333/

## Entendendo como trabalhar com banco de dados dentro da aplicação
usaremos o ORM.

---
#### Prisma
[- Veja a documentação do prisma aqui.](http://bit.ly/3fuYWoN)

- Instalação do prisma:
```bash
npm i prisma -D
```
- Instalação da dependência de produção do prisma:
```bash
npm i @prisma/client
```
- rodar o seguinte comando para utilizar como banco de dados o SQLite, por padrão o prisma utiliza o Postgree como banco de dados.
```bash
npx prisma init --datasource-provider SQLite
```
No VSCode instalar a extensão prisma.

no arquivo schema.prisma é onde ficará definido as tabelas do banco de dados.

#### Banco de dados
- Criar tabela de contagem de bolões.
cada tabela no prisma é uma model

exemplo da tabela utilizada com os campos definidos:
```bash
model Habit{
  id        String @id @default(uuid())
  title     String
  createdAt DateTime 
  
  @@map("habits")//cria a tabela com o nome habits
}
```
Gerar uma migration(é o versionamento do banco de dados)
```bash
npx prisma migrate dev
```
Dar o nome para a migrate, exemplo: create_habits.
após rodar o comando anterior o prima cria a pasta migrations, que contém as migrations feitas.

Para vizualizar o banco de dados rodar o comando:
```bash
npx prisma studio
```
#### Diagrama ERD

- Para retornar o log de todas as tabelas que estão no banco de dados colocar em server.ts:
```bash
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({
    log:['query'],
})
```
- método get no banco 
```bash
import fastify from "fastify";
import {PrismaClient} from '@prisma/client'


const app = fastify()

const prisma = new PrismaClient({
    log:['query'],
})

// método http: get, post, put, patch e delete

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
```
- Instalar a bliblioteca Prisma ERD Generator juntamente com a bliblioteca mermaid para heração de diagramas :
```bash
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```

- No arquivo schema,prisma passar o código do gerador ERD:
```bash
// abaixo pode-se configurar o thema do arquvo gerado também, colocando theme = ""
generator erd {
   provider = "prisma-erd-generator"
}
```
- Rodar o comando para gerar o arquivo .SVG do diagrama do banco de dados:
```bash
npx prisma generate
```
após gerado o .SVG abrir o arquivo no navegador para a vizualização.

---
## Configurar o cors
- Instalar a bliblioteca: 
```bash
npm install @fastify/cors
```
depois fazer o import:
```bash
import cors from '@fastify/cors'
```
e incluir o register no códifo server.ts:
```bash
const app = fastify()

const prisma = new PrismaClient({
    log:['query'],
})

// método http: get, post, put, patch e delete

app.register(cors)
```
Feito isso o frontend já consegue acessar o backend.
para permitir que somente uma aplicação front use api basta definir:
```bash
const app = fastify()

const prisma = new PrismaClient({
    log:['query'],
})

// método http: get, post, put, patch e delete

app.register(cors,{
  origin:{'http://localhost:3000'}
})
```
a bliblioteca cors é utilizada para definição de quais aplicações estarão aptas a consumir os dados do backend,
é uma medida de segurança para a aplicação.
---
# Setup Frontend

- Começamos criando o projeto com o framwork react, o [Vite.](https://vitejs.dev/guide/):
```bash
npm create vite@latest
```
- React, Vite, typescript
nomear como web o projeto react frontend.
```
instalar as dependências:
```bash
npm install
```
rodar a aplicação react instalada:
```bash
npm run dev
```

```bash

```



