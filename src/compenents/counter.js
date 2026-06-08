import { createContext, useState, useContext } from 'react';

const CounterContext = createContext();


function CounterContextProvider({ children }) {
        const [counter, setCounter] = useState(0);
        const [CounterHistory, setCounterHistory] = useState([]);

        return (<CounterContext.Provider value={{ 
            counter, setCounter, CounterHistory, setCounterHistory 
        }}>
            {children}
        </CounterContext.Provider>); 
    }


export function Counter() {    
    return <CounterContextProvider>  
        <CounterArea />
        <CounterHistoryList />
        <CounterIncrementButton />
        </CounterContextProvider>
};

function CounterArea() {   
    const { counter } = useContext(CounterContext);
    return <span>{counter}</span>   
};  

function CounterIncrementButton() {
    const { setCounter, 
            counter, 
            setCounterHistory, 
            CounterHistory 
        } = useContext(CounterContext);

    function increment() {
        setCounterHistory([...CounterHistory, counter]); //destrutor de propriedades.
        setCounter(prev => prev + 1);
    }

    return <button onClick={increment}>
        Counter
        </button>
};  

function CounterHistoryList() {
    const { CounterHistory } = useContext(CounterContext);
    return (
        <ul>
            {CounterHistory.map(i => <ol key={i}>
                 {i}
            </ol>)}
        </ul>
    );
}