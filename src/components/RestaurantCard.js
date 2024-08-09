import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
    
    return (
        <div className="res-card bg-gray-100 p-4 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <img 
                className="res-logo w-full h-32 object-cover rounded-md mb-4" 
                alt="restaurant logo" 
                src={CDN_URL + cloudinaryImageId} 
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
            <h4 className="text-yellow-500 font-medium">{avgRating} Stars</h4>
            <h4 className="text-gray-500">{resData.info.sla.deliveryTime} Min</h4>
        </div>
    );
};

export default RestaurantCard;
