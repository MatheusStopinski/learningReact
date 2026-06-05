import { useState } from 'react';


export function Counter() {
    const [counter, setCounter] = useState(0);

    return <div>  
        <CounterArea counter={counter} />
         &nbsp;
         &nbsp;
        <CounterIncrementButton setCounter={setCounter} />
    </div>
};

function CounterArea({ counter }) {    
    return <span>{counter}</span>   
};  

function CounterIncrementButton({ setCounter }) {
    return <button onClick={() => setCounter(prev => prev + 1)}>+1</button>
};  

