import Card from "../components/Card";
import Navbar from "../components/Navbar";
import categories from "./Category";
import { food_items } from "../food";
import { useEffect, useState } from "react";
import Context from "../Context";

function Home() {
  let [card, setCard] = useState(food_items);
  let [input, setInput] = useState("");

  useEffect(() => {
    let result2 = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input)
    );
    setCard(result2);
  }, [input, setInput]);

  function filterCard(category) {
    if (category === "All") {
      setCard(food_items);
    } else {
      let result = food_items.filter((item) => item.food_category === category);
      setCard(result);
    }
  }
  return (
    <Context.Provider value={{ input, setInput }}>
      <div>
        <Navbar />
        <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[10px] ">
          {categories.map((item) => {
            return (
              <div
                onClick={() => filterCard(item.name)}
                className=" h-[100px] w-[100px] shadow-xl rounded flex flex-col justify-center items-center bg-white text-gray-700 font-bold gap-[5px] hover:bg-gray-200 cursor-pointer"
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="w-[95%] m-auto mt-5 gap-5 px-5 flex flex-wrap justify-center items-center">
          {card.map((item, id) => {
            return (
              <Card
                name={item.food_name}
                key={id}
                image={item.food_image}
                price={item.price}
                id={item.id}
                type={item.food_type}
              />
            );
          })}
        </div>
      </div>
    </Context.Provider>
  );
}

export default Home;
