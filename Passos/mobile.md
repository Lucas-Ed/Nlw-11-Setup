<p align="center">
  <img src="../mobile/src/assets/logo.svg" alt="Next Level Week Copa Logo"/>
</p>

# Passo a Passo 
### Todos os comandos e instalações necessários para o projeto mobile.

# Aula 01
## Criando o projeto
[Criar o expo:](https://bit.ly/3U83pN6)
```bash
npx create-expo-app
```
---

Mudar o expo de js para tsx:
1° mudar a extensão do arquivo app.js para tsx
2° Criar o arquivo *tsconfig.json* dentro da pasta principal, e deixa-lo vazio.
3° rodar o expo.

```bash
npx  expo start
```
---

[Tutorial rodar ExpoGo via USB, aqui.](http://bit.ly/3SYlJXv)
Executar o projeto via usb com o app expoGo.
```bash
npm run android
```
---
### Criar pasta SRC e  pasta assets dentro da SRC.
na pasta assets dentro de SRC colocar o logo.svg.
Na pasta asset no direório principal colocar a tela de splash, icons e arquivos png.
---
### Configuração da splash screem.

no arquivo app.json configurar cores da splash
em:

```bash
"splash": {}
```
alterar também além da cor do background alterar:
```bash
"resizeMode": "contain,
```
Para:

```bash
"resizeMode": "cover"
```
que preenche a tela toda
---
### Instalando o Native Base (Bliblioteca UI de components)
[veja a documentação aqui.](http://bit.ly/3U9FcpF)

Para a instalação Typescript rode o seguinte comando no terminal:
```bash
npm install native-base
```
Para poder utilizar svg na aplicação
```bash
npx expo install react-native-svg@12.1.1
```

```bash
npx expo install react-native-safe-area-context@3.3.2
```
---
## Configuração do pakage.json
 adicionar a seguinte propriedad antes de "private".
 isso é para prevenir conflitos  com a versão
```bash
 "overrides": {
    "react": "18.0.0"
  },
```
Fazer a importação do native base no App.tsx
```bash
import { NativeBaseProvider } from "native-base";
```
Continuando dentro do arquivo app.tsx, envolver o retono do html com a tag:
```bash
 <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
```
#### tudo que estiver entre as tag do native base provider irá permitir que possamos utilizar os recursos do native base.
---
### Customizar o tema do native base

Maneira 1°.
1° Adicionar no import de app.tsx a Vstack, para poder definir posições dos componentes html direto na tag
envolver o conteúdo a ser posicionado, com a tag:
```bash
<Vstack flex={1} bgColor="fuchisia.400" alignItens="center" justifyContent="center">
<Vstack/>
```
Maneira 2°.
1° Adicionar no import de app.tsx, Center, para poder definir posições dos componentes html direto na tag
envolver o conteúdo a ser posicionado, com a tag:
```bash
<Center flex={1} bgColor="fuchisia.400" >
<Center/>
```
Definir cor de textos.
Maneira 2°.
1° Adicionar no import de app.tsx, Text, para poder definir cores das tags html de texto por meio de propriedades, direto na tag
envolver o conteúdo a ser posicionado, com a tag:

```bash
<Text color="black" fontize="24"
<Text/>
```
---
### Instalando fontes personalizadas.
Dentro da pasta SRC criar uma pasta de nome styles e dentro de styles criar um arquivo com o nome theme.ts
para definirmos todos os esquemas de cores que iremos utilizar no App.
o arquivo themes.ts permite sbscrever as cores e fontes.  
```bash
import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		gray: {
			950: '#09090a',
			900: '#121214',
			800: '#202024',
			600: '#323238',
			300: '#8d8d99',
			200: '#c4c4cc'
		},
		green: {
			500: '#047C3F'
		},
		yellow: {
			500: '#F7DD43',
			600: '#bba314'
		},
		red: {
			500: '#db4437'
		},
		white: '#ffffff'
	},
	fonts: {
		heading: 'Roboto_700Bold',
		body: 'Roboto_400Regular',
		medium: 'Roboto_500Medium'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	},
	sizes: {
		14: 56
	}
})
```
para utilizarmos o thema padronizado é só fazermos a importação no arquivo que gostariamos de utilizar, exemplo app.tsx, com o seguinte código:
```bash
import {THEME} from './src/styles/theme';
```
e chamar o thema dentro da tag:
```bash
 <NativeBaseProvider theme={THEME}>
 <NativeBaseProvider />
```
fazendo isso poderemos alterar as propriedades de core de acordo com o arquivo padrão theme.ts
exemplo:

```bash
<Center flex={1} bgColor="gray.900" >
<Center/>
```
---
### Instalação de fonts personalizadas.
1°Escolher a fonte desejada no [Google fonts.](http://bit.ly/3TcxJoI)
2° instalar a bliblioteca do expo: expo-font com o comando:

```bash
npx expo install expo-font @expo-google-fonts/roboto
```
fazer o import no arquivo que será utilizado com o código
passando dentro do import{} as fontes que serão utilizadas:
```bash
import{  useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
```
e por fim carregar as fontes utilizadas dentro da função que retorna html:
```bash
export default function App() {
  const [fontsloaded] = useFonts({Roboto_400Regular, Roboto_500Medium});

 
  return ()
}

```
### Criando o componente de Loading
1° Dentro de SRC criar uma pasta dos components da aplicação de nome components com o arquivo de loading, loading.tsx.
Fazer as importações necessárias e definir as cores do spinner(loading), com o código de exemplo: 

```bash
import {Center, Spinner} from 'native-base';

export function Loading(){
    return (
        <Center flex={1} bg="gray.900">
            <Spinner color='yellow.500'></Spinner>
        </Center>
    )
}
```
em seguida fazer o import onde será utilizado, geralmente usado no arquivo app.tsx dessa forma:
```bash
import { Loading } from './src/components/loading'
```
 # 2° criar tela de SignIn
no mesmo arquivo chamar o component fazendo um ifternário se as fontes tiver carregadas chamar o component SignIn
e depois chamar o Loading.
```bash
export default function App() {
    return (
 {fontsloaded ? <SignIn /> : <Loading />}
)
}
```
Criar dentro de SRC uma pasta de nome screens com um arquivo de nome SignIn.tsx
contendo:
```bash
import{Center, Text} from 'native-base'

export function SignIn(){
    return(
       
        <Center flex={1} bgColor="gray.900" >
        <Text color="white" fontSize={24} fontFamily="heading">
          SigIn
        </Text>
      </Center>
    
)    
}
```
---
### Customizar Status Bar
(Status Bar é a tela superior do celular onde fica bateria sinal etc..)
1° fazer o import da statusbar
```bash
import { NativeBaseProvider, StatusBar } from "native-base";
```
no retorno da função do html chamar a tag de statusbar, e definir as propriedades:
```bash
return(
<StatusBar 
      barStyle="light-content"
      backgroundColor="transparency"
      translucent
/>
)
```
---

## Aula-03

#### Interface de autenticação.

- Usando um SVG como componente no React Native para exibir o logo-(svg-transformer)
[github da bliblioteca](http://bit.ly/3sZl2CN)

Fazer a instalação da blilioteca xvg-transformer, precisa ter a bliblioteca svg do native base instalada.
```bash
npm i react-native-svg-transformer
```
- Criar um arquivo metro.config.js na pasta raiz do projeto
após dentro do arquivo criado por o seguinte código nele:
```bash

const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

- Importar o logo SVG na aplicação, no arquivo a ser utilizado, no caso o SignIn.
```bash
import Logo  from '../assets/logo.svg';
```
após isso só usar a logo po meio da tag como um componente.

```bash
<Logo />
```
- Como o import ficou dando erro pq o typscrit se confunde é necessário dentro de SRC, criar uma pasta de nome @types para organizr as tipagens do SVG'S.
  
- Criar um arquivo de nome svg.d.ts
 na bliblioteca ver o método using typescript, colocar o seguinte código no arquivo criado

```bash
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```
- Criar component de button

Criar um novo arquivo de component dentro da pasta components, com o nome button.tsx
criar uma função que retorna html de nome Button.

ao fazer o import de button há conflito com a função do mesmo nome, é é necessário renomear a importação:
```bash
import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
```
```bash
<ButtonNativeBase>

</ButtonNativeBase>

```
- Fazer a importação do Text
```bash
import { Text } from 'native-base';
```
- No arquivo SignIn
Chamar o componente do button.sx que foi criado
com a tag:
```bash
<Button />
```
- Fazer o import do arquivo button.tsx no arquivo que será usado no caso o SignIn.
```bash
import { Button } from '../components/button';
```
- chamar o button e text como um component
```bash
export function Button() {
  return (
    <ButtonNativeBase>
      <Text>
     ENTRAR COM O GOOGLE
      </Text>
    </ButtonNativeBase >
  );
}
```
- Criar propriedades para o botão
```bash
interface Props  {
  title: string;
#   type?: 'PRIMARY' | 'SECONDARY';
}
```
- Chamar as propriedades do button na função.
```bash
export function Button({ title }: Props) {
  return ()
}
```
- Chamar a propriedade dentro da função no arquivo button.tsx.
```bash
 {title}
```
- Colocar um ícone no botão.

Dentro do arquivo button fazer a importação da propriedade  IButtonProps:
```bash
import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
```

- Estender as propriedades do botão, inserindo na função extends IButtonProps.
 ```bash 
interface Props extends IButtonProps {
  title: string;
//   type?: 'PRIMARY' | 'SECONDARY';
}
```
- Para inserir as propriedades é só ir na tag ```bash  <Button />``` e car Ctrl+Space dentro da tag para ver as propriedades possíveis.

- Para usarmos um icone é só fazer o import pelo nome.
[Ver lista de Icons.](http://bit.ly/3U5jVgY)

```bash
// importar o icon pelo nome, igal o import abaixo
import { Fontisto} from '@expo/vector-icons';
```
- Colocar no import do native base o:
```bash
import { Icon } from 'native-base';
```
- Colocar as propriedades na tag button
```bash
 <Button 
          title='ENTRAR COM GOOGLE'
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md"/>}
          />
```
- Na função Button chamaro rest:
```bash
export function Button({ title, ...rest }: Props) {
	return(
		 <ButtonNativeBase {...rest}>
       {title}
    </ButtonNativeBase >
	)
}
```
..... ver retante no video da configuração das propriedes do button GOOGLE.

---

#### Contexto de autenticação.
Contexto é compartilhar com aplicação, se o usuário está logado ou não, e permite que compartihe as rotas com toda a aplicação

- Criar uma pasta dentro de SRC de nome contexts.
Criar dentro dessa pasta o arquivo AuthContext.tsx e por dentro do arquivo a importação:

```bash
import { createContext } from "native-base";
```
passar propriedade vazia {}:
```bash
export const AuthContext = createContext({});
```
- Tipar o que vai ser compartilhado, quais informações serão compartilhadas.
```bash
 interface UserProps = {
  user: String;
  AvatarUrl: String;
  
}

export interface AuthContextDataProps{
  user:UserProps;
  signIn: () => Promise<void>;
}
```
- Passar o contexto como propriedade da função
```bash
export const AuthContext = createContext({} as AuthContextDataProps);
```
- Criar função para prover contexto
```bash
export function AuthContextProvider({children}) {

async function SigIn(){

}
    return(
        <AuthContextProvider value={{
            SigIn,
            user:{
                name: 'Lucas',
                avatarUrl: 'https://github.com/Lucas-Ed.png'
            }
        }}>
        {children}
        </AuthContextProvider>

    )
}
```

- Criar a função:
```bash
import { ReactNode } from "react";

 interface AuthProviderProps {
    children: ReactNode;
  }
```
- Passar a função criada na outra função
```bash
export function AuthContextProvider({children}: AuthProviderProps) {...}
```
- Criar uma pasta dentro de SRC de nome hooks dentro dela criar o arquivo useAuth.tsx, o hooks pra poder compartilhar o contexto, colocar o seguinte:
os imports:
```bash
import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../contexts/AuthContext";
```
- Criar uma função
```bash
export function useAuth(): {
  
}
```
- Tipar a função
```bash
export function useAuth(): AuthContextDataProps {
  
}
```
- Criar o ontexto dentro da função anterior:
```bash
export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  # if (!context) {
  #   throw new Error('Cannot use "useAuth" outside AuthContextProvider')
  # }

  return context;
}
```
compartilhando o contexto criado no arquivo onde quisermos, geralmeente é posto no app.tsx
```bash
<AuthContextProvider>

</AuthContextProvider>
```
---
#### Autenticação com GOOGLE.

- Precisamos instalar a bliblioteca [Expo Auth Session](http://bit.ly/3NFz99R)
```bash
npx expo install expo-auth-session expo-random
```
- Instalar o expo web browser
```bash
npx expo install expo-web-browser
```

- Criar um scheme, para ser utilizado pro direcionamento da conexão com o GOOGLE
Dentro do arquivo app.json:
```bash
{
  "expo": {
    "name": "nlwcopamobile",
    "scheme": "nlwcopamobile",
    "slug": "nlwcopamobile",
    }
}
```
- Autenticação-configurar o auth
- Acessar o site da [google](https://console.cloud.google.com)
  
- 1°- Criar um novo projeto, e dar um nome pra ele, usaremos: nlwcopamobile, e clicar em criar.

- 2°- No mesmo site ir no menu: API e serviços-----> credenciais.

- 3°- Criar uma credencial clicando no botão ID do client Oauth.

- 4°- Definir quais dados do usuário será acssado, usaremos o EXTERNO.

- 5°- Configurar novamente nome do app como  nlwcopamobile, e usar e-mail padrão da conta, salvar.

- 6°- Definir escopo, em Escopos não confidenciais clicar em adicionar escopo.

- 7°- Adicionar como escopo e-mail e perfil do usuário, e atualizar.

- 8°- Salvar e continuar----->Salvar e continuar.

- 9°- no painel principal clicar em publicar aplicativo.

- 10°- credenciais---->clicar no botão ID do client Oauth.

- 11°- Selecionar tipo de aplicativo como sendo aplicativo da web, add o nome do app nlwcopamobile.

- 12°- Adicionar o [URI](https://docs.expo.dev/guides/authentication/#google) https://auth.expo.io e a de
redireionamento:   https://auth.expo.io/@lucasbr007/nlwcopamobile

- 13°- Obter o slug  de URI de forma automatica:

- Rodar a aplicação
Dentro do arquivo AuthContext fazer o import
```bash
import * as AuthSession from 'expo-auth-session';
// incluir fora de uma função
console.log(AuthSession.makeRedirectUri({useProxy: true}));
```

no terminal rodar o comando para logar no expo pelo terminal:
```bash
npx expo login
```

- Pra saber se estou logado no terminal rode o comando:
```bash
npx expo whoami
```

- 14°- Com a URI criada pegar o ID e a KEY gerados.

- 15°- Implementar
No arquivo AuthContext.tsx, ou em outro contexto que for usado, fazer o import:
```bash
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
# Chamar a sessão
WebBrowser.maybeCompleteAuthSession();
```
Ver video para acessar o conteúde restante......
#### Interface para criar o bolão.

- Dentro da pasta sreens criar a nova tela que será o arquivo New.tsx
Criar a função:
```bash
export function New() {
  return(
    <VStack bgColor="gray.900">

    </VStack>
  )
}
```
- Em app.tsx trocar o import de SignIn para NEW e tbm trocar a tag que chama como component
```bash
import { New } from './src/screens/New';

 <New />
```
- Copiar os components prontos e por na pasta components
- Istalar uma nova bliblioteca [phosporicons- react native.](https://phosphoricons.com)
```bash
npm install --save phosphor-react-native
```
- Finalizar a interface de New
   fazer a importação do componente Header
```bash
<Header>
</Header>
```
---

# Aula-04.

#### Navegação

#### Instalando o react [navigation](https://reactnavigation.org/docs/getting-started)
```bash
npm install @react-navigation/native

```
Instalando dependências em um projeto gerenciado pelo Expo
```bash
npx expo install react-native-screens react-native-safe-area-context
```
Tab navigation
```bash
npm install @react-navigation/bottom-tabs
```
#### Criando rotas

- Criar dentro de Src criar uma pasta de nome routes, com um arquivo: app.routes.tsx

Fazer o import do bottom-tabs.
```bash
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()
```
- Criar componente
```bash
export function AppRoutes() {
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[22],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800]
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0
        }
      }}
    >
  )
}
```
- Importar component de new:
```bash
import { New } from '../screens/New'

