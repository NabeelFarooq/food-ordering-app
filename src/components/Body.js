import RestaurantCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj.restaurants);
  const filterTopRatedRestaurants = () => {
    const filteredList = restaurantList.filter(
      (res) => parseFloat(res.info.avgRatingString) > 4
    );
    setRestaurantList(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
