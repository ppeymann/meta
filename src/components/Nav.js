import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { HiTranslate } from "react-icons/hi";
import Image from "../Images/mml.svg";

function Navbar() {
  return (
    <div className="Navbar container flex justify-between mx-auto w-full py-5 text-center  items-center">
      <div className="person delay-75 transition-all ease-linear cursor-pointer text-green-700 p-2 hover:bg-green-700 hover:text-white rounded-full">
        <BsPersonCircle size={"23px"} className="" />
      </div>
      <img className="w-12 cursor-pointer" src={Image}></img>
      <div className="lang delay-75 transition-all ease-linear  flex items-center justify-center text-green-700 gap-1 px-1.5 py-1 hover:bg-green-700 rounded-xl cursor-pointer hover:text-white">
        <HiTranslate className="" />
        <span className="">Lang</span>
      </div>
    </div>
  );
}
export default Navbar;
