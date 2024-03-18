import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [option, setOption] = useState(" ");
  const [newTask, setNewTask] = useState(" ");

  function handleOnChange(e) {
    setOption(e.target.value);
  }
  function handleChangeTyped(e) {
    setNewTask(e.target.value);
  }
  function handleSubmit(e) {
    console.log(e.target)
    e.preventDefault();
    const addTask = {
      category: option,
      text: newTask,
    }
    onTaskFormSubmit(addTask)
  }
  const catOptions = categories.map((cat) => {
    if (cat !== "All") {
      return <option key={cat}> {cat} </option>;
    }
  });
  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChangeTyped} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleOnChange} value={option}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;
