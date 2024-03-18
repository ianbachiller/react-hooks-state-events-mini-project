import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTaskList] = useState(TASKS);
  const [tasksViaCat, setCat] = useState(TASKS);
 

  function handleClickCategory(category) {
    const filteredViaCategory = tasksViaCat.filter((task) => {
      if (category === "All") return task;
      return category === task.category;
    });
    setTaskList(filteredViaCategory);
  }

  function onTaskFormSubmit(addTask) {
    console.log(addTask)
    const finalArr = [...tasks, addTask]
    setTaskList(finalArr)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleClickCategory={handleClickCategory}/>
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} setTaskList={setTaskList} />
    </div>
  );
}
export default App;
