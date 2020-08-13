import React, { useState } from "react";

function Increment2X() {

    const [counter, setCounter] = useState(1)

    function increment() {
        setCounter(prevCount => prevCount + 2)
    }
    return (
        <>
            <button onClick={increment}>+</button>
            {counter}
        
        </>
    )

}

export default Increment2X;