import React, { useState } from "react";

function Demo() {

    const [requestType, setRequestType] = useState("");

    function onChangeValue(event) {
        setRequestType(event.target.value);
        console.log(event.target.value);
    }

    return (

        <>
            <ul onChange={onChangeValue}>
                <li><input type="radio" id="simple" name="requestType" value="simple" /><label htmlFor="type1">Simple Route Optimization</label></li>
                <li><input type="radio" id="priority" name="requestType" value="priority" /><label htmlFor="type1">Optimization With Priority</label></li>
                <li><input type="radio" id="vehicle" name="requestType" value="vehicle" /><label htmlFor="type1">Optimization Vehicle Allocation</label></li>
            </ul>

        </>
    );
}

export default Demo;