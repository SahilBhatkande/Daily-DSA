import React,{ createContext, useMemo, useState } from "react"
import A from './A'
import C from "./C";

export let context = React.createContext(null);

function App() {


  const [count1 , setCount1] = useState(0);
  const [count2 , setCount2] = useState(0);

  useMemo(() => {

    for(let i=0; i<2000000000; i++)
      {
        
      }
      return count1 % 2 === 0;


  },[count1])


  const handle1 = () => {

    setCount1(count1 + 1);

  }

  const handle2 = () => {

    setCount2(count2 + 1);

    
  }

  function even(){
    
  }
 
  return (
    <>

    <context.Provider value={{count1  ,count2}}>
      
      
     

    <div style={{justifyItems: "center" }}>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>


    <button onClick={handle1}>count1 - {count1}</button> 
    <span> {even() ? "Even" : "Odd"} </span>
    <button onClick={handle2}>count1 - {count2}</button>

    </div>
    <A/>
    </context.Provider>
    </>
  )
}

export default App
