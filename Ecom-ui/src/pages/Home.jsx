import Card from "../components/Card"
import Navbar from "../components/Navbar"
import categories from "./Category"
import {food_items} from "../food"

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[10px] ">
        {categories.map((item)=>{
          return <div className=" h-[100px] w-[100px] shadow-xl rounded flex flex-col justify-center items-center bg-white text-gray-700 font-bold gap-[5px] hover:bg-gray-200 cursor-pointer">
            {item.icon}
            {item.name}
          </div>
        })}
      </div>
      <div className="w-[1200px] m-auto mt-5 gap-5 px-5 flex flex-wrap justify-center items-center">
        {food_items.map((item)=>{
          return <Card name={item.food_name} 
                image={item.food_image} 
                price={item.price} 
                id={item.id}
                type={item.food_type}
                />
        })}
      </div>
      
    </div>
  )
}

export default Home
