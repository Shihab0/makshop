"use client";
import React from "react";
import Countdown from "react-countdown";
import dynamic from "next/dynamic";

const endingDate = new Date("2023-10-14");

console.log(endingDate);

const CountDown = () => {
  return (
    <div>
      <div className="font-bold text-5xl text-yellow-300">
        <Countdown date={endingDate} />
      </div>
    </div>
  );
};

export default CountDown;
