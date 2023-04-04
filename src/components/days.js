import React, { useState } from "react";

const Dayes = ({ item, activator, index }) => {
  const { weekDaye, date, month, friday } = item.items;
  console.log(activator);
  return (
    <div
      className={` rounded-lg text-gray-700 transition-all delay-75 flex flex-col justify-center items-center cursor-pointer px-2 py-3.5 hover:bg-green-500 hover:text-white  ${
        friday ? "bg-red-500 shadow-lg !text-white" : "bg-indigo-100"
      }  font-medium ${activator === index ? "!bg-green-500 text-white" : ""}`}
    >
      <p className="text-xs md:text-base font-bold mb-1.5">{weekDaye}</p>
      <div className="flex text-xs font-medium">
        <p>{date}</p>
        <p>{month}</p>
      </div>
      <div
        className={`w-full rounded-lg mt-2 h-1 ${
          activator === index ? "bg-white" : ""
        } `}
      ></div>
    </div>
  );
};

export default Dayes;
