# Aula 1 web
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
criamos uma pasta component e dentro dela criamos o component Habit

instalamos o [tailwindcss:](https://tailwindcss.com/docs/installation)

```bash
npm install -D tailwindcss
```
no component habit.tsx:
```bash
interface HabitProps {
    completed?: number
}

export function Habit(props: HabitProps) {
    return (
    <div className="bg-zinc-900 w-10 text-white rounded m-2 flex items-center justify-center" >
        {props.completed}
    </div>
    )
}
```
o arquivo app.tsx:

```bash
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Habit } from './components/habit'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Habit completed={3} />
    <Habit completed={10}/>
    <Habit completed={20}/>
    <Habit completed={30}/>
  </div>
      
      
  )
}

export default App

```

# Aula 02

## Estrutura do home page.
- Crie uma pasta style no diretório src e um arquivo de nome global.css, dentro de global.css coloque:

```bash
@tailwind base;
@tailwind utilities;
@tailwind components;
```

- Crie um arquivo tsconfig.js e coloque:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/**/*.tsx',
    './index.html'
    ],
    theme: {
        extend: {
            colors: {
            background: '#09090a',
        },
        fontFamily: {
            regular: 'Inter_400Regular',
            semibold: 'Inter_600SemiBold',
            bold: 'Inter_700Bold',
            extrabold: 'Inter_800ExtraBold'
        }
        },
    },
    plugins: [],
}
```
- No arquivo index do diretório raiz coloque na tag body:
- 
```bash
<body className="bg-background">
```

- Em app.tsx  centralizar para ocupar toda a tela, com o className:
```bash
import './App.css'
// import { Habit } from './components/habit'


export function App() {


  return (
  <div className="w-scren h-screen flex justify-center items-center">
   
  </div>
      
      
  )
}

export default App
```

- Agora crie outra div dentro da principal e coloque:
```bash
  <div  className="w-full max-w-5xl px-6 flex flex-col gap-16">

  </div>
```
- Faça o import do novo logo:

```bash
import LogoImage from './assets/logo.svg'
```
incluir s image dentro do código:

```bash
import './App.css'
// import { Habit } from './components/habit'
import LogoImage from './assets/logo.svg'


export function App() {


  return (
  <div className="w-scren h-screen flex justify-center items-center">
  <div  className="w-full max-w-5xl px-6 flex flex-col gap-16">
  <div className="w-full max-w-3xl mx-auto flex justify-center justify-between">
    <img src={LogoImage} alt=""/>
    <button 
           type="button"
           className="border
                      border-violet-500
                      font-semibold
                      rounded-lg
                      px-6
                      py-4
                      flex
                      items-center
                      gap-3
                      hover:border-violet-300"
    >
    Novo Hábito
    </button>
    </div>
  </div>
  </div>
      
      
  )
}

export default App
```

- Instalar a lib [Phosphor-icon:](https://phosphoricons.com)

```bash
npm i phosphor-react
```
- Fazer o import no app.tsx ou outro component que irá usar:
- 
```bash
import { Plus } from 'phosphor-react'
```
- Em index na raíz incluir o text-white:

```bash
<body className="bg-background text-white">
```
## Componente Header
- O componente de header pronto:

```bash
import { Plus } from "phosphor-react";

import LogoImage from '../assets/logo.svg'

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={LogoImage} alt="" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}

```
- Importar o component header no app.tsx:

```bash
import './styles/global.css';
import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  )
  } 
```

## Tabela de hábitos diários
- Começamos criando um novo componente de some SummaryTable.tsx
  
- Importamos o componente dentro de app.tsx:
```bash
<SummaryTable />
```
- Criar a tabela:
```bash
export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          )
        })}
      </div>
  );
}

```
- No tailwind.config.js definir as rows:
  
```bash
 gridTemplateRows:{
            7:'repeat(7, minmax(0, 1fr))'
        },
```
- Crie um array para definir os dias da semana:

```bash
const weekDays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
];
```
- E passe o weekDays dentro da div:

```bash
<div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
```

## Criação da tabela (dias).

```bash
 <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return (
            <HabitDay key={date.toString()} />
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
          )
        })}
      </div>
    </div>
```

- Apague o componente habit e crie o HabitDay e coloque o código:

```bash
// interface HabitDayProps {
//   completed: number
// }

export function HabitDay() {
  return (
    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"></div>
  );
}

```
## Geração de range(Tabela) de dias
- Dentro de src crie uma pasta de nome utils e dentro crie um arquivo de nome, generate-dates-from-year-beginning.ts

- No arquivo gere todas as datas:

```bash
import dayjs from 'dayjs'

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dates = []
  let compareDate = firstDayOfTheYear

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}

