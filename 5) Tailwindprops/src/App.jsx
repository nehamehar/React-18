import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/project/loginpage' //importing fun from the location

// Myobj={
//   username : "samyak",
//   age:24
// }

function App() {
  const [count, setCount] = useState(14)
  let myobj={
    username: "neha",
    age:24
  }
  let newarr=[1,2,3,4]
  return (
    <>
    <h1 className='bg-red-100 top-p-10 top-px'>hello</h1>
    <Card name = "neha"  btnText = "Click to go"/>  
    <Card name = "samyak" btnText = "ARE YOU READY"/>   //what we are passing here will show on props
    </>
  )
}

export default App
