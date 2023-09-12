import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./CountDown"), {
  ssr: false,
});

const Offer = () => {
  return (
    <div className="flex bg-slate-900 text-white p-4 gap-3 flex-col md:flex-row w-screen h-[calc(100vh-15vh)]">
      {/* Text container */}
      <div className="flex-1 flex flex-col text-center gap-3 justify-center items-center">
        <h1 className=" text-4xl md:text-5xl font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="lg:text-xl">
          {" "}
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <DynamicComponent></DynamicComponent>
        <button className="bg-red-500 p-3 rounded-md">Order Now</button>
      </div>
      {/* Img container */}
      <div className="relative flex-1 w-full">
        <Image
          src="/offerProduct.png"
          className="object-contain"
          fill
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Offer;
