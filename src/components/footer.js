import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" flex container pb-3 mx-5 w-full  justify-between items-start rightSide ">
        <ul className="flex items-center md:flex-row flex-col md:w-8/12 gap-2">
          <li className="text-xs md:border-l-2 hover:text-green-500 pl-2 transition-all ease-linear delay-75 cursor-pointer border-gray-300 border-dotted">
            درباره ما
          </li>
          <li className="text-xs md:border-l-2 hover:text-green-500  pl-2 line-2 transition-all ease-linear delay-75 cursor-pointer border-gray-300 border-dotted">
            پشتیبانی
          </li>
          <li className="text-xs md:border-l-2 hover:text-green-500  pl-2 line-2 transition-all ease-linear delay-75 cursor-pointer border-gray-300 border-dotted">
            قوانین و مقررات
          </li>
          <li className="text-xs md:border-l-2 hover:text-green-500  pl-2 line-2 transition-all ease-linear delay-75 cursor-pointer border-gray-300 border-dotted">
            حریم خصوصی
          </li>
          <li className="text-xs  hover:text-green-500 line-2 transition-all ease-linear delay-75 cursor-pointer">
            تماس باما
          </li>
        </ul>
        <div className="leftSide flex flex-col items-start    ">
          <span className=" cursor-pointer w-full delay-75 transition-all ease-linear hover:text-green-500">
            همراه ما باشید
          </span>
          <div className="flex gap-2 mt-2">
            <div className="rounded-full cursor-pointer hover:scale-90 w-5 h-5 bg-indigo-400"></div>
            <div className="rounded-full cursor-pointer hover:scale-90 w-5 h-5 bg-indigo-400"></div>
            <div className="rounded-full cursor-pointer hover:scale-90 w-5 h-5 bg-indigo-400"></div>
            <div className="rounded-full cursor-pointer hover:scale-90 w-5 h-5 bg-indigo-400"></div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 pb-10">COPYRIGHT</div>
    </>
  );
};

export default Footer;
