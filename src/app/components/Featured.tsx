import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll  text-red-500 mt-6">
      {/* Wrapper */}
      <div className="w-max flex p-2">
        {/* single item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around md:w-[50vw] lg:w-[33vw] lg:h-[70vh] hover:bg-fuchsia-50 "
          >
            {/* img */}
            {product.img && (
              <div className="relative flex-1 w-full hover:scale-110 transition-all duration-500 ">
                <Image
                  className="object-contain"
                  src={product.img}
                  alt=""
                  fill
                ></Image>
              </div>
            )}
            {/* text */}
            <div className="flex-1 flex flex-col items-center gap-2 mt-2 p-3 text-justify ">
              <h1 className="font-bold text-xl uppercase">{product.title}</h1>
              <p className="text-center"> {product.desc} </p>
              <span className="font-semibold text-xl"> ${product.price} </span>
              <button className="bg-red-500 p-2 rounded-md text-white ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
