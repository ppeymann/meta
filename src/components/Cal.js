import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Dayes from "./days";
import calender from "../db";

const Cal = () => {
  const [activator, setActivator] = useState(0);
  return (
    <div className="container pt-10 mx-auto w-full">
      <div className="titles pb-2 mb-5 flex gap-2 items-center border-b-2 border-dotted ">
        <AiOutlineCalendar color="green" size={"25px"} />
        <h3>تقویم مشاوره ها</h3>
      </div>
      <div className="w-full grid gap-2.5 grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
        {calender.map((item, index) => (
          <div
            onClick={() => {
              setActivator(index);
            }}
            key={index}
          >
            <Dayes activator={activator} items={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cal;
