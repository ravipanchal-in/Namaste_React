import RestaurantCard from "../components/restaurantCard/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "../components/shimmerUI/CardShimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { withPromotedLabel } from "../components/restaurantCard/RestaurantCard";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Home = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resJson = await res.json();
    const data = await resJson.data;
    setAllRestaurants(
      data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurants(
      data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTop = () => {
    const filteredRestaurants = allRestaurants?.filter((item) => {
      return item.info.avgRating > 4;
    });
    setRestaurants(filteredRestaurants);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  return onlineStatus === false ? (
    <h1>Looks like You're offline!! Please check your internet connection.</h1>
  ) : (
    <>
      <section className="actions">
        <button
          className="border bottom-1 border-black px-2 py-1 rounded-lg"
          onClick={() => filterTop()}
        >
          Top Rated Restaurant
        </button>
        <form className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state of restaurants list
              setRestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </section>
      <div className="restaurant-list">
        {restaurants?.length === 0 ? (
          <Shimmer shimmer_card_unit={12} />
        ) : (
          restaurants?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant?.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
