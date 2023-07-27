import React, { useState } from "react";

const Form = ({ addTask, filter, setFilter }) => {

  const [inputText, setInputText] = useState("");

  return (
    <div className="flex justify-center mt-4 gap-3">
      <input className="border-2 border-gray-300 hover:border-gray-900"
      value={inputText} onChange={event => setInputText(event.target.value)} type="text"></input>
      <button className="bg-gray-300 px-3 py-2 rounded-md border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        if (inputText) {
          addTask(inputText);
          setInputText("");
        }
      }}>Add</button>
      <select className="rounded-md"
      defaultValue={filter} onChange={event => setFilter(event.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='incompleted'>Incompleted</option>
      </select>
    </div>
  )
}

export default Form
