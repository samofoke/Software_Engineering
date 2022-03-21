import React, { useState } from "react";


function HookButton() {

    const [clicks, setClicked] = useState(0);

    return(
        <>
            <h1>going through useState hook.</h1>
            <p>clicked the button this many {clicks} times.</p>
            <button onClick={() => setClicked(clicks + 1)} >click</button>
        </>
    )
}

export default HookButton;