```
-  Em summaryTable.tsx adicione:

```bash
const summaryDates = generateDatesFromYearBeginning()
```
- Dentro da tabela puxar os dias:

```bash
{summaryDates.map((date) => {
          return (
            <HabitDay key={date.toString()} />
          )
        })}
```
## Preenchimenro de dias no fim
- Gera datas para a tabela não ficar vazia, em SummaryTable.tsx:

```bash
const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length
```

- Para crias vários quadradinhos:




# Aula 03
## Adicionando scroll horizontal

## Modal de crição de hábito
-No header se encontra o button que abrirá o modal
- Instalar a lib [radix-ui](https://www.radix-ui.com/docs/primitives/components/dialog) para usar os componentes prontos más sem estilização, usaremos o dialog:
```bash
npm i radix-ui@latest
```
- Fazer o import em Header.tsx:
```bash
import * as Dialog from '@radix-ui/react-dialog';
```
- Escrever o dialog que será chamado:

```bash
<Dialog.Root>
        <Dialog.Trigger
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
        >
        <Plus size={20} className="text-violet-500" />
            Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                <X size={24} aria-label="Fechar"  />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
                Criar bábito
            </Dialog.Title>

            <NewHabitForm />
            </Dialog.Content>
        </Dialog.Portal>

    </Dialog.Root>
```
- No código acima repare que trocamos o button para um componente do radix por meio de  `<Dialog.Trigger></Dialog.Trigger>` e usaremos o `<Dialog.Portal>` da lib e o portal do [react](https://reactjs.org/docs/portals.html) para escrever o conteúdo fora do nosso componente, assim tudo que estiver dentro de `<Dialog.Portal>` será exibido em outro lugar da aplicação.
- Dentro do portal colocaremos o componente overlay `<Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />` e colocaremos dentro o `</Dialog.Content>` para o conteúdo do modal. 
- Usaremos o `</Dialog.Close>` para fechar o modal.

- Criaremos um novo componente de nome NewHabitForm.tsx para o conteúdo do modal.
- E colocaremos o código:

```bash
import { Check } from "phosphor-react";

export function NewHabitForm() {
return (
    <form className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
    </label>

    <input 
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
    />

<label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
</label>

    <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
    </button>
    </form>
)
}
```


## [Popover](https://www.radix-ui.com/docs/primitives/components/popover) de detalhe do dia

- Fazer a instalação:
```bash
npm install @radix-ui/react-popover
```
- Em habitday.tsx fazer o import:

```bash
import * as Popover from '@radix-ui/react-popover';
```

- Dentro do return da função usar o popover:

```bash
<Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
          'bg-zinc-900 border-zinc-800': comlpetedPercentage === 0,
          'bg-violet-900 border-violet-500': comlpetedPercentage > 0 && comlpetedPercentage < 20,
          'bg-violet-800 border-violet-500': comlpetedPercentage >= 20 && comlpetedPercentage < 40,
          'bg-violet-700 border-violet-500': comlpetedPercentage >= 40 && comlpetedPercentage < 60,
          'bg-violet-600 border-violet-500': comlpetedPercentage >= 60 && comlpetedPercentage < 80,
          'bg-violet-500 border-violet-400': comlpetedPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">19/01</span>

          <ProgressBar progress={comlpetedPercentage} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
```

- Criar um componente somente pra barra de progresso de nome ProgressBar.tsx

- Por o código:

```bash
interface ProgressBarProps {
    progress: number
  }
  
  export function ProgressBar(props: ProgressBarProps) {
    return (
      <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
        <div 
          role="progressbar"
          aria-label="Progresso de hábitos completados nesse dia"
          aria-valuenow={props.progress}
          className="h-3 rounded-xl bg-violet-600"
          style={{
            width: `${props.progress}%`
          }}
        />
      </div>
    )
  }
```
## Personalizar o progresso no quadrado do hábito
- No componente HabitDay.tsx foi, instalar a lib clsx para as classes condicionais:

```bash
npm i clsx
```
- No arquivo SummaryTable.tsx gerar o status com aleatóriedade:

```bash
<HabitDay key={date.toString()} completed={
              Math.round(Math.random() * 5)
            } amount={5} />
```


# Aula 04

## Criando checkboxes
- Instalar o checkbox do [Radix-Ui](https://www.radix-ui.com/docs/primitives/components/checkbox)
```bash
npm install @radix-ui/react-checkbox
```
- Criaremos o checkbox dentro do compinente HabitDay.tsx

- Fazer os imports:
```bash
import * as Checkbox from '@radix-ui/react-checkbox'

