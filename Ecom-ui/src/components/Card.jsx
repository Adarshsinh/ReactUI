import { PiLeafBold } from "react-icons/pi";

import { GiChickenOven } from "react-icons/gi";



function Card({name,image,id,price,type }) {
  return (
    <div className="w-[197px] rounded p-2 bg-white hover:bg-gray-200 cursor-pointer ">

      <div className=" overflow-hidden">
        <img src={image} alt="" className="w-[180px] h-[160px] rounded-lg object-cover"/>
        
      </div>

      <div>

        <div className="font-bold pt-1 text-[16px] text-gray-700">{name}</div>
        <div className="pt-1 text-[13px] font-bold text-green-600 flex justify-between items-center">
            <span>Rs.{price}/-</span>
            <div className="flex flex-row justify-center items-center gap-1 pt-1">
               {type=="veg"?<PiLeafBold />:<GiChickenOven/> }{type}
            </div>
        </div>

      </div>

      <div className="pt-1.5"><button className="w-[100%] bg-green-200 rounded font-bold text-[12px] p-1.5 text-gray-800">Add to Dish</button></div>

    </div>
  )
}

export default Card
