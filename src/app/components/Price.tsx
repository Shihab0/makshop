import React from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: props) => {
  return (
    <div className="flex flex-col  gap-4">
      <h1 className="text-xl font-semibold">${price.toFixed(2)}</h1>
      {/* Option container */}
      <div className="flex flex-row gap-3">
        {options &&
          options.map((option) => (
            <button
              className=" ring-1 ring-red-500 text-red-500 rounded-md font-semibold px-3 py-2"
              key={option.title}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* Quantity container */}
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-between w-full rounded-s-md p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div>
            <button>{"<"}</button>
            <span>1</span>
            <button>{">"}</button>
          </div>
        </div>
        <button className="bg-red-500 text-white font-semibold w-56 p-3 ring-3 ring-red-500 rounded-e-md">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