# Chamar o componente dentro da tag.
component={New}
```
a mesma coisa se aplica  em outros componentes.

Dentro da pasta routes criar o arquivo index.tsx, 
fazer o import dentro dele:
```bash
import { AppRoutes } from './app.routes'
```
Passar a tag de navegação:
```bash
<AppRoutes />
```
está pronto a chamada de navagação.
no arquivo principal App.tsx fazer o import  e chamar a rota com a tag:
```bash
import { Routes } from './src/routes'
```

```bash
{fontsLoaded ? <Routes /> : <Loading />}
```

#### Customizando boton tabs

- Criar icones
import:
```bash
import { PlusCircle, SoccerBall } from 'phosphor-react-native'
```

Dentro da tag: ```bash  <Screen/> ``` chamar o ícone:
```bash
options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
          tabBarLabel: 'Novo bolão'
        }}
```
- Passar propriedade de menu ativado ou não, dentro da tag <Navigator>
passar as cores desejadas:
```bash
 tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
```
transferir a cor pro ícone:
dentro da tag <Screen/>
```bash
tabBarIcon: ({ color }) => <SoccerBall color={color} size={size}
```
- Para acessar cores do tema:
  ```bash
import { useTheme } from 'native-base'
```
dentro da função chamar as cores e tamanhos de acordo com o  theme:
```bash
const { colors, sizes } = useTheme()
```
nas tags usar para chamar a cores:
```bash
backgroundColor: colors.gray[800]
```
tamanhos:
```bash
 height: sizes[22],
