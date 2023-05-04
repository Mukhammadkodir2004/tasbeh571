import {useState} from 'react';
import './App.css'







const App = () => {
    
    const elBtn = document.querySelector(`.btn`)
    const elCount = document.querySelector(`#countAll`)
    
    let [count,setcount]= useState(0)
    let [countAll,setcountAll] =useState(0)
    const increment=()=>{
       
        if( count<33){
            setcount((prev)=>prev+1)
        }
        if ( count==33){
            setcount(0)
        }
        if (count==33){
           setcountAll(countAll+1)
        } 
        if (countAll>0){
          elBtn.textContent= "Alhamdulillah"
          if( countAll>1){
            elBtn.textContent= "Allohu Akbar"
          }
        }
       
    }
   
   
  return <div className='main__card'>
    <h1 className='first'>Tasbeh</h1>
 
  <h3 className='count'>Count: {count}</h3>
    
  <button className='btn' onClick={increment}>Subhanalloh</button>
  
  <h4 id='countAll'>CountAll:{countAll}</h4>
  </div>
    
  
}

export default App