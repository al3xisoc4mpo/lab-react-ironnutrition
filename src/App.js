import './App.css';
import foods from './foods.json';

function App() {

  // const [food,setFood] = useState()



  return (
    <>

      {
        foods.map(food => {
          return (
            <>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="foodImage" />
            </>
          )
        })
      }

    </>
  );
}

export default App;
