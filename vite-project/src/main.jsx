import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  // render is method
  <StrictMode>   
    <App />      
  </StrictMode>, //strictmode is some paert we can remove that 
)
