import React, { useState } from "react";


function HookButton() {

    const [clicks, setClicked] = useState(0);
    const [increseBy, setIncreaseBy] = useState(1);

    return(
        <>
            <h1>going through useState hook.</h1>
            <div>
                input a number:
                <input
                    value={increseBy}
                    onChange={x => setIncreaseBy(Number(x.target.value))}
                    type="number"
                />
            </div>
            <p>clicked the button this many {clicks} times.</p>
            <button onClick={() => setClicked(clicks + increseBy)} >click</button>
        </>
    )
}

export default HookButton;