import Image from "next/image";
import React from "react";


// images 
import imageQuotes from '@/public/“.svg'

const AboutCard = (props) => {
  return <>
  <div className="xl:w-[330px] rounded-[20px] bg-[#f9f9f9] pt-[30px]">
    <div className="px-[20px] pb-[100px] pt-[10px] flex flex-col gap-[10px]">
    <Image src={imageQuotes} alt="" />
        <h1 className="text-center">{props.text}</h1>
    </div>
    <div className="bg-[#5937E0] rounded-b-[20px] relative pt-[50px] py-[25px] flex flex-col items-center">
        <Image className="absolute top-[-50px]" src={props.ImageUser} alt="" />
        <p className="text-white">{props.job}</p>
        <h2 className="text-white font-bold">{props.name}</h2>
    </div>
  </div>
  </>;
};

export default AboutCard;
