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
```
agora faça o import de Loading no arquivo App.tsx:
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