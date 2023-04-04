import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {HiTranslate} from 'react-icons/hi'
import Image from '../Images/mml.svg'
// import { IconContext } from 'react-icons'
function Navbar() {
  return (    
<div className='Navbar container flex justify-between mx-auto w-full py-5 text-center items-center'>
     <div className='lang  flex items-center  text-green-700 gap-1 px-2 py-1 hover:bg-green-700 rounded-xl cursor-pointer hover:text-white'>
        <span  >Lang</span>
        <HiTranslate  />
    </div>
    <img  className='w-12 cursor-pointer' src={Image}></img>

    <div className='person cursor-pointer text-green-700 p-2 hover:bg-green-700 hover:text-white rounded-full'>
        <BsPersonCircle size={"23px"} className=''/>
    </div>
   
   </div>

  )
}
export default Navbar;