import Price from "@/app/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="p-4 lg:p-16 flex flex-col justify-center items-center text-red-500 md:flex-row h-[80vh]">
      {/* img container */}
      {singleProduct.img && (
        <div className="relative w-full flex-1 h-full">
          <Image
            className="object-contain"
            src={singleProduct.img}
            alt=""
            fill
          ></Image>
        </div>
      )}
      {/* text container */}
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="font-bold text-3xl uppercase">{singleProduct.title}</h1>
        <p className="">{singleProduct.desc}</p>
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
