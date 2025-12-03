import Image from 'next/image'
import React from 'react'

export const InfoCard = (props) => {
  return (
    <>
    <div className='w-[200px] py-[20px] bg-[#FAFAFA] justify-center flex flex-col gap-[10px] p-[20px] rounded-[10px]'>
        <Image src={props.img} alt='' />
        {props.icon}
        <h1 className='font-bold text-[18px]'>{props.h1Text}</h1>
        <p className='text-[#00000099]'>{props.pText}</p>
    </div>
    </>
  ) 
}
