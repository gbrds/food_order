import Header from "./components/Header";
import Meals from "./components/Meals";
import { useState, useEffect } from "react";


const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
    .then((response) => response.json())
    .then((data) => setMeals(data))
    .catch((error) => console.error(error))
  }, []);

 return (
    <>
     <Header/>
     <Meals meals={meals} />
    </>
  );
}

export default App;
