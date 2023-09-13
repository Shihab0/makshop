import Price from "@/app/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="p-4 lg:p-16 flex flex-col justify-around items-center text-red-500 md:flex-row h-[80vh]">
      {/* img container */}
      {singleProduct.img && (
        <div className="relative w-1/2 h-1/2">
          <Image
            className="object-contain"
            src={singleProduct.img}
            alt=""
            fill
          ></Image>
        </div>
      )}
      {/* text container */}
      <div>
        <h1 className="font-semibold text-2xl">{singleProduct.title}</h1>
        <p className="text-sm">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
