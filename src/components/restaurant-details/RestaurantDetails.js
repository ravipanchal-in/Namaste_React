import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../utils/constants";
import Shimmer from "../shimmerUI/CardShimmer";
import useRestaurantDetails from "../../hooks/useRestaurantDetails";
import RestaurantCategory from "../restaurant-category/RestaurantCategory";

const RestaurantDetails = () => {

  const [showIndexNo,setShowIndexNo] = useState(0);
 
  const { id } = useParams();

  const restaurantDetails = useRestaurantDetails(id);

  if (restaurantDetails === null) return <Shimmer shimmer_card_unit={1} />;

  const { name, cloudinaryImageId, city, cuisines } =
    restaurantDetails?.cards[0]?.card?.card?.info;

  const categories =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="flex justify-start items-center gap-4">
        <div>
          <img
            className="w-[200px] rounded-lg"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <h3 className="text-xl py-3">Cuisines : {cuisines?.join(", ")}</h3>
          <h2 className="text-xl">City : {city}</h2>
        </div>
      </div>
      <div className="mt-3">
        {categories.map((item,index) => (
          <RestaurantCategory
            expand={index === showIndexNo ? true : false}
            data={item?.card?.card}
            setShowIndexNo={()=> setShowIndexNo(showIndexNo === index ? null : index)}
            key={item?.card?.card?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
