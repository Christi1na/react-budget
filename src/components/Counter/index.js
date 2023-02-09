import React, { useState } from "react";

const Counter = () => {
    const [clicked, setClicked] = useState(0);

    function handleClick() {
        setClicked(clicked+1)
    }

    function showValue() {
        setTimeout(() => {
            alert(clicked)
        }, 3000)
    }
    return (
        <>
            <div>Clicked: {clicked}</div>
            <button onClick={handleClick}>Click</button>
            <button onClick={showValue}>Show value</button>
        </>
    )
}

export default Counter;