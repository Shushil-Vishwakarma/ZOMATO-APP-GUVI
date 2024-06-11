import './App.css';
import { Restaurant } from './component/Restaurant';
import INITIAL_RESTAURANT_DATA from '../src/Data/restaurant.json';

function App() {

  const restaurantData = INITIAL_RESTAURANT_DATA;

  return (
    <div className="App">
      {
        restaurantData.map
          (
            (rest_data) => <Restaurant newRestaurantData={rest_data} />
          )
      }


    </div>
  );
}

export default App;