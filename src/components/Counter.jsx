import { useState } from "react"

export const Counter = ({ init }) => {
    const [counter,setCounter]=useState(init)
    return (
        <div>

            <h1>counter:{counter}</h1>
                 
            <button onClick={() => { setCounter(counter + 1) }}>increment</button>
            
            <button onClick={() => {
                if (counter > 10) {
                    setCounter(counter - 1)
                }
            }}>decrement </button>

            <button onClick={() => { setCounter(counter + counter) }}>double</button>

            <button onClick={() => { setCounter(counter * 2) }}> multiplie</button>
        </div>
        
    )
}