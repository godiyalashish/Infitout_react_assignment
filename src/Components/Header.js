import React from 'react'

const Header = () => {
  return (
    <div className='flex w-full justify-evenly items-center pt-2 pb-2 shadow-md'>
        <div>
        <img src={require('../images/logo.png')} />
        </div>
        <div>
            <ul className='flex gap-x-5'>
                <li className='font-semibold'>Dashboard</li>
                <li className='font-semibold text-[#2C57F5]'>Option chain</li>
                <li className='font-semibold'>Strategy builder</li>
                <li className='font-semibold'>Positions</li>
                <li className='font-semibold'>Order book</li>
            </ul>
        </div>
        <div className='flex gap-x-4'> 
            <div className='flex flex-col items-end'>
                <p className='font-semibold text-[13px] text-[#4A4A4A]'>NIFTY</p>
                <div className='flex gap-x-1 items-end justify-center'>
                    <p className='text-[#27AE60] text-[13px]'>0.36%</p>
                    <p className='font-semibold'>18,245.32</p>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <p className='font-semibold text-[13px] text-[#4A4A4A]'>BANKNIFTY</p>
                <div className='flex gap-x-1 items-end justify-center'>
                    <p className='text-[#27AE60] text-[13px]'>0.7%</p>
                    <p className='font-semibold'>39,156.1</p>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <p className='font-semibold text-[13px] text-[#4A4A4A]'>INDIA VIX</p>
                <div className='flex gap-x-1 items-end justify-center'>
                    <p className='text-[#27AE60] text-[13px]'>-10.9%</p>
                    <p className='font-semibold'>12.12</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-x-1'>
            <p className='font-semibold'>Profile</p>
            <img src={require('../images/down_arrow.png')} className='w-3 h-2'/>
        </div>
    </div>
  )
}

export default Header