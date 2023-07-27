import React, { useState } from "react";

const Form = ({ addTask, filter, setFilter }) => {

  const [inputText, setInputText] = useState("");

  return (
    <div className="flex justify-center mt-4 gap-3">
      <input className="border-2 bg-background-light border-primary rounded-md px-1
      shadow-sm hover:shadow-md transition duration-200"
      value={inputText} onChange={event => setInputText(event.target.value)} type="text"></input>
      <button className="bg-primary px-5 py-3 rounded-md cursor-pointer
      shadow-sm hover:shadow-md transition duration-200"
      onClick={() => {
        if (inputText) {
          addTask(inputText);
          setInputText("");
        }
      }}>Add</button>
      <select className="rounded-md bg-background-light border-2 border-primary px-1
      shadow-sm hover:shadow-md transition duration-200"
      defaultValue={filter} onChange={event => setFilter(event.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='incompleted'>Incompleted</option>
      </select>
    </div>
  )
}

export default Form
