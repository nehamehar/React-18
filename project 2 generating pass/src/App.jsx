import { useState, useCallback} from 'react'
import './App.css'

function App() {
  const [letters, setletters] = useState(6); //usestate for counting the letters in box
  const [numbersAllowed, numbersnotAllowed] = useState(false); // this for numbers lettersallowed is random case we are taking for letters or numbers true and false 
  const [charAllowed, charnotAllowed] = useState(false); // this is for char
  const [pass, setpass] = useState("") // for input pass

  const generatorPass = useCallback(() => {
    let pass =""
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  //data for pass
    if(numbersAllowed) data+= "0123456789"
    if (charAllowed) data += "!@#$%^&*()-_=+\|{ };:/?"
    
    // generating random numbers with loop
    for (let i=0; i <= array.length; i++)  //i vallue is less than eqaul to array k highest element ,then i++
    { 
      let char = Math.floor(Math.random()*data.length + 1)   // Math.random is use to generate the random pass, data.length + 1=> data k length m +1 hota rhega 0 n ayega
      // //for taking character in index value with upper operation: (charat(name where you want character in index)
      pass = data.charAt(char)
    }
    // for pass value read
    setpass(pass)
  }, [letters, numbersAllowed, charAllowed, setpass]);
  return ( 
    <>
    <div> 
      <h1 className="text-3xl text-center text-white bg-gray-700 border-2 rounded-full">Generating Passwords</h1>
      <div className='justify-center px-48 border-4 py-36 rounded-3xl mt-28 bg-slate-700'>
        <div className=''></div>
      </div>
    </div>
    </>
  )
}

export default App
