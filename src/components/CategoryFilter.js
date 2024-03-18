import React from "react";

function CategoryFilter({categories, handleClickCategory}) {
  const catArr = categories.map(category => {
    return <button 
      className= {category !== "All" ? "selected" : " "}
      key={category} 
      onClick={()=> handleClickCategory(category)} 
    >{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catArr}
    </div>
  );
  
}

export default CategoryFilter;
