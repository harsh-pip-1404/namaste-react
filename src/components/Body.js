import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ResList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listofres, setListofres] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [resFilter, setResFilter] = useState("");

    useEffect(() => { fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListofres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResFilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const Status = useOnlineStatus();
    if (Status === false) return <h1 className="text-center text-red-600 mt-10">You are offline</h1>;

    if (listofres.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body max-w-7xl mx-auto p-4 bg-gray-50">
            <div className="filter flex flex-col md:flex-row justify-between items-center my-6">
                <div className="search flex space-x-4 mb-4 md:mb-0">
                    <input
                        type="text"
                        className="search-box border border-gray-300 rounded-full p-2 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Search Restaurants..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition duration-300"
                        onClick={() => {
                            const filterRes = listofres.filter((r) => r.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setResFilter(filterRes);
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition duration-300"
                    onClick={() => {
                        const filteredlistofres = listofres.filter(restro => restro.info.avgRating > 4);
                        setListofres(filteredlistofres);
                    }}
                >
                    Top Restaurants
                </button>
            </div>

            <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {resFilter.map((res) => (
                    <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                        <RestaurantCard resData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
