import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/UseRestaurantMenu";
import Shimmer from "./Shimmer";
import ResDish from "./ResDish";

const ResMenu = () => {
    const { resID } = useParams();
    const restUseMenu = UseRestaurantMenu(resID);

    if (restUseMenu == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = restUseMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = restUseMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards)

    // const { dish } = restUseMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(dish)
    // const dish=restUseMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(d=>d.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.Dish");
    // console.log(dish);

    return (
        <div className=" text-center menu max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
                <h3 className="text-lg text-gray-600 mt-2">{cuisines.join(", ")}</h3>
                <h4 className="text-gray-500 mt-1">{costForTwoMessage}</h4>
            </div>

            <h2 className=" text-center text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">Menu</h2>
            <ul className="space-y-6">
                {itemCards.map(item => (
                    <li 
                        key={item.card?.info?.id} 
                        className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm transition-all duration-200 border border-gray-200"
                    >
                        <span className="text-gray-700 text-lg font-medium">{item.card?.info?.name}</span>
                        <span className="text-gray-900 font-semibold text-lg">{item.card?.info?.price / 100} ₹</span>
                    </li>
                ))}
            </ul>
            {/* <div>
                {itemCards.map((i)=><ResDish data={i?.card} />)};
            </div> */}






            
        </div>
    );
};

export default ResMenu;
