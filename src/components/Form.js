import React, { useState } from "react";

const Form = ({ addTask, filter, setFilter }) => {

  const [inputText, setInputText] = useState("");

  return (
    <>
      <input value={inputText} onChange={event => setInputText(event.target.value)} type="text"></input>
      <button onClick={() => {
        if (inputText) {
          addTask(inputText);
          setInputText("");
        }
      }}>Add</button>
      <select defaultValue={filter} onChange={event => setFilter(event.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='incompleted'>Incompleted</option>
      </select>
    </>
  )
}

export default Form
