import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItemList from "../components/category-item-list/RestaurantCategoryItemList";
import { clearCart } from "../redux/slices/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
const dispatch = useDispatch();
  return (
    <div className="m-4 p-4">
      <h1 className="text-center text-2xl font-bold">Cart</h1>
      {cartItems.length === 0 ? <h1 className="text-center py-4 my-4">Your Cart is empty</h1> : <RestaurantCategoryItemList items={cartItems} />}
      <div className="flex justify-between mt-5">
        <button onClick={()=>dispatch(clearCart())} className=" border-black border-2 p-3">Clear Cart</button>
        <button className=" border-black border-2 p-3">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
