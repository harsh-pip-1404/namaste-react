import { useEffect, useState } from "react";
import { menuAPI } from "./constants";

const UseRestaurantMenu = (resID) => {

    const [restUseMenu,SetRestUseMenu]=useState(null);

    useEffect(()=>{fetchResMenu();},[]);

    const fetchResMenu = async () => {
        const data = await fetch(menuAPI+resID);
        const json=await data.json();
        SetRestUseMenu(json.data); 
};
  
    return restUseMenu;
}

export default UseRestaurantMenu;