```




```bash

```
#### Tipagem das rotas
```bash

```

```bash

```
```bash

```
```bash

```

```bash

```
#### Integração com o backend

- Instalando o axios:
```bash
npm i axios
```
Criar dentro de SRC uma pasta de nome services com o arquivo de nome api.ts , fazer o import e defenir a api:
```bash
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.0.30:3333'
});
```
Na pasta context arquivo AuthContext

fazer o import da api:
```bash
import { api } from '../services/api'
```
Requisição da api
```bash
async function signInWithGoogle(access_token: string) {
    try {
      setIsUserLoading(true)

      const tokenResponse = await api.post('/users', { access_token })
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
   
      const userInfoResponse = await api.get('/me')
      setUser(userInfoResponse.data.user)

    } catch (error) {
      console.log(error)
      throw error
    } finally {
      setIsUserLoading(false)
    }
  }
```
```bash

```
```bash

```
```bash

```
```bash

```

#### Detalhes de um bolão
```bash

```
```bash

```
```bash

```
#### Listagem de jogos de um bolão
```bash

```
```bash

```
```bash

```
#### Criação de um palpite
```bash

```
```bash

```
```bash

```
#### Finalização do app mobile
```bash

```
```bash

```
```bash

```
# Aula-05.

Instalar country-flag:
```bash
npm install --save react-native-country-flag
```
dayjs
```bash
npm install dayjs
```
Dotenv
```bash
npm dotenv babel-plugin-inline-dotenv
```
Em babel.configjs adicionar plugin
```bash
 plugins: ['inline-dotenv']
```
---