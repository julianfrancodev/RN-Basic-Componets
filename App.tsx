import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import React from 'react'
import { Navigator } from './src/router/Navigator';

interface Props {}


const customTheme : Theme={
  dark: true,
  colors: {
   ...DefaultTheme.colors,
  },  
}

function App(props: Props) {
  const {} = props

  return (
    <NavigationContainer
      theme={customTheme}
    >

      <Navigator/>

    </NavigationContainer>

  )
}

export default App
