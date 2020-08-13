import React, { useState } from "react";

function GetWhatYouEnter() {
    const [state, setState] = useState("");

    function handleChange(e: any) {
        const inputData = e.target.value;
        setState(inputData)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={state}></input>
            <div>{state}</div>
        </div>
    );

}

export default GetWhatYouEnter;
