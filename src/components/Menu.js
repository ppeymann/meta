import React from "react";
import { GoArchive } from "react-icons/go";
import { HiOutlineTicket } from "react-icons/hi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";

const Menu = () => {
  return (
    <div
      dir="ltr"
      className="container grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 pt-10 mx-auto w-full gap-3 "
    >
      <div className="flex justify-center  items-center gap-2 bg-indigo-100 cursor-pointer delay-75 transition-all ease-linear hover:bg-indigo-700 hover:text-white py-2 md:text-sm rounded-xl text-gray-600">
        <GoArchive className="mt-1" />
        <span>ارشیو ویزیت ها</span>
      </div>
      <div className="md:text-sm flex justify-center items-center gap-2 bg-indigo-100 cursor-pointer delay-75 transition-all ease-linear hover:bg-indigo-700 hover:text-white  py-2 rounded-xl text-gray-600">
        <MdOutlineArticle className="mt-1" />
        <span>مقالات</span>
      </div>
      <div className="md:text-sm flex  justify-center shadow-l items-center gap-2  cursor-pointer  bg-indigo-500 text-white  py-2 rounded-xl">
        <AiTwotoneCalendar className="mt-1" />
        <span>تقویم ویزیت</span>
      </div>
      <div className="md:text-sm flex justify-center items-center gap-2 bg-indigo-100 cursor-pointer delay-75 transition-all ease-linear hover:bg-indigo-700 hover:text-white  py-2 rounded-xl text-gray-600">
        <HiOutlineTicket className="mt-1" />
        <span>ویزیت های امروز</span>
      </div>
    </div>
  );
};

export default Menu;
