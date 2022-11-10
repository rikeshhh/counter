import React,{useState} from 'react'
import './App.css'
import ByTen from './component/add';
function App() {
  const [value,setValue] = useState(0);
  // const [valueByten,setValueByten]
  // const increment = ()=>{
  //   setValue(value+5);
  // }
  // const decrement  = ()=>{
  //   setValue(value-5);
  // }
  return (
    <div className='App'>
    {/* <button onClick={increment}>+</button>
      <span>{value}</span>
<button onClick={decrement}>-</button>  */}
<ByTen valueByten={value} setValueByten={setValue} increaseBy={1}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={5}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={10}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={100}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={-1}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={-5}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={-10}/>
<ByTen valueByten={value} setValueByten={setValue} increaseBy={-100}/>
<h1>Result:{value}</h1>
    </div>
  )
}

export default App