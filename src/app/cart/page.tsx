import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-112px)]  md:h-[calc(100vh-130px)] flex flex-col md:flex-row text-red-500">
      {/* Product container */}
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-center  overflow-scroll">
        {/* Single item */}
        <div className="flex items-center justify-between mb-4 lg:mb-5">
          <Image width={100} height={100} src="/temporary/p1.png" alt="" />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <p>desc</p>
          </div>
          <h3 className="font-bold text-lg">$34</h3>
          <span className="font-xl font-semibold cursor-pointer p-2">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image width={100} height={100} src="/temporary/p1.png" alt="" />
          <div className="">
            <h1 className="uppercase font-bold text-xl">Sicilian</h1>
            <p>desc</p>
          </div>
          <h3 className="font-bold text-lg">$34</h3>
          <span className="cursor-pointer font-xl font-semibold p-2">X</span>
        </div>
      </div>
      {/* Payment container */}
      <div className="w-full md:w-1/3 p-4 bg-fuchsia-50 flex flex-col justify-center  gap-4">
        <div className="flex flex-row justify-between">
          <span>Subtotal (4 items)</span>
          <span>$225</span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex flex-row justify-between">
          <span>Delivery</span>
          <span>Free</span>
        </div>
        <hr className="" />
        <button className="bg-red-500 uppercase text-center  text-white px-3 w-1/2 py-2 rounded-md">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default CartPage;
