"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-09-14");
const inSecond = endingDate.getTime();
console.log(endingDate);

const CountDown = () => {
  return (
    <div>
      <div className="font-bold text-3xl text-yellow-300">
        <Countdown date={inSecond} />
      </div>
    </div>
  );
};

export default CountDown;
