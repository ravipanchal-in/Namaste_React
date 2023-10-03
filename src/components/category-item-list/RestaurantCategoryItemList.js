import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
const RestaurantCategoryItemList = ({ items }) => {

  const dispatch = useDispatch()

const handleAddItem = (item)=>{
  // dispatch an action
  dispatch(addItem(item))
}
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between items-center p-4 border-t-2">
          <div className="w-10/12">
          <h5 className="text-lg">{item?.card?.info?.name}</h5>
          <p className="text-sm my-2">₹. {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</p>
          <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 relative">
            {item?.card?.info?.imageId && (
              <img
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-[80px] rounded-lg"
              />
            )}
            <button onClick={()=>handleAddItem(item)} className="bg-orange-400 text-white rounded-lg text-xs mt-1 px-3 py-1">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItemList;
