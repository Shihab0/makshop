"use client";
import React, { useEffect, useState } from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [total, quantity, options, selected, price]);

  return (
    <div className="flex flex-col  gap-4">
      <h1 className="text-xl font-semibold">${total.toFixed(2)}</h1>
      {/* Option container */}
      <div className="flex flex-row gap-3">
        {options &&
          options.map((option, index) => (
            <button
              className=" ring-1 w-24 ring-red-500 text-red-500 rounded-md font-semibold px-3 py-2"
              key={option.title}
              style={{
                background: selected === index ? "rgb(239 68 68 )" : "white",
                color: selected === index ? "white" : "rgb(239 68 68)",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* Quantity container */}
      <div className="flex justify-between items-center">
        <div className="flex  flex-row justify-between w-full rounded-s-md p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-6 items-center font-semibold">
            <button
              onClick={() => setQuantity((pre) => (pre > 1 ? pre - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((pre) => (pre < 9 ? pre + 1 : 9))}
            >
              {">"}
            </button>
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
