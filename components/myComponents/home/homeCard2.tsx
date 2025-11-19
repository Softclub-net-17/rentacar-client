import Image, { StaticImageData } from "next/image";
import React from "react";

interface HomeCard2Props {
  img: string | StaticImageData;
  text: string;
  description: string;
}

const HomeCard2 = (props: HomeCard2Props) => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <Image src={props.img} alt="" />
          <h1 className="text-[20px] font-bold">{props.text}</h1>
        </div>
        <p className="text-gray-500">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default HomeCard2;
