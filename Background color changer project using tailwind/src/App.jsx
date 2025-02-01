import { useState } from "react"

function App() {
  const [color, setcolor] = useState("pink") //as use of state reflect on screen //color is current value of state//setcolor allow you to update the state// as we passesd usestate (0), so the color initial value is 0
  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor : color}}>
      <div className="w-40 h-screen p-4 text-white bg-sky-950 rounded-r-3xl">
    <h2 className="text-xl font-semibold">Colors suggestion</h2>
    <button className="mt-9">
      <a href="#" className="block px-4 py-2 duration-500 border border-black rounded hover:bg-gray-700-8">Home</a>
      <a href="#" className="block px-4 py-2 duration-500 border border-black rounded hover:bg-gray-700-8 ">About</a>
      <a href="#" className="block px-4 py-2 duration-500 border border-black rounded hover:bg-gray-700">Services</a>
      <a href="#" className="block px-4 py-2 duration-500 border border-black rounded hover:bg-gray-700-8">Contact</a></button>
  </div>
  </div>
  )
}

export default App
