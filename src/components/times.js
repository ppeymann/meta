import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Times = () => {
  return (
    <div className="container py-10 mx-auto w-full">
      <div className="titles pb-2 mb-5 flex gap-2 items-center border-b-2 border-dotted ">
        <AiOutlineClockCircle color="green" size={"25px"} />
        <h3>برنامه زمانی</h3>
      </div>
      <div className="grid gap-2 items-center grid-cols-3 md:grid-cols-4">
        <div className=" flex flex-col justify-center">
          <label className="mr-2 text-sm mb-1">آغاز</label>
          <input
            type="time"
            className="outline-indigo-700 focus-within:bg-white placeholder:text-gray-700 placeholder:font-bold focus-within:shadow-lg rounded-lg pr-2 bg-slate-300 h-10"
            placeholder="00:01"
          />
        </div>
        <div className=" flex flex-col">
          <label className="mr-2 text-sm mb-1">پایان</label>
          <input
            type="time"
            className="outline-indigo-700 focus-within:bg-white placeholder:text-gray-700 placeholder:font-bold focus-within:shadow-lg rounded-lg pr-2 bg-slate-300 h-10"
            placeholder="23:59"
          />
        </div>
        <div className=" flex flex-col">
          <label className="mr-2 text-sm mb-1">تعداد</label>
          <input
            type="number"
            className="outline-indigo-700 focus-within:bg-white placeholder:text-gray-700 placeholder:font-bold focus-within:shadow-lg rounded-lg pr-2 bg-slate-300 h-10"
            placeholder="1"
          />
        </div>

        <button className="bg-indigo-700 text-white rounded-lg h-10 col-span-full mt-0 md:mt-6 md:col-span-1 items-end">
          افزودن بازه
        </button>
      </div>
      <div className="text-center mt-5 text-gray-500 font-bold font-sm">
        لطفا بازه زمان خود را تعیین کنید
      </div>
    </div>
  );
};

export default Times;
