import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
const AllProduct = () => {
  const items = useSelector((state) => state.AllCart.items);
  const dispatch = useDispatch();
  return (
    <div className="mt-10">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-5 md:grid-cols-2 gap-5 px-[20px]">
        {items.map((item) => (
          <div key={item.id}>
            <div className="text-center mt-10 shadow-lg rounded">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="hover:scale-125 duration-1000"
                />
              </div>
              <h3 className="py-1 text-2xl">{item.title}</h3>
              <p className="py-2 ">{item.price}</p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
