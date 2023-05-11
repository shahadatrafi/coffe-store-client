import React from "react";
import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";

function App() {

  const coffees = useLoaderData();

  return (
    <div className="w-9/12 mx-auto">
      <h1 className='text-6xl text-purple-600 text-center my-5'>Welcome To Our Coffee Shop. </h1>
      <h4 className='text-3xl text-purple-800 text-center my-5'>Here Are {coffees.length} Coffees</h4>
      <div className="grid md:grid-cols-2 gap-6">
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
          coffee={coffee}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
