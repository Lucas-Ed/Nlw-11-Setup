<!-- <p align="center">
  <img src="../mobile/src/assets/logo.svg" alt="Next Level Week Copa Logo"/>
</p> -->
# Aula 1 server-node
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
# Aula 02
 ## estrutura do banco de dados

## Diagramação do banco de dados

- Criação de tabelas do banco de dados
```bash
React 
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

generator erd {
  provider = "prisma-erd-generator"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Habit {
  id         String   @id @default(uuid())
  title      String
  created_at DateTime

  dayHabits DayHabit[]
  weekDays  HabitWeekDays[]

  @@map("habits")
}

model HabitWeekDays {
  id       String @id @default(uuid())
  habit_id String
  week_day Int

  habit Habit @relation(fields: [habit_id], references: [id])

  @@unique([habit_id, week_day])
  @@map("habit_week_days")
}

model Day {
  id   String   @id @default(uuid())
  date DateTime

  dayHabits DayHabit[]

  @@unique([date])
  @@map("days")
}

model DayHabit {
  id String @id @default(uuid())

  day_id   String
  habit_id String

  day   Day   @relation(fields: [day_id], references: [id])
  habit Habit @relation(fields: [habit_id], references: [id])

  @@unique([day_id, habit_id])
  @@map("day_habits")
}
```
- rodar o comando de migração novamente:
```bash
npx prisma migrate dev
```
- Para vizualizar o banco de dados rodar o comando novamente:
```bash
npx prisma studio
```
- Rodar o comando para gerar o arquivo .SVG do diagrama do banco de dados novamente:
```bash
npx prisma generate
```
após gerado o .SVG abrir o arquivo no navegador para a vizualização.
## Criação de seed do banco de dados

- Na pasta prisma criar o seed.ts
```bash
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // Create Habits
// const habit1 = await prisma.habit.create({
//     data: {
//         title: "Meditar",
//         createdAt: new Date(),
//         weekDays: {
//         create: [{ week_day: 1 }, { week_day: 4 }, { week_day: 6 }],
//     },
//     },
// });
// const habit2 = await prisma.habit.create({
//     data: {
//         title: "Correr",
//         createdAt: new Date(),
//         weekDays: {
//         create: [{ week_day: 2 }, { week_day: 5 }],
//     },
//     },
// });

//   // Create Days
// const day1 = await prisma.day.create({
//     data: {
//         date: new Date(),
//         dayHabits: {
//         create: [
//             { habit: { connect: { id: habit1.id } } },
//             { habit: { connect: { id: habit2.id } } },
//         ],
//     },
//     },
// });
// const day2 = await prisma.day.create({
//     data: {
//         date: new Date(),
//         dayHabits: {
//         create: [{ habit: { connect: { id: habit1.id } } }],
//     },
//     },
// });
// console.log("Seed created!");
// }

// main()
// .catch((e) => console.error(e))
// .finally(async () => {
//     await prisma.$disconnect();
// });
///-2
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000')

async function run() {
await prisma.dayHabit.deleteMany()
await prisma.habitWeekDays.deleteMany()
await prisma.habit.deleteMany()
await prisma.day.deleteMany()

/**
   * Create habits
   */
await Promise.all([
    prisma.habit.create({
        data: {
        id: firstHabitId,
        title: 'Beber 2L água',
        createdAt: firstHabitCreationDate,
        weekDays: {
            create: [{ week_day: 1 }, { week_day: 2 }, { week_day: 3 }],
        },
    },
    }),

    prisma.habit.create({
        data: {
        id: secondHabitId,
        title: 'Exercitar',
        createdAt: secondHabitCreationDate,
        weekDays: {
            create: [{ week_day: 3 }, { week_day: 4 }, { week_day: 5 }],
        },
    },
    }),

    prisma.habit.create({
        data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        createdAt: thirdHabitCreationDate,
        weekDays: {
            create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
        ],
        },
    },
    }),
])

await Promise.all([
    /**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
        data: {
        /** Monday */
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
            create: {
            habit_id: firstHabitId,
        },
        },
    },
    }),

/**
     * Habits (Complete/Available): 1/1
     */
    prisma.day.create({
        data: {
        /** Friday */
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
        create: {
            habit_id: firstHabitId,
        },
        },
    },
    }),

    /**
     * Habits (Complete/Available): 2/2
     */
    prisma.day.create({
        data: {
        /** Wednesday */
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
            create: [{ habit_id: firstHabitId }, { habit_id: secondHabitId }],
        },
    },
    }),
])
}

run()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
```
- Rodar o comando para popular o banco de dados
```bash
npx prisma db seed
```
- instalar o pacote:
```bash
npm i ts-node
```
se der erro incluir no package.json:
```bash
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }

```

