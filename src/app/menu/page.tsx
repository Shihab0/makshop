import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-16  h-[calc(100vh-112px)] md:h-[calc(100vh-120px)] flex flex-col md:flex-row justify-center items-center">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`menu/${category.slug}`}
          style={{ backgroundImage: `url(${category.img})` }}
          className="w-full h-1/3 bg-cover p-8 md:h-3/5 lg:h-3/5"
        >
          <div
            className="w-1/2 overflow-hidden"
            style={{ color: `${category.color}` }}
          >
            <h1 className="font-bold text-3xl uppercase">{category.title}</h1>
            <p className="text-sm py-2">{category.desc}</p>
            <button
              className={`hidden md:block rounded font-semibold bg-${
                category.color
              } py-2 my-2 px-3 text-${
                category.color === "black" ? "white" : "red-500"
              }`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
