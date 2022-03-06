import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import React from 'react'
import { ThemeProvider } from './src/context/theme/ThemeContext';
import { Navigator } from './src/router/Navigator';

interface Props {}


// const customTheme : Theme={
//   dark: true,
//   colors: {
//    ...DefaultTheme.colors,
//   },  
// }

function App(props: Props) {
  const {} = props

  return (
    <AppState>

    <NavigationContainer
      // theme={customTheme}
    >
      <Navigator/>

    </NavigationContainer>

    </AppState>

  )
}

const AppState = ({children}: any)=>{

  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>

  )
}

export default App
