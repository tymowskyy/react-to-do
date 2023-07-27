import React, { useState } from "react";

const Form = ({ addTask, filter, setFilter }) => {

  const [inputText, setInputText] = useState("");

  return (
    <div className="flex justify-between mt-4 gap-3 flex-wrap md:text-lg w-11/12 sm:justify-center">
      <input className="border-2 bg-background-light border-primary rounded-md px-1
      shadow-sm hover:shadow-md transition duration-200 h-12 md:h-14"
      value={inputText} onChange={event => setInputText(event.target.value)} type="text"></input>
      <button className="bg-primary px-5 rounded-md cursor-pointer
      shadow-sm hover:shadow-md transition duration-200 h-12 md:h-14"
      onClick={() => {
        if (inputText) {
          addTask(inputText);
          setInputText("");
        }
      }}>Add</button>
      <select className="rounded-md bg-background-light border-2 border-primary px-1
      shadow-sm hover:shadow-md transition duration-200 h-12 md:h-14 basis-full sm:basis-auto"
      defaultValue={filter} onChange={event => setFilter(event.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='incompleted'>Incompleted</option>
      </select>
    </div>
  )
}

export default Form
