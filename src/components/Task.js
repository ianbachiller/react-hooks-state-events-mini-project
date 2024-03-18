import React from "react";

function Task({text, category, handleClickDelete}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>handleClickDelete(text)}>X</button>
    </div>
  );
}

export default Task;
