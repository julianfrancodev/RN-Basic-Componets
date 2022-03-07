import { DarkTheme, Theme } from "@react-navigation/native"

type ThemeAction =
    | {type: 'set_light_theme'}
    | {type: 'set_dark_theme'}

export interface ThemeState extends Theme {
    currentTheme: "light" | 'dark',
    dividerColor: string,
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors:{
        primary: 'red',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba(0,0,0,0,0.7)'
}
export const dartkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    colors:{
        primary: '#bb86fc',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba(0,0,0,0,0.7)'
}

export const themeReducer = (state: ThemeState , action: ThemeAction): ThemeState =>{


    switch (action.type) {
        case 'set_light_theme':
            return {
                ...lightTheme
            };

        case 'set_dark_theme':
            return {
                ...dartkTheme
            }
    
        default:
            return {
                ...state
            }
            break;
    }

}