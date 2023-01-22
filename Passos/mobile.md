# Aula 1 mobile
<!--// ref: https://github.com/esbnet-->

Instalação [Expo:](https://react-native.rocketseat.dev/expo-managed/windows)
```bash
npm install -g expo-cli
```

Criar o projeto usando expo:
```bash
npx create-expo-app mobile --template
```
escolher o blank(typescript).

Executar a aplicação:
```bash
npx expo start --clear
```
Baixar os [assets](https://drive.google.com/drive/folders/1lq5kcOCN0tWqrvULu_SkDoMrgy9jpIo-)
e substituir a pasta assets.

em app.json mudar a cor do background para #09090A.

[Instalação](https://docs.expo.dev/guides/using-custom-fonts/) de [fontes personalizadas:](https://fonts.google.com/specimen/Inter?query=inter)

```bash
npx expo install expo-font @expo-google-fonts/inter
```
Fazer o carregamento da fonte:
```bash
from "@expo-google-fonts/inter";
```
Fazer o import da fonte:

```bash
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold, useFonts
} from "@expo-google-fonts/inter";
```
Fazer o carregamento das fontes antes do app iniciar, dentro da função app(){} e antes do return, colocar:
```bash

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

if (!fontsLoaded) {
    return <Loading />;
  }

}
```

Caso não carregue as fontes ele retorna o component Loading.
Crie um componente Loading.tsx dentro da pasta components que fica dentro de src.
em Loading.tsx coloque o seguinte código:
```bash
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  )
}
```- Agora faça o import de Loading no arquivo App.tsx:
```bash
import { Loading } from './src/components/Loading';
```
Customizar statusbar, colocr dentro da tag:
```bash
 return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
    </View>
  );
```
---

# Aula 02
- Instalar a lib [Nativewind:](https://www.nativewind.dev/quick-starts/expo)
  
```bash
npm i nativewind

npm i --dev tailwindcss
```
- Criar o arquivo do tailwind:

```bash
npx tailwindcss init
```

- Incluir as configurações no tailwind:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
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
- Modifique seu babel.config.js

```bash
plugins: ["nativewind/babel"],
```
- Iniciar a aplicação:

```bash
npx expo start
```
## Tipar o className para utilizar o Tailwindcss,  Criar a Home
- Crie uma pasta de nome screns dentro de src e crie o arquivo, Home.tsx
- e coloque o código:

```bash
import { Text, View, ScrollView } from 'react-native';

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';

import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length

export function Home() {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, i) => (
            <Text 
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row flex-wrap'>
          {
            datesFromYearStart.map(date => (
            <HabitDay key={date.toISOString()} />
            ))
          }

          {
            amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <View 
                key={index}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))
          }
        </View>
      </ScrollView>

    </View>
  )
} 
```
- Crie uma pasta de nome @types dentro de src e crie o arquivo app.d.ts, coloque o código:

```bash
/// <reference types="nativewind/types" />
```
Assim o typescript entende como o className deve se comportar na aplicação.

- Instalar a extensão no VsCode Tailwind CSS IntelliSense


## Criar o component Header

- Crie um componente de nome Header.tsx, e coloque o código:

```bash
import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

import Logo from '../assets/logo.svg';

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity 
        activeOpacity={0.7}
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"  
      >
        <Feather 
          name="plus"
          color={colors.violet[500]}
          size={20}
        />

        <Text className="text-white ml-3 font-semibold text-base">
          Novo
        </Text>
      </TouchableOpacity>
    </View>
  )
}
```

### Incluir o logo e utilizar SVG como componente

```bash
npx expo install react-native-svg
```
### Definir a tipagem do SVG como componente

- Instalar o [svg-transformer:](https://github.com/kristerkari/css-to-react-native-transform)
```bash
npm i react-native-svg-transformer --save-dev
```
- Seguindo a documentação do github da lib, crie um arquivo no diretório raiz junto com,tailwind.config.js de nome: metro.config.js e coloque o código que indica no repositório:

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
- Adicionar o svg no Header.tsx:

```bash
import Logo from '../assets/logo.svg';

// Pra utilizar como componente por a tag:
 <Logo />
```

- Dentro de @types crie o arquivo, svg.d.ts e coloque o código:

```bash
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```
### Utilizar Icones do vector-icons

- fazer o import:

```bash
import { Feather } from '@expo/vector-icons';
```
## Criar o componente HabitDay


```bash
import { Dimensions, TouchableOpacity } from "react-native";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =  (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

export function HabitDay() {
  return (
    <TouchableOpacity 
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
    />
  )
}
```
### Instalar o dayjs para manipular as datas

```bash
npm i dayjs
```
### Definir o padrão de datas pt-br
- Dentro do diretório src crie a pasta  lib e crie um arquivo de nome dayjs.ts, coloque o código:

```bash
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');
``` 
### Reaproveitando o generate-range-between-dates.ts

- Em Home.tsx faça o import:

```bash
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';
``` 
- Dentro de src crie a pasta utils e o arquivo generate-range-between-dates.ts, coloque o código:

```bash
import dayjs from 'dayjs'

export function generateRangeDatesFromYearStart() {
  const startDate = dayjs().startOf('year')
  const endDate = new Date()

  let dateRange = []
  let compareDate = startDate

  while (compareDate.isBefore(endDate)) {
    dateRange.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dateRange
}
``` 
- Ativar o scrool da rolagem, fazer o import do ScrollView em Home.tsx:

```bash
import { Text, View, ScrollView } from 'react-native';
``` 

- No arquivo Home.tsx,na view tem a key ativa o scroll

```bash
key={`${weekDay}-${i}`}
``` 
- Em app.tsx fazer o import do dayjs:

```bash
import './src/lib/dayjs';
``` 
# Aula 03

// Estrutura básica das telas
# Cadastro de hábito
- Na pasta screens criar um arquivo de nome Habit.tsx, e New.tsx
  
# Detalhe de hábito
- Na pasta screens criar um arquivo de nome New.tsx

// Implementando a navegação
## Criar as rotas da aplicação

- Instalar a lib [react-navigation:](https://reactnavigation.org/docs)

```bash
npm install @react-navigation/native
```

- Instalar a dependências em um projeto gerenciado Expo

```bash
npx expo install react-native-screens react-native-safe-area-context
```

- Adicionar [estratégia de navegação stack navigator](https://reactnavigation.org/docs/hello-react-navigation)
- 
```bash
npm install @react-navigation/native-stack
```

- Dentro da pasta src criar o arquivo app.routes.tsx, e fazer as rotas:

```bash
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={New} />
      <Screen name="habit" component={Habit} />
    </Navigator>
  );
}
```
- Dentro da pasta routes criar o arquivo index.tsx, para criar o contexto de acesso as rotas:

```bash
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
```

- Em App.tsx mudar do home para routes,mudar o import e a tag de Home para Routes:

```bash
import { Routes } from './src/routes';

//  de <Home />, para:
<Routes />
```
- Rodar novamente a aplicação:

```bash
npx expo start
```
- deverá aparecer o home no topo da página , para tira-lo mofificaremos o navigator do arquivo app.routes.tsx:

```bash
<Navigator screenOptions={{ headerShown: false }}>
```
## Navegar para a tela de cadastro

- Em Header.tsx fazer o import:
  
```bash
import { useNavigation } from "@react-navigation/native";

// Adicionar na função principal
const { navigate } = useNavigation();
```
- o navigate é usado para navegar de uma tela pra outra.

## Definir a tipagem das rotas de navegação
- Na pasta @types criar o arquivo, navigation.d.ts e por o código:

```bash
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      habit: {
        date: string;
      };
    }
  }
}
// Dessa forma dizmos quais rotas estão disponíveis.
```

- Em Header.tsx passar o  onPress para funcionar a rota:

```bash
onPress={() => {
          navigate("new");
```
// Criar Interface de cadastro de hábitos

## Reaproveitar o componente BackButton

### Utiliar scroolView para habilitar rolagem
- No arquivo New.tsx fazer o scroll
  
```bash
  return (
    <View className="flex-1 bg-background px-8 pt-16 ">
      <ScrollView
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 100 }}
      # > // false ou true habilita ou deabilita o scroll

      </ScrollView>
    </View>
  );
```

- Criar o componente com nome BackButton.tsx, e por o código:

```bash
# Componente BackButton
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const { goBack } = useNavigation();
  return (
    # Implementar botão de voltar na tela de cadastro
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <Feather name="arrow-left" size={32} color={colors.zinc[400]} />
    </TouchableOpacity>
  );
}
```
## Input de novo hábito

- No arquivo New.tsx, por a tag  do `<BackButton />`, e abai dar sequência.

```bash
<Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?{" "}
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-zinc-800 border-2 focus:border-green-600"
          placeholder="ex.: Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
```

## Componente de Checkox

- Na função new dentro de New.tsx criar um estado:  ` const [weekDays, setWeekDays] = useState<number[]>([]);`

- Cria também uma função pra isso:

```bash
  # Criar a função de marcar/desmarcar Checkox
  # Listar um Checkbox para cada dia da semana
  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }
```



## Botão de confirmar
- Ainda no arquivo New.tsx coloque o código do botão:

```bash
<TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
```


// Criar interface de hábitos do dia 

## Navegar para a tela de hábito

- Em home.tsx na função Home antes do return por o código o import e:

```bash
import { useNavigation } from "@react-navigation/native";

const { navigate } = useNavigation();
```
- No componente HabitDay.tsx, depois dos imports colocar

```bash
interface Props extends TouchableOpacityProps {}
```

- Fazer o import junto com os outros passar o TouchableOpacityProps:

```bash
import { Dimensions, TouchableOpacity, TouchableOpacityProps, } from "react-native";
```
- Na função pegar todo o restante
  
```bash
export function HabitDay({ ...rest }: Props) {}
```
- Passar `{...rest}` dentro da tag: `<TouchableOpacity>`
- Voltar em Home,tsx e passar o onPress dentro da tag `<HabitDay>`:

```bash
onPress={() => navigate("habit", { date: date.toISOString() })}
```
## Passando e recuperando data como parâmetro da rota
- Em habit.tsx tipar os parâmetros:

```bash
interface Params {
  date: string;
}
```
- No mesmo arquivo importar o :
 ```bash
import { useRoute } from "@react-navigation/native";
```
- No mesmo arquivo passa antes do return e depois de import:

```bash
# Formatar e exibir o dia da semana
    const route = useRoute();
    const { date } = route.params as Params;
```
## Reaproveitar o componente BackButton
- Reaproveitar o scroll:

```bash
<ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
    >
        
    </ScrollView>
```
Não esquecer de fazer o import.

- Criar os textos dentro do scroll

```bash
// por a tag do componente BackButton e fazer o import
<BackButton />
<Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
            {dayOfWeek}
        </Text>
        <Text className=" text-white font-extrabold text-3xl">
            {dayAndMonth}
        </Text>
```
## Formatar e exibir dia/mês
- Fazer o import de dayjs
  
```bash
import dayjs from "dayjs";
```
- Converter data como string por parâmetro:
```bash
    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format("dddd");
    const dayAndMonth = parsedDate.format("DD/MM");   
```
- Passar o dayweek dentro do texto:

```bash
{dayOfWeek}
```
## Criar componente ProgressBar
- Criar um componente de nome: ProgressBar.tsx e por o código:

```bash
import { View } from "react-native";

interface Props {
  progress?: number;
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${progress}%` }}
      ></View>
    </View>
  );
}
```
- Em  Habit.tsx chamar a ProgreesBar
```bash
<ProgressBar progress={40} />
```
## Utilizar componente de Checkbox

```bash
<View className="mt-6">
            <Checkbox title="Beber 2L de água" checked />
            <Checkbox title="Caminhar/Correr" />
</View>
```
# Aula 04

## Instalando axios

```bash
npm i axios 

```

- Dentro da pasta lib crie o arquivo axios.ts, e coloqe o código:

```bash
import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.0.30:3333'
});

```


## Configurando o acesso ao server


// Home

## Listando sumário

- na tela em screens Home.tsx fazer o import da api:

```bash
import { api } from '../lib/axios'
```
- E dentro da função gome criar outra função, do tipo fetch para fazer uma requisição:

```bash
  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('/summary');

      console.log(response.data)
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(loading){
    return(
      <Loading />
    )
  }
```

- Incluir o alert no inport:

```bash
import { Text, View, ScrollView, Alert } from 'react-native';

// Fazer o import do usestate e useefect
import { useState, useEffect } from 'react'

```
- Na pasta utils, apagar oarquivo de lá e criar um novo de nome generate-dates-from-year-beginning.ts

```bash
import dayjs from 'dayjs'

export function generateDatesFromYearBeginning(){
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dateRange = []
  let compareDate = firstDayOfTheYear

  while(compareDate.isBefore(today)){
    dateRange.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dateRange
}
```
- Criar um novo arquivo também de nome: generate-progress-percentage.ts e por:

```bash
export function GenerateProgressPercentage(total: number, completed: number){
    return Math.round(completed/ total) * 100
}
```

- No arquivo Home.tsx fazer o imports:

```bash
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'

// Dentro da função Home passar:
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryProps | null>(null)
```

- Fazer a requisição:

```bash
async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('/summary');

      console.log(response.data)
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
```
## Utilizando o componente de loading

- Fazer o imort do component pronto: 

```bash
import { Loading } from '../components/Loading'
```
- Passar o componente:

```bash
  if(loading){
    return(
      <Loading />
    )
  }

```
## Passando utilizando propriedades, no componente HabitDay

```bash
 <HabitDay
              key={date.toISOString()}
              date={date}
              amountOfHabits={dayWithHabits?.amount}
              amountCompleted={dayWithHabits?.completed}
              onPress={() => navigate('habit', { date: date.toISOString() })}
            />
```

## Criando uma função para calcular a porcentagem do processo

- No arquivo generate-progress-percentage.ts em utils por: 

```bash
export function GenerateProgressPercentage(total: number, completed: number){
    return Math.round(completed/ total) * 100
}
# // isso calcula a porcentagem para definir a cor do quadrado
```

- Em HabitDay.tsx:

```bash
  const amountAccomplishedPercentage =
    amountOfHabits > 0
      ? GenerateProgressPercentage(amountOfHabits, amountCompleted)
      : 0
```

- Instalar a lib clsx:

```bash
npm i --save clsx
```

- Fazer o import:

```bash
import clsx from 'clsx'
```

- Criar as condições:

```bash
 <TouchableOpacity
      className={clsx('rounded-lg border-2 m-1', {
        ['bg-zinc-900 border-zinc-800']: amountAccomplishedPercentage === 0,
        ['bg-violet-900 border-violet-700']:
          amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ['bg-violet-800 border-violet-600']:
          amountAccomplishedPercentage > 20 &&
          amountAccomplishedPercentage < 40,
        ['bg-violet-700 border-violet-500']:
          amountAccomplishedPercentage > 40 &&
          amountAccomplishedPercentage < 60,
        ['bg-violet-600 border-violet-500']:
          amountAccomplishedPercentage > 60 &&
          amountAccomplishedPercentage < 80,
        ['bg-violet-500 border-violet-400']: amountAccomplishedPercentage > 80,
        ['border-white border-4']: isCurrentDay,
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
```

- Referenciar o quadrado pela data atual:

- Usar o day js fazer o import:

```bash
import dayjs from 'dayjs'
```

```bash
  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today)
```
se for ele executa a classe de cor.

// New

## Obtendo dados do formulário

- Incluir na função new:

```bash
const [title, setTitle] = useState('')

# E na tag <TextInput
# a propriedade: 
          onChangeText={setTitle}
          value={title}
# Essa propriedade observa o conteúdo do input, e pega o valor em sí
```
## Cadastrando e enviando novo hábito para a API
- Fazer o import do alert

- Criar a função:

```bash
async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        return Alert.alert(
          'Novo hábito',
          'Informe o nome do hábito e escolha o período.'
        )
      }

      await api.post('/habits', { title, weekDays })

      setTitle('')
      setWeekDays([])
      Alert.alert('Novo hábito', 'Hábito criado com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível criar um novo hábito.')
    }
  }
```

- Chamar a função no botão, TouchableOpacity.
- através da propriedade:

```bash
onPress={handleCreateNewHabit}
```
 # Aula 05
 
 ## Buscar os hábitos do dia selecionado na API

- Em Habit.tsx, criar o estado de loading
- Na função Habit(), setar o usestate:

```bash
const [loading, setLoading] = useState(true);
const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
```

- Criar uma nova função:

```bash
async function fetchHabits() {
        try {
            setLoading(true);
    
            const response = await api.get('/day', { params: { date }, });
            setDayInfo(response.data);
            setCompletedHabits(response.data.completedHabits);
    
        } catch (error) {
            Alert.alert('Ops', 'Não foi possível carregar as informações dos hábitos');
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

```

- Usar o useefect para rodar somente 1 vez a função
```bash
useEffect(() => {
    fetchHabits();
}, []);
```

- Setar os tipos:

```bash
interface DayInfoProps {
completedHabits: string[];
possibleHabits: {
    id: string;
    title: string;
}[]
}
```
ver no video os outros passos não pude documentar eram muitos.

 ## Criar o componente de lista de hábitos vazia

- Crie um novo componente de nome HabitsEmpty.tsx:

```bash
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

export function HabitsEmpty() {
    const { navigate } = useNavigation();

return (
    <Text
        className="text-zinc-400 text-base"
    >
        Você ainda não está monitorando nenhum hábito {' '}

    <Text
        className="text-violet-400 text-base underline active:violet-500"
        onPress={() => navigate('new')}
    >
        comece cadastrando um
        </Text>
    </Text>
);
}
<!-- ```
 ## Enviar para a API o status do hábito (realizado ou não)

 ## Utilizando o useFocusEffect para utilizar a home ao voltar

# // Animação

## Conhecendo o React Native Reanomated

## Instalando e configurando o Reanomated na aplicação

## Animar a ProgressBar

## Animar o Checkbox -->


## Testando tudo


