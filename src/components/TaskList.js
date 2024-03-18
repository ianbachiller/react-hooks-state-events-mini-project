import React, {useState} from "react";
import Task from "./Task"

function TaskList({ tasks, setTaskList, selectedCategory}) {

  //CB function for the click event listener that is put in the Task component.
  function handleClickDelete (text) {
    const filteredTasks = tasks.filter(task => task.text !== text)
    setTaskList(filteredTasks)
  }
  //CB function for the click event listener that is put in the Task component.


  //Reactify every task, store every reactified task in a variable to be rendered in the DOM as a return value in the TaskList component.
  const newTaskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleClickDelete={handleClickDelete}
    />
   //Reactify every task, store every reactified task in a variable to be rendered in the DOM as a return value in the TaskList component.
  ))
  
  return (
    <div className="tasks">
      {newTaskList}
    </div>
  );
}
export default TaskList;
