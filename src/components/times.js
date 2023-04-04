import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const Times = () => {
  return (
    <div className="container pt-10 mx-auto w-full">
      <div className="titles pb-2 mb-5 flex gap-2 items-center border-b-2 border-dotted ">
        <AiOutlineClockCircle color="green" size={"25px"} />
        <h3>برنامه زمانی</h3>
      </div>
      <div>
        <div>
          <label>آغاز</label>
          <input type="date" className="bg-slate-300" />
        </div>
        <div>
          <label>پایان</label>
          <input type="text" className="bg-slate-300" />
        </div>
        <div>
          <label>تعداد</label>
          <input type="text" className="bg-slate-300" />
        </div>

        <button className="">افزودن بازه</button>
      </div>
    </div>
  );
};

export default Times;
