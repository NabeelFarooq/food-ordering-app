import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  // console.log(resData);
  const { info } = resData;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    info;
  const { sla } = info;
  const { slaString } = sla;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher order component
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
