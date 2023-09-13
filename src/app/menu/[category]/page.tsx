import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuCategory = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          className="flex flex-col even:bg-fuchsia-50 group justify-around w-full sm:w-1/2 md:w-1/3 h-[60vh] border-b-2 border-r-2 border-red-500"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[70%] ">
              <Image
                fill
                src={item.img}
                className="object-contain py-2"
                alt=""
              ></Image>
            </div>
          )}
          <div className="flex flex-col items-center ">
            <h1 className="font-semibold text-2xl"> {item.title} </h1>
            <h2 className="font-bold text-xl">${item.price}</h2>
            <button className="bg-red-500 md:hidden md:group-hover:block py-2 px-3 font-semibold text-white rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuCategory;
