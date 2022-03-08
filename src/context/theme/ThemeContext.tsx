import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, dartkTheme } from './themeReducer';


interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: ()=> void
    setLightTheme: ()=> void
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any)=>{

    // const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer,Appearance.getColorScheme() === 'dark' ? dartkTheme : lightTheme); 


    useEffect(() => {
        AppState.addEventListener('change', (status)=>{
            if(status === 'active'){
                (Appearance.getColorScheme() === 'light') ? setLightTheme() : setDarkTheme()

            }
        })
    }, [])
    

    //? this is only for ios configurations
    // useEffect(() => {
    //     (colorScheme === 'light') ? setLightTheme() : setDarkTheme()
    // }, [colorScheme])
    

    const setDarkTheme = ()=>{
        dispatch({type: 'set_dark_theme'});
        console.log('Darkkkk')
    }

    const setLightTheme = ()=>{
        console.log('Lighttt')
        dispatch({type: 'set_light_theme'});
    }


    return (
        <ThemeContext.Provider
        value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}