import {createContext, React, useContext} from 'react'

export const ThemeChanger = createContext({
    themeMode : "light" , // varibale default type it will be black
    darkTheme : () => {

    },
    lightTheme: () => {}  // methods 
})

export const ThemeProvider = ThemeChanger.Provider
export default function useTheme(){
    return useContext (ThemeChanger)
}