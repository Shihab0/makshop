"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row h-[calc(100vh-122px)] lg:h-[calc(100vh-112px)] bg-fuchsia-50">
      <div className="flex-1 p-2 md:p-6 flex justify-center items-center gap-5 flex-col  text-red-500 font-bold">
        <h1 className="text-5xl md:text-6xl  text-center uppercase ">
          {" "}
          {data[currentSlide].title}{" "}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-md">
          Order Now
        </button>
      </div>
      <div className="flex-1 relative w-full">
        <Image
          className="object-cover"
          src={data[currentSlide].image}
          fill
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Slider;
