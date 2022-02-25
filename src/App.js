import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foodsJSON from './foods.json';

function App() {

  // const foodBox1 = {
  //   name: "Orange",
  //   calories: 85,
  //   image: "https://i.imgur.com/abKGOcv.jpg",
  //   servings: 1
  // }

  const [foods,setFoods] = useState(foodsJSON);
  const [foodsData,setFoodsData] = useState(foodsJSON);

  const addFood = newFood => {
    const updatedFoodsData = [...foodsData, newFood];
    const updatedFoods = [...foods, newFood];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);

  };

  const filterFoodsList = str => {

    let filteredFoods;

    if (str === 'All') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter(foodData => {
        return foodData.name[0].toLowerCase() === str.toLowerCase();
      })
    }
    
    setFoods(filteredFoods);

  }

  return (
    <>

      {/* {
        foods.map(food => {
          return (
            <>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="foodImage" />
            </>
          )
        })
      } */}

      {/* <FoodBox food={foodBox1}/> */}

      <AddFoodForm addFood={addFood}/>

      {
        foods.map((food,index) => {
          return (
            <FoodBox food={food} key={index}/>
          )
        })
      }

    </>
  );
}

export default App;
