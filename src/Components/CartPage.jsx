import React, { useEffect } from "react";
import {
  IncreaseItemQuantity,
  getCartTotal,
  removeItem,
  DecreaseItemQuantity,
} from "../features/CartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.AllCart
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className="mt-10">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-10 px-[20px]">
        <div>
          <p className="text-5xl">Cart-Item-{cart.length}</p>

          {cart.map((data) => (
            <div className="mt-10 shadow bg-red-100 flex justify-between lg-rounded">
              <div className="overflow-hidden flex">
                <img className="max-h-[200px]" src={data.img} alt="404" />
                <div className="ml-5">
                  <h1 className=" mt-5 mb-5">{data.title}</h1>

                  <div className="mt-5">
                    <button
                      onClick={() => dispatch(removeItem(data.id))}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 font-bold rounded"
                    >
                      Del
                    </button>
                  </div>
                </div>
              </div>

              <div className="mr-[50px] mt-[70px]">
                <div className="flex">
                  <button
                    onClick={() => dispatch(DecreaseItemQuantity(data.id))}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 font-bold rounded"
                  >
                    -
                  </button>
                  <div className="mx-[5px]">
                    <p>Quantity</p>
                    <p>{data.quantity}</p>
                  </div>
                  <button
                    onClick={() => dispatch(IncreaseItemQuantity(data.id))}
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 font-bold rounded"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="ml-12 mt-8">{data.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[400px] ml-10 max-h-[400px] bg-red-100 shadow lg-rounded">
          <div className="overflow-hidden">
            <h1 className="ml-3 mt-5">Summary</h1>
            <div className="flex mx-[10px] mt-[80px] justify-between items-center">
              <h3>Total Quantity</h3>
              <h3>{totalQuantity}</h3>
            </div>
            <div className="flex mx-[10px] mt-[60px] justify-between items-center">
              <h3>Total Amount</h3>
              <h3>{totalPrice}</h3>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-[100px] ml-[150px] py-2 px-4 rounded">
              Check-List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
