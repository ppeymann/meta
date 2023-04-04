import React from 'react'

function Footer() {
  return (
    <div className=' flex container mx-5 w-full bg-slate-200 justify-between items-start rightSide '>
        <div className='leftSide flex flex-col items-start    '>
    <span className=' cursor-pointer w-full hover:text-green-500'>همراه ما باشید</span>
    <div className='flex gap-2 mt-2'>
        <div className='rounded-full w-5 h-5 bg-indigo-400'></div>
        <div className='rounded-full w-5 h-5 bg-indigo-400'></div>
        <div className='rounded-full w-5 h-5 bg-indigo-400'></div>
        <div className='rounded-full w-5 h-5 bg-indigo-400'></div>
    </div>
</div>
<ul className='flex items-end w-8/12  justify-between'>
    <li className='text-xs' >درباره ما</li>
    <li className='text-xs'>پشتیبانی</li>
    <li className='text-xs'>قوانین و مقررات</li>
    <li className='text-xs'>حریم خصوصی</li>
    <li className='text-xs'>تماس باما</li>
</ul>

    </div>
  )
}
export default Footer;