import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../features/CartSlice";
const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.AllCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className="bg-orange-200 h-[50px]">
      <div className="text-2xl pt-2 mx-8 flex items-center justify-between">
        <span>Navbar</span>
        <span>
          {" "}
          <Link to="/">All Product</Link>
        </span>
        <span>
          <Link to="/cart">Cart({totalQuantity})</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
