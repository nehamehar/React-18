import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setthemeMode] = useState("light")

  //define methods by using them with settheme
  const lightTheme =() => {
    setthemeMode("light")
  }
  const darkTheme =() => {
    setthemeMode("dark")
  }

  // for change in theme we use js not react as useeffect is for giving effects:
  
  useEffect(() =>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) // as our dependencies on themeMode (whenever their change on thememode useeffect will rerender for that we use useeffect)

  
  return (
    <ThemeProvider value={{themeMode,lightTheme, darkTheme}}> {/*for access of theme.js app , also we have to define them for their function*/}
    <div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                    {/*themeBtn */}  
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    {/* */}
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
