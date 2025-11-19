import Image, { StaticImageData } from "next/image";
import React from "react";

interface HomeCard1Props {
  image: string | StaticImageData;
  text: string;
  description: string;
}

const HomeCard1 = (props: HomeCard1Props) => {
  return (
    <>
      <div className='xl:w-[26%] w-[90%] flex text-center flex-col items-center gap-[10px]'>
        <Image src={props.image} alt='' />
        <h1 className='font-bold text-[22px]'>{props.text}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default HomeCard1;
