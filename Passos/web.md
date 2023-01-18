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

## Componente Header

## Tabela de hábitos diários

## Geração de range de dias

## Preenchimenro de dias no fim

## Adicionando scroll horizontal