- Para vizualizar o banco de dados rodar o comando novamente:

```bash
npx prisma studio
```
## Isolando arquivos do backend

- Crie uma pasta dentro de src chamada lib e dentro crie o arquivo prisma .ts, mova o trecho de código de server .ts para o arquivo prisma.ts:
```bash
import {PrismaClient} from '@prisma/client'

export const prisma = new PrismaClient({
    log:['query'],
})
```
- Agora mova o trecho do código de server.ts para routes.ts
```bash
import { FastifyInstance } from 'fastify'
import {prisma} from './lib/prisma'

export async function appRoutes(app:FastifyInstance){
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
}
```
- Em server.ts cham as rotas co o .register:
```bash
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
```
## Criação de novas Rotas do backend

- Instalar a lib de validação zod:

```bash
npm i zod
```

- Em routes.ts aplicar a validação:

```bash
import { z } from "zod";

app.post("/habits", async (req) => {
    // title, weekDays
    const createHabitBody = z.object({
        title: z.string(),
        weekDays: z.array(z.number().min(0).max(6)),
    });
    const { title, weekDays } = createHabitBody.parse(req.body);
```
E depois cotinuar criando o outro metodo, o get, e create.


## Criação de um novo hábito

```bash

await prisma.habit.create({
        data: {
        title,
        createdAt: today,
        weekDays: {
            create: weekDays.map((weekDay: any) => {
            return {
                week_day: weekDay,
            };
        }),
        },
    },
    });
});
```

- Instalar a lib dayjs, para trabalharmos com datas:
- 
```bash
npm i dayjs
```
- incluímos a linha, para já pegar dados no banco da mesma data de criação, do hábito:
```bash
const today = dayjs().startOf("day").toDate();
```
- Testar as rotas no Insomnia.
- más antes rodar o servidor:

```bash
npm run dev
```
- Crie um post no insomnia:

```bash
{
	"title": "Exemplo de hábito",
	"weekDays": [0, 1, 2]
}
```
e clique em send para testar a rota.

## Detalhe do dia(Hábitos completo/possíveis)

```bash
app.get("/day", async (req) => {
    const getDayParams = z.object({
        date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(req.query);

    const parsedDate = dayjs(date).startOf("day");
    const weekDay = parsedDate.get("day");

    const possibleHabits = await prisma.habit.findMany({
        where: {
        createdAt: {
            lte: date,
        },
        weekDays: {
            some: {
            week_day: weekDay,
        },
        },
    },
    });

    const day = await prisma.day.findUnique({
        where: {
        date: parsedDate.toDate(),
    },
        include: {
        dayHabits: true,
    },
    });

    const completedHabits = day?.dayHabits.map((dayHabit) => {
        return dayHabit.habit_id;
    });

    return {
        possibleHabits,
        completedHabits,
    };
});
```
testar a roda /day no insomnia com o servidor rodando.

# Aula -03
## Toggle (dar um check ou desmarcar o hábito)-do hábito no dia

- No aquivo routes.ts:
```bash
app.patch('/habits/:id/toggle', async (request) => {
    const toggleHabitParams = z.object({
        id: z.string().uuid()
    })

    const { id } = toggleHabitParams.parse(request.params)

    const today = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
        where: {
        date: today
    }
    })

    if(!day) {
        day = await prisma.day.create({
        data: {
            date: today
        }
    })
    }

    const dayHabit = await prisma.dayHabit.findUnique({
        where: {
        day_id_habit_id: {
                            day_id: day.id,
                            habit_id: id
        }
    }
    })

    if(dayHabit) {
        await prisma.dayHabit.delete({
        where: {
            id: dayHabit.id
        }
    })
    } else {
        await prisma.dayHabit.create({
        data: {
            day_id: day.id,
            habit_id: id
        }
    })
    }
})
```


## Rota resumo de dias
- No aquivo routes.ts:

```bash
app.get('/summary', async () => {
    const summary = await prisma.$queryRaw`
        SELECT 
        D.id, 
        D.date,
        (
            SELECT 
            cast(count(*) as float)
            FROM day_habits DH
            WHERE DH.day_id = D.id
        ) as completed,
        (
            SELECT
            cast(count(*) as float)
            FROM habit_week_days HDW
            JOIN habits H
            ON H.id = HDW.habit_id
            WHERE
            HDW.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            AND H.created_at <= D.date
        ) as amount
    FROM days D
    `

    return summary
})

```

