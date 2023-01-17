<p align="center">
  <img src="../mobile/src/assets/logo.svg" alt="Next Level Week Copa Logo"/>
</p>

# Passo a Passo 
### Todos os comandos e instalações necessários para o projeto web.


- Rodar a aplicação:
```bash
npm run dev
```
- Instalações
```bash
npm install -D tailwindcss postcss autoprefixer
```
Cria o arquivo tailwindcss:
```bash
npx tailwindcss init -p
```

Configuração do arquivo tailwindcss, passando onde estrá os arquivos estilizados:
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Criat uma pasta styles com um arquivo global.css.
Impotar neste arquivo:
```bash
@tailwind base;
@tailwind utilities;
@tailwind components;
```
fazer o import na página que será aplicada o css, no caso index.tsx:
```bash
import '../styles/global.css'
```

na tag que será aplicado o css colocar o className="text-"
Dar Ctrl+Space após - ,para escolher a cor.


- Definir fonte padrões com tailwindcss
  no arquivo tailwindcss.config.js
```bash
 theme: {
    extend: {
    fontFamily: {
      sans: 'Roboto, sans-serif'
    }
    },
  },
```
Intalar bliblioteca:

Axios
```bash
npm i axios
```
Sweetalert2
```bash
npm i sweetalert2
```
---