import { Divider,Row } from 'antd';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
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
    const updatedFoodsData = [newFood, ...foodsData];
    const updatedFoods = [newFood,...foods];

    setFoodsData(updatedFoodsData);
    setFoods(updatedFoods);

  };

  const filterFoodsList = str => {

    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter(foodData => {
        return foodData.name[0].toLowerCase() === str.toLowerCase();
      })
    }
    
    setFoods(filteredFoods);

  }

  const deleteFood = name => {

    const filteredFoods = foodsData.filter( food => {
			return food.name !== name
		})

  setFoodsData(filteredFoods)
  setFoods(filteredFoods)

  return

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

      <Search filterFoodsList={filterFoodsList} />

      <Divider>List</Divider>

      <Row>
      {
        foods.map((food,index) => {
          return (
            <FoodBox food={food} key={index} deleteFood={deleteFood}/>
          )
        })
      }
      </Row>

    </>
  );
}

export default App;