import { Check } from 'phosphor-react'

import dayjs from 'dayjs'

```

- E após a tag `<ProgressBar progress={completedPercentage} />` acrescentar o código:

```bash
<div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
```


- Em NewHabitForm usaremos o checkbox tbm:

```bash
<Checkbox.Root
                key="weekDay"
                className="flex items-center gap-3 group"
                checked={weekDays.includes(index)}
                onCheckedChange={() => handleToggleWeekDay(index)}
            >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                    <Check size={20} className="text-white" />
                </Checkbox.Indicator>
            </div>

                <span className=" text-white leading-tight">{weekDay}</span>
            </Checkbox.Root>
```

- Adicionando mais dias da semana, para não repetir o item do checkbox.

- 1° faça uma lista dos dias:

```bash
const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]
```

- 2° Na div principal que envolve o checkbox, por o availableWeekDays, envolvendo o checkbox:

```bash
{availableWeekDays.map((weekDay, index) => {
  return(
  <Checkbox.Root>

  </Checkbox.Root>
)}
```
- 3° Eno lugar de de segunda feira trocar por 

```bash
{weekDay}
```
- 4° No checkbox.root passar a key:

```bash
 key="weekDay"
```
## Obtendo dados do forulário

- Crie uma função em NewHabitForm para obter os dados do formulário:

```bash
async function createNewHabit(event: FormEvent) {
    event.preventDefault()

    if (!title || weekDays.length === 0) {
        return
    }
    await api.post('habits', {
        title,
        weekDays
    })

    setTitle('')
    setWeekDays([])

    alert('Hábito criado com sucesso!')
}
```
- Adicionar o que será executado quando o usuário usar o check, na tag `<input></input>`.

```bash
onChange={event => setTitle(event.target.value)}
``
# // e no form o :
```bash
onSubmit={createNewHabit}
```

## Sincronizando hábitos completos


- Fazer uma função para tirar a seleção do checkbox, incluir a função:

```bash

function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
        const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)

        setWeekDays(weekDaysWithRemovedOne)
    } else {
        const weekDaysWithAddedOne = [...weekDays, weekDay]
        setWeekDays(weekDaysWithAddedOne)
    }
}
```

- Adicionar o que será executado quando o usuário usar o check, na tag `<Checkbox.Root></Checkbox.Root>`.

```bash
onCheckedChange={() => handleToggleWeekDay(index)}
```

## Conexão com back-end

- Instalar a lib axios:
```bash
npm i axios
```
- Crie uma pasta dentro de src de nome lib e crie o arquivo de nome axios.ts

coloque o código:
# // e no form o :
```bash
import  axios from 'axios'

export const api = axios.create({
    baseURL:'http://localhost:3333'
})
```
## Configuração cliente http
- Colocar o método get do arquivo SummaryTable.tsx dentro do useefect para ser executado somente 1 única vez:

```bash

  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])
```


- Checando data no banco usano o dayjs:

```bash
          {summaryDates.map(date => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
```

- Passar o date na lista de tipagem:

```bash
type Summary = {
  id: string
  date: string
  amount: number
  completed: number
}[]
```
## Utilizando dados da api no popover
- Em HabitDay.tsx

```bash
  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfweek = dayjs(date).format('dddd')
```

- Dentro da tag span passar o `{dayOfweek}`, em lib crie o arquivo dayjs.ts

```bash
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')
```

- Efazer o import em App.tsx

```bash
import './lib/dayjs'
```

## Sincronizando hábitos completos &&  Criação de novo hábito

- Em NewHabitForm.tsx incluir na função createNewHabit

```bash
    if (!title || weekDays.length === 0) {
        return
    }
    await api.post('habits', {
        title,
        weekDays
    })

    setTitle('')
    setWeekDays([])

    alert('Hábito criado com sucesso!')

})
```
## Extra alert personalizado com sweetalert2

- Fazer a instalação:

```bash
npm install sweetalert2
```

- Em NewHabitForm.tsx faz o import

```bash
import Swal from 'sweetalert2'
```
- E no alert por:

```bash
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Hábito criado com sucesso !'
})
```
- No mesmo arquivo setar título e semana vazio para esvaziar o checkbox após o usuário confirmar:

```bash
    setTitle('')
    setWeekDays([])
```

- No input passar o:

```bash
value={title}
```

- Passar no checkbox, ele será checado caso a variáve WeekDay inculua o indice(dias)

```bash
checked={weekDays.includes(index)}
```








