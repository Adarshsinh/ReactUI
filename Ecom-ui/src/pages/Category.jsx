import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiHamburger } from "react-icons/pi";

const categories=[
    {
        id:1,
        name:'All',
        icon:<TiThSmall className="w-[50px] h-[50px] text-green-500"/>
    },
     {
        id:2,
        name:'breakfast',
        icon:<MdFreeBreakfast className="w-[50px] h-[50px] text-green-500" />

    },
     {
        id:3,
        name:'soups',
        icon:<TbSoup className="w-[50px] h-[50px] text-green-500"/>

    },
     {
        id:4,
        name:'pasta',
        icon:<CiBowlNoodles className="w-[50px] h-[50px] text-green-500"/>

    },
     {
        id:5,
        name:'main_course',
        icon:<MdOutlineFoodBank className="w-[50px] h-[50px] text-green-500"/>

    },
     {
        id:6,
        name:'pizza',
        icon:<LiaPizzaSliceSolid className="w-[50px] h-[50px] text-green-500"/>

    },
     {
        id:7,
        name:'burger',
        icon:<PiHamburger className="w-[50px] h-[50px] text-green-500"/>

    }
]

export default categories
