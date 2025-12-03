import Image from 'next/image'
import React from 'react'


// images 


const ContactCard = (props) => {
  return (
    <div className='flex flex-col xl:w-[30%]
     gap-[10px]'>
     <Image src={props.img} alt='' /> 
     <h1 className='font-bold'>{props.text}</h1>
     <p className='text-[#00000099]'>{props.date}</p>
    </div>
  )
}

export default ContactCard
