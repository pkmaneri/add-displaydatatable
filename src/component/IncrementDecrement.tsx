import React, {useState} from "react";

function IncrementDecrement(){

    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(prevCount => prevCount + 1)
    }

    function decrement(){
        setCounter(prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={increment}>+</button>
            {counter}
            <button onClick={decrement}>-</button>
        </>
    )

}

export default IncrementDecrement;