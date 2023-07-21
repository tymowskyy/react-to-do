import React, { useState } from "react";

const Form = ({addTask}) => {
    const [inputText, setInputText] = useState("");
    return (
        <>
        <input value={inputText} onChange={event => setInputText(event.target.value)} type="text"></input>
        <button onClick={() => {
            addTask(inputText);
            setInputText("");
        }}>Add</button>
        </>
    )
}

export default Form