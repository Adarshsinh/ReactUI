import { MdFastfood } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  return (

    <div className="w-full h-[70px] p-3  flex justify-between item-center">
        <div className="w-[50px] pt-2.5 flex justify-center item-center bg-white rounded shadow-xl">
            <MdFastfood className="w-[25px] h-[25px] text-green-500"/>
        </div>

            <div className="w-[40%] h-[45px] pl-3 flex item-center bg-white rounded shadow-md">
                <input 
                type="text" 
                placeholder="Search your food...." 
                className="w-[100%] h-[40px] outline-none " 
                />
                <IoMdSearch className="w-[35px] h-[35px] pt-2 pr-2 text-green-500"/>
            </div>

        <div className="w-[50px] pt-2.5 flex justify-center item-center bg-white rounded relative shadow-xl">
            <span className="absolute top-0 right-1 text-green-500 font-semibold "> 0</span>
            <MdOutlineShoppingCart className="w-[25px] h-[25px] text-green-500"/>
        </div>

    </div>

  )
}

export default Navbar
