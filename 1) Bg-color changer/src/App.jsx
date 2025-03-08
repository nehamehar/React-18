import { useState } from "react"

function App() {
  const [color, setcolor] = useState("pink") //as use of state reflect on screen //color is current value of state//setcolor allow you to update the state// as we passesd usestate (0), so the color initial value is 0
  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center w-40 h-screen gap-6 px-5 py-1 text-white rounded-2xl bg-slate-900 inset-y-3 inset-x-3" >
        <h2 className="text-xl font-semibold">Colors suggestion</h2>
        <button onClick={() => setcolor("red")}className="px-4 py-2 bg-red-800 border border-black du-none ration-500 outline rounded-3xl hover:bg-slate-700">RED</button>
        <button onClick={() => setcolor("yellow")} className="px-4 py-2 duration-500 bg-yellow-700 border outline-none border-whi rounded-3xl hover:bg-slate-700">YELLOW</button>
        <button onClick={() => setcolor("orange")} className="px-4 py-2 duration-500 bg-orange-700 border border-white outline-none rounded-3xl hover:bg-slate-700">ORANGE</button>
        <button onClick={() => setcolor("blue")} className="px-4 py-2 duration-500 border border-white outline-none rounded-3xl bg-sky-500 hover:bg-slate-700">BLUE</button>
        <button onClick={() => setcolor("black")} className="px-4 py-2 duration-500 bg-black border border-white outline-none rounded-3xl hover:bg-slate-700">BLACK</button>
        <button onClick={() => setcolor("green")} className="px-4 py-2 duration-500 border border-white outline-none rounded-3xl bg-lime-700 hover:bg-slate-700">GREEN</button>
      </div>
    </div>
  )
}

export default App