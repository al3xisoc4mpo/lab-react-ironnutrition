import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {

  const foodBox1 = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
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


      {
        foods.map(food => {
          return (
            <FoodBox food={food}/>
          )
        })
      }



    </>
  );
}

export default App;
