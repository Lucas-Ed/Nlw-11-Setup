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

## Geração de range de dias

## Preenchimenro de dias no fim

## Adicionando scroll horizontal


