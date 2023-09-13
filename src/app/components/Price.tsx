import React from "react";

type props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: props) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">${price.toFixed(2)}</h1>
    </div>
  );
};

export default Price;
