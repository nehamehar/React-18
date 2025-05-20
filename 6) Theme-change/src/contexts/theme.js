import {createContext, useContext} from 'react'

export const ThemeChanger = createContext({
    themeMode : "light" , // varibale default type it will be black
    darkTheme : () => {},
    lightTheme: () => {},  // these are methods we can give in object variable and methods
})

export const ThemeProvider = ThemeChanger.Provider
export default function useTheme(){
    return useContext (ThemeChanger)
}