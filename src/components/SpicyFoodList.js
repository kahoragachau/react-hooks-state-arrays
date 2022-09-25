import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    console.log(newFood);
    setFoods(newFoodArray)
  }

  function handleDblClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray)
  }

  function handleLiClick(id){
    const newFoodArray = foods.map((food) => food.id === id ? {...food, heatLevel: food.heatLevel + 1}: food)
    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)} onDoubleClick={() => handleDblClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
