import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (<h1>hi my name</h1>)
}

// this is syntax error
/*const ReactEle = {
  type: "a",  //tags
  props :{    
      href: "https://github.com/samyak1409",
      target:"blank"
  },
  childrean :"click me"
}*/

/*const ReactEle = React.createElement(
 "a",
  {href: "https://github.com/samyak1409",target:"_blank"},
  "click me" // children 
  )

ReactDOM.createRoot(document.getElementById('root')).render // render is method
(
  ReactEle
)*/


const name = "neha"
const ReactEle = React.createElement(
  "a",
   {href: "https://github.com/samyak1409",target:"_blank"},
   "click me", // children 
   name
   )
ReactDOM.createRoot(document.getElementById('root')).render // render is method
(
  ReactEle
)