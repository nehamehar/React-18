import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './assets/context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      <h1>Helo MY Name</h1>
    </UserContextProvider>
  )
}

export default App
