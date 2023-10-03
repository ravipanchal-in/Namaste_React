import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    id,
  } = resData;
  console.log("resData", resData);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute text-white bg-black top-7 left-3 px-2 py-1 text-sm rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
