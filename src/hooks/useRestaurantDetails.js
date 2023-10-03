import { useState, useEffect } from "react";
import { restaurant_details_URL } from "../utils/constants";

const useRestaurantDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(restaurant_details_URL + id);
    jsonData = await response.json();
    setRestaurantDetails(jsonData?.data);
  };
  return restaurantDetails;
};

export default useRestaurantDetails;
